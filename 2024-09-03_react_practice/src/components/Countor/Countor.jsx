/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useState } from "react";

function Countor() {
  const [count, setCount] = useState(0);

  const handleClickButton = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // StrictMode 제거후 실행 (main.jsx) 안하면 2번씩 실행됨
  useEffect(() => {
    if (count % 5 === 0 && count !== 0) {
      alert("현재 카운트" + count);
    }
  }, [count]);

  return (
    <>
      <span>{count}</span>
      <button onClick={handleClickButton}>누르면 1씩 증가시키기</button>
    </>
  );
}

export default Countor;
