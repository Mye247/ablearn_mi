/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";
// styled components 사용
function ColorChanger3() {
  const [color, setColor] = useState("black");

  const handleClickButton = (color) => {
    setColor(color);
  };

  return (
    <div>
      <Title color={color}>ColorChanger</Title>

      <ul>
        <li>
          <Click onClick={()=>handleClickButton("red")}>red</Click>
        </li>
        <li>
          <Click onClick={()=>handleClickButton("blue")}>파랑</Click>
        </li>
        <li>
          <Click onClick={()=>handleClickButton("yellow")}>노랑</Click>
        </li>
        <li>
          <Click onClick={()=>handleClickButton("orange")}>주황</Click>
        </li>
        <li>
          <Click onClick={()=>handleClickButton("purple")}>보라</Click>
        </li>
        <li>
          <Click onClick={()=>handleClickButton("black")}>검정</Click>
        </li>
      </ul>
    </div>
  );
}

const Title = styled.h1`
  text-align: center;
  color: ${(props) => props.color};
`;

const Click = styled.button`
  color: black;
  color: ${(props) => props.color};
`;

export default ColorChanger3;
