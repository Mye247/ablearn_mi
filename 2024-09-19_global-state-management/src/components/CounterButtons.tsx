import React from "react";
import { useCounterStore } from "../Zustand/counterStore";
import { useShallow } from "zustand/shallow";

function CounterButtons() {
  // 각각 꺼내기
  // const increment = useCounterStore((state) => state.increment);
  // const decrement = useCounterStore((state) => state.decrement);

  //한번에 꺼내기
  const { increment, decrement } = useCounterStore(
    useShallow(({ increment, decrement }) => ({
      increment,
      decrement,
    }))
  );

  return (
    <div>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default CounterButtons;
