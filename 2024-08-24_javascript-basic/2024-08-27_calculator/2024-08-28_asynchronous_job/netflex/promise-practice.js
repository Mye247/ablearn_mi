/*
const promise = new Promise((resolve, reject) => {
  const success = false;

  if (success) {
    resolve(100);
  } else {
    reject(500);
  }
});

someFunction()
  .then((result) => console.log(result))
  .catch((result) => console.log(error));

async function someFunction() {
  return 5; // resolve값
  throw new error();
}

// await쓸거면 try,catch문을 사용해야한다
try {
  const a = await someFunction(); // 5를 돌려줄게 라는 약속, 어쩌면 500을 돌려주는 약속
  console.log(1);
} catch (e) {
  console.log(2, e);
}
*/

/*
    API 호출은
Application Programming Interface
소프트웨어를 프로그래밍적인 방법으로 접근하는 것 

웹 개발에서는
데이터를 가져올 일이 많다
데이터를 제공하는 소프트웨어(서버)를 누군가가 만들어
소프트웨어(서버)와 접촉하는 그 방법들을 API라고 한다
접촉하는 행위(통신) API 호출
API Documentataion

API 호출을 할 수 있도록 도와주는 내장함수는?
fetch()

method
get : 가져오기
post : 일부분만 수정
foot : 전체를 수정
delete : 삭제하기

DOM 은 트리구조로 되어있다
가치지듯이 나가있는 구조 : 트리구조

DOM은
자바스크립트의 객체 

JSON
JSON은 자료형은 객체(object)처럼 생긴 문자열(string)이다

문자열인 이유
-통신을 실어 보내는 과정에서 유리하다
-대부분의 언어에서 호환이 되는 자료이기 떄문에

객체는 중괄호로 만들고
"key" : value로 이루어졌다
value에는 boolean, number, string 전부 들어간다

'{"someKey": false}'
'1' => 1
'"1"' => "1"
*/
const url = "https://www.naver.com";
fetch(url, {method: "GET", headers: {
    Authorization: "bearer 실제토큰은이뒤에작성"
}})
.then((result)=>console.log(result))
// 요청하면 정상적이지 않은 접근으로 판단해 오류가 난다
// 이것은 cmd에서 curl 주소 를 치면 나온다

const a = {
    name : "young",
    age : 35
}
// 데이터를 body에 담아 보낸다
// 문자열로 변환 JSON.stringify() 하여 보낸다

fetch("https://www.naver.com", {method: "POST", body: JSON.stringify(a), })







