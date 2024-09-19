/* eslint-disable react/prop-types */
// function Introduction({ name: nickname }) {
//   //구조분해를 사용해 name값 미리 가져오기 =로 기본정보 설정 (객체형식)
//   return <p>저는 {nickname}입니다.</p>;
// }

import React from "react";

function Introduction(props) {

  const { greeting, age, name, children } = props;

  console.log("리렌더링");

  return (
    <React.Fragment>
      <h1>
        {greeting}. 저는 {name}입니다.
      </h1>

      <p>제 나이는 {age}입니다.</p>
      {children}
    </React.Fragment>
  );
}

export default Introduction;
// Introduction을 내보내기
