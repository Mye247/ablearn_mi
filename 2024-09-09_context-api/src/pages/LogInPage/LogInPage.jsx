/* eslint-disable no-unused-vars */
import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth.context";

function LoginPage() {
  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const idInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const handleClickButton = (e) => {
    e.preventDefault();

    const id = idInputRef.current.value;
    const password = passwordInputRef.current.value;

    const credential = { id, password };
    logIn(credential);

    navigate("/");
  };

  return (
    <div>
      <main className="text-center">
        <h1 className="my-5 text-xl font-bold">로그인 페이지</h1>
        <form
          className="border border-black py-5 w-80 mx-auto"
          onSubmit={handleClickButton}
        >
          <ul>
            <li>
              <label htmlFor="id" className="mr-[60px]">
                ID
              </label>
              <input
                type="text"
                name=""
                id="id"
                className="border border-black"
                placeholder="아이디입력"
                ref={idInputRef}
              />
            </li>
            <li>
              <label htmlFor="password" className="mr-2">
                Password
              </label>
              <input
                type="password"
                name=""
                id="password"
                className="border border-black"
                placeholder="비밀번호입력"
                ref={passwordInputRef}
              />
            </li>
          </ul>

          <button className="border border-black mt-5" type="submit">
            회원가입하기
          </button>
        </form>
      </main>
    </div>
  );
}

export default LoginPage;
