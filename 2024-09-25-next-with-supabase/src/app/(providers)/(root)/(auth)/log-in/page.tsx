"use client";

import supabase from "@/app/supabase/client";
import React, { useEffect, useState } from "react";

function LogInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClickLogIn = async () => {
    if (!email.includes("@") || !email.includes("."))
      return alert("이메일 주소가 올바르지 않습니다");
    if (!password) return alert("비밀번호를 입력해 주세요");

    const result = await supabase.auth.signInWithPassword({ email, password });

    console.log(result);
  };

  useEffect(() => {
    (async () => {
      const user = await supabase.auth.getUser();
      console.log(user);
    })();
  }, []);

  return (
    <div>
      <h1>로그인하기</h1>
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

      <button onClick={handleClickLogIn}>로그인하기</button>
    </div>
  );
}

export default LogInPage;
