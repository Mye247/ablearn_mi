import React from "react";
import SignUpForm from "./_components/SignUpForm";

function SignUpPage() {
  return (
    <div className="p-5 text-center font-bold text-2xl mb-10">
      <h1>회원가입</h1>

      <SignUpForm />
    </div>
  );
}

export default SignUpPage;
