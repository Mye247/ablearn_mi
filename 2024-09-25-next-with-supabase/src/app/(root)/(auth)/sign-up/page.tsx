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

  return (
    <div>
      <h1>회원가입하기</h1>
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
