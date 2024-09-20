import React, { useState } from "react";
import CounterDisplay from "./CounterDisplay";
import CounterButtons from "./CounterButtons";

function Counter() {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => count - 1);

  return (
    <div>
      <CounterDisplay count={count} />
      <CounterButtons
        increment={increment}
        decrement={decrement}
        setCount={setCount}
      />
    </div>
  );
}

export default Counter;
