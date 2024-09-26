"use client";

import { useAuthStore } from "@/zustand/auth.store";
import { useRouter } from "next/navigation";
import React from "react";

function LoggedInOnlyLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const isAuthInitialized = useAuthStore((state) => state.isAuthInitialized);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  if (!isAuthInitialized) return <div>... 로그인 여부 확인중 ...</div>;
  if (!isLoggedIn) {
    return router.replace("/log-in");
  }

  return children;
}

export default LoggedInOnlyLayout;
