import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { PROMETHEUS_SESSION } from "@/constants";
import { Auth, authSignIn } from "@/infra/services/auth.service";

type SessionData = {
  authSession?: Auth;
  loading: boolean;
  signIn(username: string, password: string): Promise<void>;
  signOut(): void;
};

type SessionProviderProps = {
  children?: React.ReactNode;
};

export const SessionContext = createContext({} as SessionData);

export function SessionProvider({ children }: SessionProviderProps) {
  const [authSession, setAuthSession] = useState<Auth>();
  const [loading, setLoading] = useState(false);

  const signIn = useCallback(async (username: string, password: string) => {
    try {
      setLoading(true);
      const response = await authSignIn(username, password);
      if (response.data.error) {
        throw response.data.error;
      }

      setAuthSession(response.data.success?.auth);

      await AsyncStorage.setItem(
        PROMETHEUS_SESSION,
        JSON.stringify(response.data.success?.auth),
      );

      router.push("(app)");
    } catch (error) {
      console.warn("error:: ", error);
      throw error;
    } finally {
      setLoading(false);
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
    <SessionContext.Provider value={{ authSession, loading, signIn, signOut }}>
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  return useContext(SessionContext);
}
