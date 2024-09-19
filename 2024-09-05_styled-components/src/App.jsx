/* eslint-disable no-unused-vars */
import styled from "styled-components";
import ColorChanger1 from "./components/ColorChanger/ColorChanger1";
import ColorChanger2 from "./components/ColorChanger/ColorChanger2";
import { useState } from "react";
import ColorChanger3 from "./components/ColorChanger/ColorChanger3";
import ColorChanger4 from "./components/ColorChanger/ColorChanger4";

function App() {
  const [isLiked, setIsLiked] = useState(false);

  const handleClickLike = () => {
    setIsLiked((prevIsLike) => !prevIsLike);
  };

  return (
    <>
      <Title color={"pink"}>안녕하세요</Title>
      <Like isLiked={isLiked} onClick={handleClickLike}>
        ♥{" "}
      </Like>
      <Text>가나다라마바사아자차카타파하</Text>
      <Last>마지막입니다.</Last>
      <ColorChanger4 />
    </>
  );
}

// styled-components(대문자로 시작)

// 화살표함수를 사용해 props 받아와 그 안에서 color값 가져오기
const Title = styled.h1`
  text-align: center;
  font-size 100px;
  color: ${(props) => props.color}; 
  background-color: black;
`;

// 클릭 on/off
// true면 red false면 gray
const Like = styled.button`
  all: unset;
  color: ${(props) => (props.isLiked ? "red" : "gray")};
`;

const Text = styled.p`
  text-align: center;
  font-size 50px;
  color: white;
  background-color: orange;
`;

const Last = styled.h2`
  font-size: 15px;
  background-color: gray;
  color: black;
`;

export default App;
