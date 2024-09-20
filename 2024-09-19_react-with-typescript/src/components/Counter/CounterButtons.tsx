import React from "react";

// 이름은 컴포넌트명 + props
interface CounterButtonsProps {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  increment: () => void;
  decrement: () => void;
}
// 기본 속성 복사해오기

function CounterButtons({
  setCount,
  increment,
  decrement,
}: CounterButtonsProps) {
  return (
    <>
      <div>
        {/* props 그냥 넘겨줌 */}
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>
          -
        </button>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          +
        </button>
      </div>

      <br />

      <div>
        {/* 함수를 만들어 넘겨줌 */}
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}

export default CounterButtons;
