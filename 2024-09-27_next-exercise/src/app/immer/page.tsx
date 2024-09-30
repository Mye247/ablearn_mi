"use client";

import { produce } from "immer";
import React from "react";

const original = [1, 2, 3, { name: "kim", body: { height: 10, weight: 1 } }];

function ImmerPage() {
  // 1번째 인자로 본체, 두번째 인수로 콜백함수를 받는다
  // 원본을 유지한 상태에서 새로운 값을 내보낼 수 있다
  const newOriginal = produce(original, (draft) => {
    draft[3].body.height = 20;
  });

  original.push(4);
  console.log(newOriginal);

  return <div>page</div>;
}

export default ImmerPage;
