import TodoApp from "./components/TodoApp/TodoApp";

function App() {
  return (
    <>
      <div className="text-red-400 font-bold text-xl m-5">Hello</div>

      <div className="h-screen flex items-center justify-center ">
        <TodoApp />
      </div>
    </>
  );
}

export default App;
