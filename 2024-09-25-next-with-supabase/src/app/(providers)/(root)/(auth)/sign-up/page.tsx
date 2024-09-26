"use client";

import supabase from "@/app/supabase/client";
import React, { useState } from "react";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClickSignUp = async () => {
    if (!email.includes("@") || !email.includes("."))
      return alert("이메일 주소가 올바르지 않습니다");
    if (!password) return alert("비밀번호를 입력해 주세요");

    const result = await supabase.auth.signUp({ email, password });

    console.log(result);
  };

  const handleClickLogInWithKakao = async () => {
    const response = await supabase.auth.signInWithOAuth({ provider: "kakao" });
    console.log(response);
    // const data = await response.data;
  };

  return (
    <div>
      <h1>회원가입하기</h1>
      <hr />

      <button
        className="bg-yellow-300 text-black font-bold px-5 py-2"
        onClick={handleClickLogInWithKakao}
      >
        카카오로 로그인하기
      </button>

      <hr />
      <input
        type="email"
        className="border border-black"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="border border-black"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleClickSignUp}>회원가입하기</button>
    </div>
  );
}

export default SignUpPage;
