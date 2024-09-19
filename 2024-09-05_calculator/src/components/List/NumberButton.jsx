/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

function NumberButton({ label, bgColor }) {
  const [colors, setColors] = useState("bg-white");

  useEffect(() => {
    setColors(bgColor);
  }, [bgColor]);

 

  return (
    <li className={`${colors} h-24 border-[1px] border-black`}>
      <button className={`p-6 text-white hover:text-black active:text-white`}>
        {label}
      </button>
    </li>
  );
}

export default NumberButton;
