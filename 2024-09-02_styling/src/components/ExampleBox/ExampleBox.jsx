/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./ExampleBox.module.scss"; // module.scss는 무언가로 받아줘야한다

// css module은 클래스 이름을 유니크하게 만들어 준다 (겹치지않게)

function ExampleBox() {
  return (
    <>
      <div>
        <h6 className="styles.title">박스 제목</h6>
      </div>
    </>
  );
}

export default ExampleBox;
