/* eslint-disable no-unused-vars */
import React from "react";
import useRouterStore from "../../zustand/stores/router.store";
import TodoList from "./TodoList";
import TodoCreate from "./TodoCreate";

function TodoRoutes() {
  const currentLocation = useRouterStore((state) => state.currentLocation);
  return (
    <>
      {currentLocation === "list" && <TodoList />}
      {currentLocation === "new" && <TodoCreate />}
    </>
  );
}

export default TodoRoutes;
