import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const useTodoStore = create(
  immer(
    persist(
      (set) => ({
        todos: [],

        // 새로운 Todo 생성
        createTodo: (content) =>
          set((state) => ({
            todos: [
              { id: Date.now(), content, isComplete: false },
              ...state.todos,
            ],
          })),

        // Todo 내용 수정
        updateTodoContent: (id, content) =>
          set((state) => ({
            todos: state.todos.map((todo) =>
              todo.id === id ? { ...todo, content } : todo
            ),
          })),

        // Todo 완료 여부 토글
        toggleTodoIsComplete: (id) =>
          set((state) => ({
            todos: state.todos.map((todo) =>
              todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
            ),
          })),

        // Todo 삭제
        deleteTodo: (id) =>
          set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
          })),
      }),
      {
        name: "todo-store", // localStorage 키 이름
      }
    )
  )
);

export default useTodoStore;
