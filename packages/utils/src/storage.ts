import Cookies from "js-cookie";
import { type User } from "@learnix/types";
import { STORAGE_KEYS } from "./constants";

const COOKIE_OPTIONS: Cookies.CookieAttributes = {
  path: "/",
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
};

export const storage = {
  getToken: (): string | null => {
    if (typeof window === "undefined") return null;
    return Cookies.get(STORAGE_KEYS.TOKEN) || null;
  },
  setToken: (token: string): void => {
    if (typeof window !== "undefined") {
      Cookies.set(STORAGE_KEYS.TOKEN, token, COOKIE_OPTIONS);
    }
  },
  removeToken: (): void => {
    if (typeof window !== "undefined") {
      Cookies.remove(STORAGE_KEYS.TOKEN, COOKIE_OPTIONS);
    }
  },
  getUser: (): User | null => {
    if (typeof window === "undefined") return null;
    try {
      const user = Cookies.get(STORAGE_KEYS.USER);
      return user ? JSON.parse(user) : null;
    } catch {
      return null;
    }
  },
  setUser: (user: User): void => {
    if (typeof window !== "undefined") {
      Cookies.set(STORAGE_KEYS.USER, JSON.stringify(user), COOKIE_OPTIONS);
    }
  },
  removeUser: (): void => {
    if (typeof window !== "undefined") {
      Cookies.remove(STORAGE_KEYS.USER, COOKIE_OPTIONS);
    }
  },
  clearAuth: (): void => {
    if (typeof window !== "undefined") {
      Cookies.remove(STORAGE_KEYS.TOKEN, COOKIE_OPTIONS);
      Cookies.remove(STORAGE_KEYS.USER, COOKIE_OPTIONS);
    }
  },
};
