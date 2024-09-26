"use client";

import { supabase } from "@/supabase/supabase.client";
import { useRouter } from "next/navigation";
import React, { ComponentProps } from "react";

type HandleSubmitSignUpFormEvent = React.FormHTMLAttributes<HTMLFormElement> & {
  preventDefault: target;
  target: HTMLFormElement & {
    email: HTMLFormElement;
    password: HTMLFormElement;
  };
};

function SignUpForm() {
  const router = useRouter();

  const handleSubmitSignUpForm: ComponentProps<"form">["onSubmit"] = async (
    e: HandleSubmitSignUpFormEvent
  ) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    console.log(supabase);

    if (!email) alert("입력좀");
    if (!password) alert("입력좀");

    // 실제로 가입시키는 로직
    const response = await supabase.auth.signUp({ email, password });

    // 가입시킴을 사용자에게 알려주기

    if (response.data.user) {
      alert("축하합니다 가입성공!");
      // 완료
      router.push("/");
    } else {
      alert("가입실패");
    }
  };

  return (
    <form
      className="gird grid-cols-1 gap-y-5"
      onSubmit={handleSubmitSignUpForm}
    >
      <input
        type="email"
        className="border p-4"
        placeholder="이메일입력"
        name="email"
      />
      <input
        type="password"
        className="border p-4"
        placeholder="비번입력"
        name="password"
      />

      <button className="bg-black text-white w-full">회원가입하기</button>
    </form>
  );
}

export default SignUpForm;
