import { create } from "zustand";

type useCounterState = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const useCounterStore = create<useCounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
