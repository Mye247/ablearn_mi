"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const n = 5;
const s = "123";
const b = true;
const a = "abc";
let c = "abc"; // 기본적으로 주어진 타입을 추론하여 이후 넣는 값들에도 적용함
// c = 123
const d = [1, 2, 3]; // 숫자로만 이루어진 배열
const e = ["1", "2", "3"];
const t = ["1", "ad", "ad"];
const g = { hello: 123 };
const w = { hello: 123 };
// Record = 객체
// key를 string, value를 number로 지정
function someFunction(x) {
    return String(a);
}
// 매개변수값을 number로 받고 return 값을 string으로 받는다
const anotherFunction = (x, y) => {
    return true;
};
// 타입의 내용을 담아놓은 것
const student = {
    name: "agee",
    age: 123,
    address: "Seoul",
    PhoneNumber: "123",
};
const student2 = {
    address,
    age,
    name,
};
// string or number
const phoneNumber1 = "010-1234-1234";
function ComponentA(props) {
    return main < /div>;
}
exports.default = ComponentA;
function printAndReturn(x) {
    console.log(x);
    return x;
}
// type 매개변수 넣기
const aaa = printAndReturn("1");
// return 하지 않을 때 void
// extends 제약조건 걸기
const student3 = {
    print(x) { },
};
const stringOrNumber = 5;
const booleanOrNumber = true;
const promise = new Promise((resolve, reject) => resolve(5));
async function sum(a, b) {
    return a + b;
}
const adad = sum(1, 2).then((a) => a);
