"use client";

import { useAuthStore } from "@/zustand/auth.store";
import Link from "next/link";
import React from "react";

function HeaderAuthMenu() {
  const { currentUser, setCurrentUser } = useAuthStore();

  const handleClickLogOut = () => {
    setCurrentUser(null);
  };

  return (
    <div className="ml-auto">
      {currentUser ? (
        <button onClick={handleClickLogOut}>로그아웃</button>
      ) : (
        <ul className="flex items-center gap-x-4">
          <li>
            <Link href={"/log-in"}>로그인</Link>
          </li>
          <li>
            <Link href={"/sign-up"}>회원가입</Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default HeaderAuthMenu;
