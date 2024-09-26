"use client";

import supabase from "@/app/supabase/client";
import { useAuthStore } from "@/zustand/auth.store";
import Link from "next/link";
import React from "react";

function Header() {
  const isAuthInitialized = useAuthStore((state) => state.isAuthInitialized);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  const handleClickLogOut = () => {
    supabase.auth.signOut();
  };

  return (
    <>
      <header className="border-b border-black">
        <h1>
          <Link href={"/"}>Todo-List(홈)</Link>
        </h1>

        {isAuthInitialized ? (
          <div>
            {isLoggedIn ? (
              <button onClick={handleClickLogOut}>로그아웃</button>
            ) : (
              <nav className="flex gap-2">
                <Link href={"/log-in"}>로그인</Link>
                <Link href={"/sign-up"}>회원가입</Link>
              </nav>
            )}
          </div>
        ) : null}
      </header>
    </>
  );
}

export default Header;
