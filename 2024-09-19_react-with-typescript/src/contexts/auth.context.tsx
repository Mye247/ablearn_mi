import { createContext, PropsWithChildren, useContext, useState } from "react";

type ContextValue = {
  isLoggedIn: boolean;
  currentUser: CurrentUser | null;
  logIn: (id: string, pw: string) => void;
  logOut: () => void;
};

interface CurrentUser {
  id: string;
  nickname: string;
  email: string;
}

const defaultValue: ContextValue = {
  isLoggedIn: false,
  currentUser: null,
  logIn: () => {},
  logOut: () => {},
};

const AuthContext = createContext<ContextValue>(defaultValue);
export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  name: string;
}

export function AuthProvider({
  children,
}: PropsWithChildren<AuthProviderProps>) {
  
  const [isLoggedIn, setIsLoggedIn] =
    useState<ContextValue["isLoggedIn"]>(false);

  const [currentUser, setCurrentUser] =
    useState<ContextValue["currentUser"]>(null);

  const logIn: ContextValue["logIn"] = (id, pw) => {
    if (id === "seojin" && pw === "qwer1234") {
      setIsLoggedIn(true);
      setCurrentUser({
        id: "ggg",
        nickname: "seojin",
        email: "good@gmail.com",
      });
    }
  };

  const logOut: ContextValue["logOut"] = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  const value: ContextValue = {
    currentUser,
    isLoggedIn,
    logIn,
    logOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
