/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./App.css";
import Introduction from "./Introduction";
import Countor from "./countor";

function App() {
  const [input, setInput] = useState("");

  const sayHello = (yourName) => {
    alert("Hello" + yourName + "ya");
  };

  const handleChangeInput = (event) => {
    setInput(event.target.value);
  };

  return (
    <>
      <Introduction name="김서진" age={19} greeting="안녕하세요">
        <p>만나서 반갑고 내일 또 봐요.</p>
      </Introduction>

      <button
        onClick={() => {
          sayHello("123");
        }}
      >
        눌러주세요1
      </button>
      <button
        onClick={() => {
          sayHello("456");
        }}
      >
        눌러주세요2
      </button>

      <br />

      <input type="text" onChange={handleChangeInput} />

      <br />

      <p>당신이 입력한 글자는 {input}입니다</p>

      <hr />

      <Countor />
    </>
  );
}

// 여러개를 보내줄 때 감싸는태그 React.Fragment를 쓰거나 빈 모양으로 사용
export default App;
