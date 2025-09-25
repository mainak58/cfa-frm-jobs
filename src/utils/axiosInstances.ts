import axios from "axios";
import { DAUTH, SELF_URL, SERVER_BASE_URL } from "./config";

export const nextAppInstance = axios.create({
  withCredentials: true,
  baseURL: typeof window === "undefined" ? SELF_URL : "/api",
});

export const nodeServerInstance = axios.create({
  withCredentials: true,
  baseURL: SERVER_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Dauth: DAUTH,
  },
});

export const nodeServerInstanceWithoutDauth = axios.create({
  baseURL: SERVER_BASE_URL,
});
