import axios from "axios";

export const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});

export const apiPwm = axios.create({
  baseURL: process.env.EXPO_PUBLIC_PWM_API_URL,
});
