import { create } from "zustand";
import { type User } from "@learnix/types";
import { storage } from "@learnix/utils";

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  setAuth: (user: User, token: string) => void;
  updateUser: (user: Partial<User>) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: storage.getUser(),
  token: storage.getToken(),
  isAuthenticated: !!storage.getToken(),
  setAuth: (user, token) => {
    storage.setToken(token);
    storage.setUser(user);
    set({ user, token, isAuthenticated: true });
  },
  updateUser: (partialUser) => {
    set((state) => {
      if (!state.user) return state;
      const updatedUser = { ...state.user, ...partialUser };
      storage.setUser(updatedUser);
      return { user: updatedUser };
    });
  },
  logout: () => {
    storage.clearAuth();
    set({ user: null, token: null, isAuthenticated: false });
  },
}));
