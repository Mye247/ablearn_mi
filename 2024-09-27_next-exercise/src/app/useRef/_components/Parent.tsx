import React, { useRef } from "react";
import Child from "./Child";

function Parent() {
  const countRef = useRef<number>();
  return (
    <div>
      <Child countRef={countRef} />
      <button onClick={() => alert(countRef.current)}>
        누르면 카운트 보여준
      </button>
    </div>
  );
}

export default Parent;
