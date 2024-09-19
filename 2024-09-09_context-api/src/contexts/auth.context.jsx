/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useContext, useState } from "react";
import React from "react";

// 만든다
const initialValue = {
  isLoggedIn: false,
  logIn: () => {},
  signUp: () => {},
  currentUser: null,
};

export const AuthContext = createContext(initialValue);

// 사용한다
// useContext(context);

// 범위를 지정해서 값을 내려준다
// 내려줄때 감싸서 아래로 내려줌
// 변경되는 데이터관리는 state랑 같이씀
export function AuthProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [currentUSer, setCurrentUSer] = useState(initialValue.currentUser);
  const isLoggedIn = !!currentUSer; // currentUSer의 boolean으로 형변환

  // 가입정보
  const signUp = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  // 로그인 정보
  const logIn = (credential) => {
    const { id, password } = credential;
    const user = users.find((user) => user.id === id);

    if (!user) return alert("잘못된 ID 정보입니다.");
    if (user.password !== password) return alert("잘못된 PW 입니다");

    setCurrentUSer(user);
  };

  const value = {
    isLoggedIn,
    currentUSer,
    logIn,
    signUp,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
