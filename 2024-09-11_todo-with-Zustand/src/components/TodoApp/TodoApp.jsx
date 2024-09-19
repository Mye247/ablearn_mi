/* eslint-disable no-unused-vars */
import React from "react";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import useRouterStore from "../../zustand/stores/router.store";
import TodoRoutes from "./TodoRoutes";

function TodoApp() {
  
  return (
    <main className="border border-black w-[300px] h-[400px] ">
      <TodoHeader />
      <TodoRoutes />
    </main>
  );
}

export default TodoApp;
