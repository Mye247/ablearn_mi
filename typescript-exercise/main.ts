const n: number = 5;
const s: string = "123";
const b: boolean = true;

const a = "abc";
let c = "abc"; // 기본적으로 주어진 타입을 추론하여 이후 넣는 값들에도 적용함

// c = 123

const d = [1, 2, 3]; // 숫자로만 이루어진 배열

const e = ["1", "2", "3"];

const t: string[] = ["1", "ad", "ad"];

const g: Record<string, number> = { hello: 123 };
const w: { [key: string]: number } = { hello: 123 };

// Record = 객체
// key를 string, value를 number로 지정

function someFunction(x: number): string {
  return String(a);
}
// 매개변수값을 number로 받고 return 값을 string으로 받는다

const anotherFunction: (x: number, y: string) => boolean = (x, y) => {
  return true;
};
// 화살표함수의 타입 정의

interface Student {
  name: string;
  age: number;
  address: string;
  PhoneNumber: PhoneNumber; // 타입 연결
}
// 타입의 내용을 담아놓은 것

const student: Student = {
  name: "agee",
  age: 123,
  address: "Seoul",
  PhoneNumber: "123",
};

const student2: Student = {
  address,
  age,
  name,
};
// 재사용

type PhoneNumber = string | number;
// string or number

const phoneNumber1: PhoneNumber = "010-1234-1234";

type MZStudent = Student & { energy: number };
// 더해주기

import React from "react";

interface ComponentAProps {
  count: number;
}

function ComponentA(props: ComponentAProps) {
  return <div>main</div>;
}

export default ComponentA;

function printAndReturn<T>(x: T): T {
  console.log(x);

  return x;
}
// type 매개변수 넣기

const aaa = printAndReturn<string>("1");
// 함수 사용하기

type Printable<T extends Record<string, any>> = T & { print: (x: any) => void };
// return 하지 않을 때 void
// extends 제약조건 걸기

const student3: Printable<Student> = {
  print(x) {},
};

type AddNumberType<T> = T | number;

const stringOrNumber: AddNumberType<string> = 5;
const booleanOrNumber: AddNumberType<boolean> = true;

const promise = new Promise<number>((resolve, reject) => resolve(5));

async function sum(a: number, b: number): Promise<number> {
  return a + b;
}

const adad = sum(1, 2).then((a) => a);

