import { create } from "zustand";

const useCounterStore = create((set) => ({
  // store에 들어갈 state를 return하는 콜백함수

  count: 1,
  someObj: { a: [1, { b: [1, 2, 3] }], c: { d: [1, 2, 3] } },
  increment: () => set((state) => ({ count: state.count + 1 })), // reducer
  incrementBy: (value) => set((state) => ({ count: state.count + value })), // 입력값을 value로 받아와 state를 변경

  // 비동기작업(여기서 안쓰고 Tanstack query에서 작업함)
  // incrementByServerResponse: async () => {
  //   const response = await fetch("hhtht.wwwe.dsad");
  //   const value = await response.json();
  //   set((state) => ({ count: state.count + value }));
  // },

  changeSomeObj: (state) => set(() => ({ someObj: { ...state.someObj } })),
}));

export default useCounterStore;
