// axios.ts
import axios, { type AxiosRequestConfig } from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 10000, 
  withCredentials: true,
});

// Generic helpers
export const getApi = <T>(url: string, config?: AxiosRequestConfig) =>
  api.get<T>(url, config);

export const postApi = <T, D = unknown>(url: string, data?: D, config?: AxiosRequestConfig) =>
  api.post<T>(url, data, config);
