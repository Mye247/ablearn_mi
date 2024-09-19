/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";

const colors = [
  ["빨강", "red"],
  ["파랑", "blue"],
  ["노랑", "yellow"],
  ["주황", "orange"],
  ["보라", "purple"],
  ["검정", "black"],
];

// styled components

function ColorChanger3() {
  const [color, setColor] = useState("black");

  //함수가 함수를 리턴하는 경우가 있다
  //이런식으로 return해주면 밑에서 handleClickButton사용할 때 함수선언 안해도됨
  const handleClickButton = (color) => () => {
    setColor(color);
  };

  return (
    <div>
      <Title color={color}>ColorChanger4</Title>

      <ul>
        {colors.map(([label, color]) => (
          <li key={color}>
            <ColorButton label={label} onClick={handleClickButton(color)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

// 컴포넌트화
function ColorButton({ onClick: handleClick, label }) {
  return <button onClick={handleClick}>{label}</button>;
}

// 한번에 props 지정하기
const Title = styled.h1`
  text-align: center;

  ${(props) => ` 
    color: ${props.color};
    `}

  ${(props) => {
    if (props.color !== "red") {
      return "";
    } else {
      return `
        border: 1px solid pink;
        color: pink;
        `;
    }
  }}
`;

const Click = styled.button`
  color: black;
`;

export default ColorChanger3;
