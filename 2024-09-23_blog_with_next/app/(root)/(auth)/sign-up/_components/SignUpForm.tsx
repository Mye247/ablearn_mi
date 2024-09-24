"use client";

import { signUp } from "@/api/authAPI";
import Button from "@/app/(root)/_components/Button";
import Input from "@/components/Input";
import { SignUpData } from "@/schemas/auth.schema";
import { useRouter } from "next/navigation";
import React, { ComponentProps, useEffect, useRef } from "react";

function SignUpForm() {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const passwordConfirmInputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const handleSubmitForm: ComponentProps<"form">["onSubmit"] = async (e) => {
    e.preventDefault();

    if (!emailInputRef.current) return;
    if (!passwordInputRef.current) return;
    if (!passwordConfirmInputRef.current) return;

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    const passwordConfirm = passwordConfirmInputRef.current.value;

    // 예외처리
    if (!email) return alert("이메일 주소를 입력해 주세요");
    if (!password) return alert("비밀번호를 입력해 주세요");
    if (!passwordConfirm) return alert("비밀번호 확인을 입력해 주세요");

    if (!email.includes("@"))
      return alert("올바른 이메일 주소를 입력해 주세요");
    if (password.length < 8) return alert("비밀번호는 8글자 이상이여야 합니다");
    if (password !== passwordConfirm)
      return alert("비밀번호가 일치하지 않습니다.");

    const data: SignUpData = {
      email,
      password,
    };

    await signUp(data);

    alert("축하합니다 회원가입에 성공하셨습니다");
    
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
      <Input
        label="비밃번호 확인"
        type="password"
        wrapperClassName="w-80"
        ref={passwordConfirmInputRef}
      />

      <Button className="w-80 mt-5">가입하기</Button>
    </form>
  );
}

export default SignUpForm;
