import api from '../api';

type AuthSignResponse = {
    error: string;
};

export async function authSignIn(username: string, password: string) {
    try {
        const response = await api.post<AuthSignResponse, any>('login', { v_usuario: username, v_senha: password });
        return response;
    } catch (error) {
        throw error;
    }
}
