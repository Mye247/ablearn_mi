import { nanoid } from "nanoid";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]); // 전체 list
  const [inputValue1, setInputValue1] = useState(""); // 추가 value
  const [inputValue2, setInputValue2] = useState(""); // 수정 value

  // 추가 value
  const getInputValue1 = (e) => {
    const value = e.target.value;
    setInputValue1(value);
  };

  // 수정 value
  const getInputValue2 = (e) => {
    const value = e.target.value;
    setInputValue2(value);
  };

  // 추가
  const handleClickCreateList = () => {
    const newList = {
      id: nanoid(),
      title: inputValue1,
      isComplete: false,
    };

    const newTodoList = [newList, ...todoList];

    setTodoList(newTodoList);
    setInputValue1("");
    //비우는건 별로 좋지 않는것 같음(개인적인 의견)
    // 왜냐면 다음에 지우지 않고 바로 같은것으로 추가하려 했을 때 빈 문자로 출력됨

    // 위는 실수 빈 문자열로 수정한걸 input에  value로 지정안해줬음;;
  };

  // 제거
  const handleClickDelete = (listId) => {
    // 지금 가지고 있는 id들이 내가 삭제할 id가 아니라면 남겨 newList에 넣기
    const newList = todoList.filter((list) => list.id !== listId);
    setTodoList(newList);
  };

  // 수정
  const handleClickEdit = (listId, value) => {
    const editList = todoList.map((list) =>
      list.id === listId ? { ...list, title: value } : list
    );
    // 기존 정보 리스트에 map을 돌려
    // 지금 들어있는 listId와 내가 수정하려는 listId가 같다면
    // 삼항연산자를 이용해 정보 리스트에 들어있는 title값을 수정하려 가져온 value값으로 변경한다
    // value가 없다면 기존 리스트에 있던 정보 그대로 진행
    setTodoList(editList); // 수정한 리스트를 기존 리스트에 적용한다
  };

  // 완료/미완료
  const handleClickToggleIsCompleted = (listId) => {
    const editList = todoList.map((list) =>
      list.id === listId ? { ...list, isComplete: !list.isComplete } : list
    );
    // !list.isComplete는 !list.isComplete에 들어있는 값과 반대의 값을 넣어준다는 의미
    // true라면 false를 넣고, false라면 true를 넣는다
    setTodoList(editList);
  };

  return (
    <>
      <main>
        <header className="p-3 bg-black text-white opacity-80">
          <h1 className="ml-3 font-bold text-lg mb-2">to-do-list 추가해보기</h1>

          <input
            type="text"
            onChange={getInputValue1}
            value={inputValue1}
            className="border border-black m-1 text-black"
          />
          <button
            onClick={handleClickCreateList}
            className="m-1 border-solid border-2 border-blue-200 bg-gray-50 px-[3px] text-blue-500"
          >
            추가
          </button>
        </header>

        <hr />
        <section className="">
          <ul>
            {todoList.map((ele) => (
              <li key={ele.id}>
                <h2
                  style={{
                    textDecoration: ele.isComplete ? "line-through" : "none",
                  }}
                  className="font-bold m-3 mx-5"
                >
                  {ele.title}
                </h2>
                <input type="text" onChange={getInputValue2} className="border border-black text-black ml-5"/>
                <button onClick={() => handleClickEdit(ele.id, inputValue2)} className="m-1 border-solid border-2 border-blue-200 bg-gray-50 px-[3px] text-blue-500">
                  수정
                </button>
                <button onClick={() => handleClickDelete(ele.id)} className="m-1 border-solid border-2 border-blue-200 bg-gray-50 px-[3px] text-blue-500">삭제</button>
                <button onClick={() => handleClickToggleIsCompleted(ele.id)} className="m-1 border-solid border-2 border-blue-200 bg-gray-50 px-[3px] text-blue-500">
                  완료/미완료
                </button>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
