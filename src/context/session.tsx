import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { router } from "expo-router";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { authSignIn } from "@/infra/services/auth.service";

type SessionData = {
    authSession?: string;
    signIn(username: string, password: string): Promise<void>;
    signOut(): void;
}

type SessionProviderProps = {
    children?: React.ReactNode;
}

export const SessionContext = createContext({} as SessionData);

export function SessionProvider({ children }: SessionProviderProps) {
    const [authSession, setAuthSession] = useState<string>();

    const signIn = useCallback(async (username: string, password: string) => {
        try {
            const response = await authSignIn(username, password);
            console.warn('response: ', response);

            if (response?.error) {
                throw response;
            }

            // setAuthSession(response.data);
            // await AsyncStorage.setItem('@Prometheus:session', JSON.stringify(response));
            router.push('/');
        } catch (error) {
            console.warn('error:: ', error.error);
            throw error;
        }
    }, []);

    const signOut = useCallback(async () => {
        await AsyncStorage.clear();
        setAuthSession(undefined);
        router.push('/')
    }, [])

    useEffect(() => {
        // load user data
    }, [])

    return (
        <SessionContext.Provider value={{ authSession, signIn, signOut }}>
            {children}
        </SessionContext.Provider>
    )
}

export function useSession() {
    return useContext(SessionContext);
}
