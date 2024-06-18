import { Alert } from "react-native";
import { IResponse } from "../types";

type Method = "GET" | "POST" | "PUT" | "DELETE";

async function errorResponse(response: Response) {
  const errorData = (await response.json()) as IResponse;
  console.warn("API Error:", errorData);
  return {
    data: "Erro inesperado",
    status: response.status,
  };
}

async function call<T, Params>(
  method: Method,
  url: string,
  body?: Params,
): Promise<T> {
  try {
    Alert.alert(`Dados: ${process.env.EXPO_PUBLIC_API_URL}/${url}`);

    let response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/${url}`, {
      method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const error = await errorResponse(response);
      throw error;
    }

    const responseData = (await response.json()) as IResponse;
    return responseData as T;
  } catch (error: any) {
    throw error;
  }
}

async function get<T>(url: string) {
  try {
    const response = await call<T, any>("GET", url);
    return response;
  } catch (error) {
    throw error;
  }
}

async function post<T, Params>(url: string, data: Params) {
  try {
    const response = await call<T, Params>("POST", url, data);
    return response;
  } catch (error) {
    throw error;
  }
}

async function put<T, Params>(url: string, data: Params) {
  try {
    const response = await call<T, Params>("PUT", url, data);
    return response;
  } catch (error) {
    throw error;
  }
}

export default {
  get,
  post,
  put,
};
