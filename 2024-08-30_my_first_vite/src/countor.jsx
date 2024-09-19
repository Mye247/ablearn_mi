import { useState } from "react";

function Countor() {
  const [count, setCount] = useState(0); //초기값 할당 필요(필수)

  const button = () => {
    setCount(count + 1); //안에 함수를 넣을 수 있음 (업데이터)
    // 함수로 만들어 사용하면 setCount작동하는 시점의 정확한 값을 가져올 수 있다
    console.log(count);
  };
  return (
    <>
      <section>
        <strong>{count}</strong>
        <br />
        <button onClick={button}>1씩 증가시키기</button>
      </section>
    </>
  );
}

export default Countor;
