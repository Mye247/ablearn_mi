"use client";

import { createContext, PropsWithChildren, useContext, useState } from "react";

type AuthContextValue = {
  isAuthInitialized: boolean;
  isLoggedIn: boolean;
};

const initialContextValue: AuthContextValue = {
  isAuthInitialized: false,
  isLoggedIn: false,
};

const AuthContext = createContext(initialContextValue);

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: PropsWithChildren) {
  const [isAuthInitialized, setIsAuthInitialized] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const value: AuthContextValue = {
    isAuthInitialized,
    isLoggedIn,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
