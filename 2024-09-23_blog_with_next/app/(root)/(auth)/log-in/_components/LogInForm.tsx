"use client";

import { LogIn } from "@/api/authAPI";
import Button from "@/app/(root)/_components/Button";
import Input from "@/components/Input";
import { SignUpData as LogInData } from "@/schemas/auth.schema";
import { useAuthStore } from "@/zustand/auth.store";
import { useRouter } from "next/navigation";
import React, { ComponentProps, useEffect, useRef } from "react";

function LogInForm() {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const setCurrentUser = useAuthStore((state) => state.setCurrentUser);

  const router = useRouter();

  const handleSubmitForm: ComponentProps<"form">["onSubmit"] = async (e) => {
    e.preventDefault();

    if (!emailInputRef.current) return;
    if (!passwordInputRef.current) return;

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    // 예외처리
    if (!email) return alert("이메일 주소를 입력해 주세요");
    if (!password) return alert("비밀번호를 입력해 주세요");

    if (!email.includes("@"))
      return alert("올바른 이메일 주소를 입력해 주세요");
    if (password.length < 8) return alert("비밀번호는 8글자 이상이여야 합니다");

    const data: LogInData = {
      email,
      password,
    };

    const currentUser = await LogIn(data);
    setCurrentUser(currentUser)

    alert("로그인에 성공하셨습니다");

    router.push("/");
  };

  useEffect(() => {
    console.log("emailInputRef.current", emailInputRef.current);
  }, []);

  return (
    <form
      className="flex flex-col items-center gap-y-4"
      onSubmit={handleSubmitForm}
    >
      <Input
        label="이메일 주소"
        type="email"
        wrapperClassName="w-80"
        ref={emailInputRef}
      />
      <Input
        label="비밀번호"
        type="password"
        wrapperClassName="w-80"
        ref={passwordInputRef}
      />

      <Button className="w-80 mt-5">로그인 하기</Button>
    </form>
  );
}

export default LogInForm;
