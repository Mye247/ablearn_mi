import React, { useState } from "react";
import { createContext, useContext } from "react";

// 만든다
// 사용한다
// 범위를 지정해 값을 내려준다

const initialValue = {
  id,
  password,
  nickname,
};

const FormContext = createContext(initialValue);

export const useForm = () => useContext(FormContext);

export function FormProvider({ children }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const value = {
    id,
    password,
    nickname,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}
