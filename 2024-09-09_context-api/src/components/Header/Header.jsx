/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth.context";

function Header() {
  const { isLoggedIn, currentUser: currentUSer } = useContext(AuthContext);
  return (
    <>
      <header className="text-center bg-black text-white p-5 border-b-red-500">
        <h1 className="font-bold">안녕하세요 전체 헤더입니다!</h1>
      </header>

      <nav className="flex justify-stretch gap-x-3">
        <Link to="/" className="inline-block pl-5">
          홈으로
        </Link>
        {isLoggedIn ? (
          <Link to="/my-page">마이 페이지</Link>
        ) : (
          <>
            <Link to="/sign-up" className="inline-block pl-5">
              회원가입
            </Link>
            <Link to="/log-in" className="inline-block pl-5">
              로그인
            </Link>
          </>
        )}
      </nav>
    </>
  );
}

export default Header;
