"use client";

import supabase from "@/app/supabase/client";
import { useAuthStore } from "@/zustand/auth.store";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function LogInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);
  const router = useRouter();

  const handleSubmitSignUp = async () => {
    if (!email.includes("@")) return alert("올바르게 이메일을 작성해 주세요");
    if (!password) return alert("비밀번호를 입력해 주세요");

    const result = await supabase.auth.signInWithPassword({ email, password });

    setIsLoggedIn(true);

    router.push("/");

    console.log(result);
  };


  return (
    <div className="text-center">
      <h1>로그인 페이지</h1>

      <input
        type="email"
        placeholder="이메일"
        className="border border-black"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호"
        className="border border-black"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="border border-black" onClick={handleSubmitSignUp}>
        로그인 하기
      </button>
    </div>
  );
}

export default LogInPage;
