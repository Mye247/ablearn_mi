"use client";

import React, { useRef } from "react";
import Parent from "./_components/Parent";

function UseRefPage() {
  // const [hoverCount, setHoverCount] = useState(0);

  const hoverCountRef = useRef(0);
  return (
    <div>
      <Parent />

      <button
        onMouseEnter={() => {
          hoverCountRef.current += 1;
        }}
        onClick={() => alert(hoverCountRef.current)}
      >
        중요한 버튼
      </button>
    </div>
  );
}

export default UseRefPage;
