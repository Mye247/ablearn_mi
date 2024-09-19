import Backdrop from "./components/Backdrop/Backdrop";
import DarkMode from "./components/Dark";
import Modal from "./components/Modal/Modal";
import ModalA from "./components/ModalA/ModalA";
import { useModal } from "./contexts/modal.context";
import { useTheme } from "./contexts/theme.context";


function App() {
  const modal = useModal();
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      id="app"
      className={`w-screen h-screen ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <header className="p-5 bg-lime-200 h-28 text-black">
        <h1 className="text-5xl font-bold">Modal with context-api</h1>
      </header>

      <main className="py-10 px-5">
        <section>
          <h2 className="text-2xl font-semibold">
            Context API는 세 가지만 기억해라
          </h2>

          <ul className="list-decimal text-lg list-inside mt-5">
            <li>만든다</li>
            <li>사용한다</li>
            <li>범위를 지정해 값을 내려준다</li>
          </ul>
        </section>

        <section className="mt-10 flex gap-5">
          <button
            onClick={() => modal.open(<ModalA />)}
            className="p-3 active:bg-lime-50 hover:text-cyan-400 text-white bg-blue-400 rounded-lg"
          >
            모달A 띄우기
          </button>

          <button
            className="p-3 active:bg-lime-50 hover:text-cyan-400 text-white bg-blue-400 rounded-lg"
            onClick={toggleTheme}
          >
            {theme === "light" ? "라이트모드" : "다크모드"}
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;
