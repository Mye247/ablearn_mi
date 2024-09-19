/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function List() {
 

  return (
    <ul>
      <li>
        <p>아침먹기</p>
        <input type="text" />
        <button>수정</button>
        <button>삭제</button>
        <button>완료/미완료</button>
      </li>
    </ul>
  );
}

export default List;

/*
const handleClickButton = (evnet)=>{
    console.log(event.target.value);
    setList();
  }
*/
