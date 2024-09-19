const dayjs = require("dayjs");

require("dayjs/locale/ko"); // 한국어 형식으로 바꾸기
dayjs.locale("ko");

const dateTime = dayjs(); // dayjs가 준비한 객체

const date = new Date(); // 자바가 준비한 객체

console.log(dateTime.month());

console.log(dateTime.format("YYYY-MM-DD HH:mm"));

// 2024-08-29 (목) 16:16:22
console.log(dateTime.format("YYYY-MM-DD (ddd) HH:mm:ss"));
