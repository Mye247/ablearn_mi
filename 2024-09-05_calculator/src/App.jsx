import Header from "./components/Header/header";
import NumberButton from "./components/List/NumberButton";

function App() {
  const buttons = [
    ["AC", "bg-gray-500"],
    ["+/-", "bg-gray-500"],
    ["%", "bg-gray-500"],
    ["÷", "bg-orange-300"],

    ["7", "bg-gray-400"],
    ["8", "bg-gray-400"],
    ["9", "bg-gray-400"],
    ["x", "bg-orange-300"],

    ["4", "bg-gray-400"],
    ["5", "bg-gray-400"],
    ["6", "bg-gray-400"],
    ["-", "bg-orange-300"],

    ["1", "bg-gray-400"],
    ["2", "bg-gray-400"],
    ["3", "bg-gray-400"],
    ["+", "bg-orange-300"],
  ];

  return (
    <>
      <main className="w-[400px] h-[600px] bg-black mx-auto my-24 rounded-2xl">
        {/* header */}
        <Header />

        <section>
          <ul className="text-white grid grid-cols-4 grid-rows-5 text-center text-3xl font-bold">
            {/* 1번줄 */}

            {buttons.map(([label, bgColor]) => (
              <NumberButton key={label} label={label} bgColor={bgColor} />
            ))}

            {/* 5번줄 */}
            <li className="bg-gray-400 h-24 col-span-2 rounded-bl-2xl border-[1px] border-black">
              <button className="p-6 ">0</button>
            </li>

            <li className="bg-gray-400 h-24 border-[1px] border-black">
              <button className="p-6 ">.</button>
            </li>
            <li className="bg-orange-300 h-24 rounded-br-2xl border-[1px] border-black">
              <button className="p-6 text-3xl font-semibold">=</button>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
