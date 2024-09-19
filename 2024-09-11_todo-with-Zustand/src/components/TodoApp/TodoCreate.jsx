import React, { useState } from "react";
import useTodoStore from "../../zustand/stores/todo.store";
import { useNavigate } from "../../zustand/stores/router.store";

function TodoCreate() {
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const createTodo = useTodoStore((state) => state.createTodo);

  const handleChangeInput = (e) => {
    setContent(e.target.value);
  };

  const handleClickCreateButton = () => {
    createTodo(content);
    navigate("list");
  };

  return (
    <div className="p-5 flex gap-x-2.5">
      <input
        type="text"
        value={content}
        onChange={handleChangeInput}
        className="border border-black "
        autoFocus
      />

      <button className="border border-black" onClick={handleClickCreateButton}>
        생성하기
      </button>
    </div>
  );
}

export default React.memo(TodoCreate);
