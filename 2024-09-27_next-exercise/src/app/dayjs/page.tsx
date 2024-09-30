import dayjs from "dayjs";
import React from "react";

function DayjsPage() {
  // 기존 시간 가져오는 방식
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = date.getSeconds();

  const result = `${year}-${month}-${day}-${hours}-${minutes}-${seconds}`;

  // 대문자로 나타내면 24시 기준으로 표현함
  const result2 = dayjs().format("YYYY-MM-DD hh-mm-ss");

  // 현재 날짜에서 1년 빼서 나타내기
  const result3 = dayjs().subtract(1, "year").format("YYYY-MM-DD hh-mm-ss");

  return (
    <div>
      <section>
        <h2>자바스크립트 기본방식</h2>
        <strong>{result}</strong>
      </section>
      <hr />
      <section>
        <h2>dayjs 방식</h2>
        <strong>{result2}</strong>
      </section>
      <hr />
      <section>
        <h2>dayjs로 1년전 시간 나타내기</h2>
        <strong>{result3}</strong>
      </section>
    </div>
  );
}

export default DayjsPage;
