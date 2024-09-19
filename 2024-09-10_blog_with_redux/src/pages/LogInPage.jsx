/* eslint-disable no-unused-vars */
import React, { useId } from "react";

function LogInPage() {
  return (
    <>
      <form
        action=""
        className="border border-black w-[450px] mx-auto my-28 text-center bg-lime-100 rounded-xl"
      >
        <section className="">
          <h2 className="pt-5 font-bold text-xl">로그인</h2>
          <ul>
            <li>
              <label htmlFor="id" className="">
                아이디
              </label>
              <input
                type="text"
                id="id"
                className="border border-black mb-2 mt-5 ml-4 rounded-lg p-3 "
              />
            </li>

            <li>
              <label htmlFor="password" className="">
                비밀번호
              </label>
              <input
                type="password"
                id="password"
                className="border border-black mt-2 mb-10 ml-1 rounded-lg p-3  "
              />
            </li>
          </ul>

          <button
            className="border border-black p-3 mb-10 rounded-md active:bg-black/50"
            type="submit"
          >
            로그인
          </button>
        </section>
      </form>
    </>
  );
}

export default LogInPage;
