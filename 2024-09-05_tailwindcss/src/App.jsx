// tailwindcss 사용
// 1단위가 4px로 계산
// h-[180px] 으로 정의되지 않은 값을 사용할 수 있음
// [&&]:mt-20하면 항상 띄어줌 그것들끼리
function App() {
  return (
    <>
      <div className="bg-black text-white min-h-screen">
        <header className="px-10 py-5 flex justify-between items-center">
          <a href="/" className="text-red-500 text-4xl font-bold">
            NETFLEX
          </a>
          <a href="/sign-up" className="text-sm">
            회원가입
          </a>
        </header>

        <main className="px-10 py-16">
          <section className="overflow-auto">
            <h2 className="text-2xl font-semibold mb-10">현재 상영중인 영화</h2>

            <ul className="">
              <li>
                <a href="#" className="flex flex-col gap-y-5">
                  <img src="" alt="" className="bg-white w-80 h-[180px]" />
                  <h5 className="text-lg font-medium text-white">제목</h5>
                </a>
              </li>
            </ul>
          </section>


          <section className="overflow-auto [&&]:mt-20">
            <h2 className="text-2xl font-semibold mb-10">현재 상영중인 영화</h2>

            <ul className="grid grid-cols-5 gap-x-10 gap-y-16">
              <li>
                <a href="#" className="flex flex-col gap-y-5">
                  <img src="" alt="" className="bg-white w-full h-[180px]" />
                  <h5 className="text-lg font-medium text-white">제목</h5>
                </a>
              </li>

              <li>
                <a href="#" className="flex flex-col gap-y-5">
                  <img src="" alt="" className="bg-white w-full h-[180px]" />
                  <h5 className="text-lg font-medium text-white">제목</h5>
                </a>
              </li>

              <li>
                <a href="#" className="flex flex-col gap-y-5">
                  <img src="" alt="" className="bg-white w-full h-[180px]" />
                  <h5 className="text-lg font-medium text-white">제목</h5>
                </a>
              </li>

              <li>
                <a href="#" className="flex flex-col gap-y-5">
                  <img src="" alt="" className="bg-white w-full h-[180px]" />
                  <h5 className="text-lg font-medium text-white">제목</h5>
                </a>
              </li>

              <li>
                <a href="#" className="flex flex-col gap-y-5">
                  <img src="" alt="" className="bg-white w-full h-[180px]" />
                  <h5 className="text-lg font-medium text-white">제목</h5>
                </a>
              </li>

              

              
            </ul>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
