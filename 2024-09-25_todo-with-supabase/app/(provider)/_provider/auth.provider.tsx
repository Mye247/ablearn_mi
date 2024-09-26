"use client";

import supabase from "@/app/supabase/client";
import { useAuthStore } from "@/zustand/auth.store";

import React, { useEffect } from "react";

function AuthProvider({ children }: { children: React.ReactNode }) {
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);
  const AuthInitialized = useAuthStore((state) => state.AuthInitialized);

  useEffect(() => {
    supabase.auth.onAuthStateChange((_eventName, session) => {
      if (session?.user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }

      AuthInitialized();
    });
  }, []);

  return children;
}

export default AuthProvider;
