import React from "react";
import { useCounterStore } from "../Zustand/counterStore";

function CounterDisplay() {
  const count = useCounterStore((state) => state.count);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default CounterDisplay;
