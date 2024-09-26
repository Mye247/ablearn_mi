import { create } from "zustand";

type AuthStoreState = {
  isAuthInitialized: boolean;
  isLoggedIn: boolean;
  AuthInitialized: () => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
};

export const useAuthStore = create<AuthStoreState>((set) => ({
  isAuthInitialized: false,
  isLoggedIn: false,
  AuthInitialized: () => set({ isAuthInitialized: true }),
  setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
}));
