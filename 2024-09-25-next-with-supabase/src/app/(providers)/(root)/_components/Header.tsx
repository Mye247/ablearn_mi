"use client";

import supabase from "@/app/supabase/client";
import { useAuthStore } from "@/zustand/auth.store";
import Link from "next/link";
import React from "react";
import { useShallow } from "zustand/shallow";

function Header() {
  //   const [isAuthInit, setIsAuthInit] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   (async () => {
  //     const { data } = await supabase.auth.getUser();
  //     if (!!data.user) setIsLoggedIn(true);

  //     setIsAuthInit(true);
  //   })();
  // }, []);

  const { isLoggedIn, isAuthInitialized } = useAuthStore(
    useShallow(({ isLoggedIn, isAuthInitialized }) => ({
      isLoggedIn,
      isAuthInitialized,
    }))
  );

  const handleClickLogOut = () => {
    supabase.auth.signOut();
  };

  return (
    <header className="flex items-center border-b border-black">
      <Link href={"/"}>홈</Link> |{" "}
      <Link href={"/students/new"}>학생 추가하기</Link>
      {isAuthInitialized ? (
        <div className="ml-auto">
          {isLoggedIn ? (
            <>
              <Link href={"/profile"}>프로필 관리</Link>
              <button onClick={handleClickLogOut}>로그아웃</button>
            </>
          ) : (
            <>
              <Link href={"/log-in"}>로그인</Link> |
              <Link href={"/sign-up"}>회원가입</Link>
            </>
          )}
        </div>
      ) : null}
    </header>
  );
}

export default Header;
