"use client";

import supabase from "@/app/supabase/client";
import { useAuthStore } from "@/zustand/auth.store";
import React, { useEffect } from "react";

function AuthProvider({ children }: { children: React.ReactNode }) {
  const AuthInitialized = useAuthStore((state) => state.AuthInitialized);
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);

  useEffect(() => {
    supabase.auth.onAuthStateChange((_eventName, session) => {
      //optional chaining
      if (session?.user) {
        //로그인하기
        setIsLoggedIn(true);
      } else {
        //로그아웃하기
        setIsLoggedIn(false);
      }

      AuthInitialized();
    });
  }, []);
  return children;
}

export default AuthProvider;
