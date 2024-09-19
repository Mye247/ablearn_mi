/* eslint-disable no-unused-vars */
import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth.context";

function SignUpPage() {
  //       // 이전방식
  //   // 값이 변경되면 리렌더링
  //   const [id, setId] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [nickname, setNickname] = useState("");

  //   const handleChangeId = (e) => {
  //     const value = e.target.value;
  //     if (isNaN(Number(value))) return;
  //     setId(value);
  //   };

  // 새방식
  // dom을 저장하기 위해서만 쓰지 않음
  // 초기값은 null로 넣어주어야함
  // 값이 변경되도 리렌더링안됨

  // 리렌더링안되는그릇

  const navigate = useNavigate();
  const { signUp } = useContext(AuthContext);

  const idInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const nicknameInputRef = useRef(null);

  const handleClickButton = (e) => {
    e.preventDefault();
    const id = idInputRef.current.value; //값 꺼내기
    const password = passwordInputRef.current.value;
    const nickname = nicknameInputRef.current.value;

    const data = {
      id,
      password,
      nickname,
    };

    console.log(data);
    console.log(idInputRef, passwordInputRef, nicknameInputRef); // null, 객체로써 current값을 가지고 있음

    signUp(data);
    navigate("/");
  };

  return (
    <main className="text-center">
      <h1 className="my-5 text-xl font-bold">회원가입 페이지</h1>
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
          <li>
            <label htmlFor="Nickname" className="mr-1">
              Nickname
            </label>
            <input
              type="text"
              name=""
              id="Nickname"
              className="border border-black"
              placeholder="닉네임입력"
              ref={nicknameInputRef}
            />
          </li>
        </ul>

        <button className="border border-black mt-10" type="submit">
          회원가입하기
        </button>
      </form>
    </main>
  );
}

export default SignUpPage;
