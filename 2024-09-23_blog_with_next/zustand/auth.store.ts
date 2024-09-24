import { create } from "zustand";

export type currentUser = {
  currentUser: { email: string; key: number } | null;
};

export interface AuthStoreState {
  setCurrentUser: (user: currentUser) => void;
}

export const useAuthStore = create<AuthStoreState>((set) => ({
  currentUser: null,
  setCurrentUser: (user) => set({ currentUser: user }),
}));
