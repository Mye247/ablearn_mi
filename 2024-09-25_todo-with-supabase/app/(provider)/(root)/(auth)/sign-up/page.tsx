"use client";

import supabase from "@/app/supabase/client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()

  const handleSubmitSignUp = async () => {
    if (!email.includes("@")) return alert("올바르게 이메일을 작성해 주세요");
    if (!password) return alert("비밀번호를 입력해 주세요");

    const result = await supabase.auth.signUp({ email, password });

    router.push("/")

    console.log(result);
  };

  return (
    <div className="text-center">
      <h1>회원가입 페이지</h1>

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
        계정 만들기
      </button>
    </div>
  );
}

export default SignUpPage;
