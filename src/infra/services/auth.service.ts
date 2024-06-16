import api from "../api";

export type Auth = {
  access_token: string;
  expires_in: string;
  token_type: string;
};

type AuthSignResponse = {
  error?: string;
  success?: {
    auth: Auth;
  };
};

export async function authSignIn(username: string, password: string) {
  try {
    const response = await api.get<AuthSignResponse>(
      `login/?v_usuario=${username}&v_senha=${password}`,
    );
    return response;
  } catch (error) {
    throw error;
  }
}
