/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import Modal from "../Modal/Modal";
import { useModal } from "../../contexts/modal.context";

function Backdrop({ children }) {
  const modal = useModal();
  const closeZoneRef = useRef(null);

  const handleClickBackDrop = (e) => {
    if (closeZoneDOM === e.target) {
      modal.close();
    }
    const closeZoneDOM = closeZoneRef.current;
    console.log("나클릭", closeZoneDOM === e.target());
  };
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/80">
      <div
        className="h-screen flex flex-col items-center justify-center mx-auto"
        onClick={handleClickBackDrop}
      >
        {children}
      </div>
    </div>
  );
}

export default Backdrop;
