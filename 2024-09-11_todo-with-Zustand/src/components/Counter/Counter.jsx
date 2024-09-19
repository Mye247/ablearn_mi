/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import useCounterStore from "../../zustand/stores/counter.store";
import { useShallow } from "zustand/react/shallow";

function Counter() {
  // store에서 불러오기 1
  const count = useCounterStore((state) => state.count);
  // const increment = useCounterStore((state) => state.increment);
  // const incrementBy = useCounterStore((state) => state.incrementBy);

  // store 불러오기 2
  // 단점으로는 state중 하나라도 바뀌면 다같이 리렌더링된다
  // 위처럼 하나씩 꺼내는게 일반적
  // const {increment, incrementBy} = useCounterStore()

  // store 불러오기 3
  // useShallow전체를 감싸 리렌더링 방지(객체의 주소값 고정)
  const { incrementBy, increment } = useCounterStore(
    useShallow((state) => ({
      incrementBy: state.incrementBy,
      increment: state.increment,
    }))
  );

  const [value, setValue] = useState(0);

  const InputDOMRef = useRef();

  return (
    <div className="m-5">
      <h1>카운터</h1>
      <h2>{count}</h2>
      <div>
        <button className="border bg-red-300" onClick={increment}>
          1씩 증가시키기
        </button>
      </div>
      <div>
        <input
          type="text"
          className="border border-black/50"
          ref={InputDOMRef}
          value={String(value)}
          onChange={(e) => setValue(Number(e.target.value))}
        />
        <button
          className="border bg-cyan-100"
          onClick={() => incrementBy(value)}
        >
          누르면 x만큼 증가
        </button>
      </div>
    </div>
  );
}

export default Counter;
