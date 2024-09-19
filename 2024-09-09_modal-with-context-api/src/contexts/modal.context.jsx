import Backdrop from "../components/Backdrop/Backdrop";
import Modal from "../components/Modal/Modal";

import { createContext, useContext, Children, useState } from "react";

const initialValue = {};

// 1. 만든다
const ModalContext = createContext(initialValue);

//2. 사용한다
export const useModal = () => useContext(ModalContext);

//3. 범위를 지정해 값을 내려준다
export function ModalProvider({ children }) {
  const [modalElement, setModalElement] = useState(null);

  const [color, setColor] = useState("white");

  // 열기
  const open = (modalElement) => {
    setModalElement(modalElement);
  };

  // 닫기
  const close = () => {
    setModalElement(null);
  };


  //라이트모드
  const light = () => {
    setColor("white");
  };

  // 다크모드
  const dark = () => {
    setColor("black");
  };


  const value = {
    open,
    close,
    light,
    dark,
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
      {modalElement && <Backdrop>{modalElement}</Backdrop>}
    </ModalContext.Provider>
  );
}
