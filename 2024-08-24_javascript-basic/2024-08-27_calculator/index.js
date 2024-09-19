const resultDom = document.getElementById("number");
console.log(resultDom);

// result 라는 변수에 0지정
let result = 0;

let prevValue = 0;
let prevActiveOperator = null;
let activeOperator = null;

function updateResult(number) {
  result = number;

  // span태그 안에 글자를 result로 설정
  // 결과값 보여주는 곳을 업데이트
  resultDom.innerText = result;
}

// 논리 연산자 지정
function setActiveOperator(operator) {
  activeOperator = operator;
}

function deactivateOperator() {
  prevActiveOperator = activeOperator;
  activeOperator = null;
}

// 화면에 숫자 출력
updateResult(0);

function handleClickNumber(number) {
  if (activeOperator !== null) {
    prevValue = result;
    updateResult(number);
    deactivateOperator();

    return;
  } 

  if (result !== 0) {
    // 문자열로 바꿔 더하고 그걸 다시 숫자로 변환
    const newResult = Number(String(result) + String(number));

    // result안에 넣는 값을 newResult 값으로 지정
    updateResult(newResult);
  } else {
    updateResult(number);
  }
}

// 클릭해서 들어온 plus를 setActiveOperator넣기
function handleClickOperator(operator) {
  if (operator !== "equal") {
    setActiveOperator(operator);
  } else {
    calculate();
  }
}

function calculate() {
  if (prevActiveOperator === "plus") {
    updateResult(prevValue + result);
  } else if (prevActiveOperator === "minus") {
    updateResult(prevValue - result);
  } else if (prevActiveOperator === "nanum") {
    updateResult(prevValue / result);
  } else if (prevActiveOperator === "rhq") {
    updateResult(prevValue * result);
  }
}

const oneDOM = document.querySelector("button.one");
const twoDOM = document.querySelector("button.two");
const threeDOM = document.querySelector("button.three");
const fourDOM = document.querySelector("button.four");
const fiveDOM = document.querySelector("button.five");
const sixDOM = document.querySelector("button.six");
const sevenDOM = document.querySelector("button.seven");
const eightDOM = document.querySelector("button.eight");
const nineDOM = document.querySelector("button.nine");
const zeroDOM = document.querySelector("button.zero");

const dotDOM = document.querySelector("button.dot");

const plusDOM = document.querySelector("button.plus");
const minusDOM = document.querySelector("button.minus");
const nanumDOM = document.querySelector("button.nanum");
const rhqDOM = document.querySelector("button.rhq");

const equalDOM = document.querySelector("button.equal");

// 화살표 함수로 한번 감싸고 함수 실행
oneDOM.addEventListener("click", () => handleClickNumber(1));
twoDOM.addEventListener("click", () => handleClickNumber(2));
threeDOM.addEventListener("click", () => handleClickNumber(3));
fourDOM.addEventListener("click", () => handleClickNumber(4));
fiveDOM.addEventListener("click", () => handleClickNumber(5));
sixDOM.addEventListener("click", () => handleClickNumber(6));
sevenDOM.addEventListener("click", () => handleClickNumber(7));
eightDOM.addEventListener("click", () => handleClickNumber(8));
nineDOM.addEventListener("click", () => handleClickNumber(9));
zeroDOM.addEventListener("click", () => handleClickNumber(0));

plusDOM.addEventListener("click", () => handleClickOperator("plus"));
minusDOM.addEventListener("click", () => handleClickOperator("minus"));
rhqDOM.addEventListener("click", () => handleClickOperator("rhq"));
nanumDOM.addEventListener("click", () => handleClickOperator("nanum"));

equalDOM.addEventListener("click", () => handleClickOperator("equal"));
