import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Auth, authSignIn } from "@/infra/services/auth.service";
import { PROMETHEUS_SESSION } from "@/constants";

type SessionData = {
  authSession?: Auth;
  signIn(username: string, password: string): Promise<void>;
  signOut(): void;
};

type SessionProviderProps = {
  children?: React.ReactNode;
};

export const SessionContext = createContext({} as SessionData);

export function SessionProvider({ children }: SessionProviderProps) {
  const [authSession, setAuthSession] = useState<Auth>();

  const signIn = useCallback(async (username: string, password: string) => {
    try {
      const response = await authSignIn(username, password);
      if (response?.error) {
        throw response;
      }

      setAuthSession(response.success?.auth);
      await AsyncStorage.setItem(
        PROMETHEUS_SESSION,
        JSON.stringify(response.success?.auth),
      );
      router.push("(app)");
    } catch (error) {
      console.warn("error:: ", error.error);
      throw error;
    }
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.clear();
    setAuthSession(undefined);
    router.push("/");
  }, []);

  useEffect(() => {
    async function load() {
      const response = await AsyncStorage.getItem(PROMETHEUS_SESSION);
      if (response) {
        const authData = JSON.parse(response);
        setAuthSession(authData);
        router.push("(app)");
      }
    }

    load();
  }, []);

  return (
    <SessionContext.Provider value={{ authSession, signIn, signOut }}>
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  return useContext(SessionContext);
}
