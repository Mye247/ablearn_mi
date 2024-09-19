/* eslint-disable no-unused-vars */
import React from "react";
import { Link, Outlet } from "react-router-dom";

function RootLayOut() {
  return (
    <>
      <header className="text-center py-3 bg-amber-100">
        <h1 className="pt-4 font-semibold text-xl">Posts</h1>

        <nav className="flex gap-4 justify-end mr-10">
          <Link
            to="/"
            className="hover:bg-gray-100 hover:p-2 transition-all rounded-xl"
          >
            홈으로
          </Link>
          <Link
            to="/posts/:postId"
            className="hover:bg-gray-100 hover:p-2 transition-all rounded-xl"
          >
            상세 페이지{" "}
          </Link>
          <Link
            to="/create"
            className="hover:bg-gray-100 hover:p-2 transition-all rounded-xl"
          >
            새 글 작성하기{" "}
          </Link>

          <Link
            to="/log-in"
            className="hover:bg-gray-100 hover:p-2 transition-all rounded-xl"
          >
            로그인{" "}
          </Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default RootLayOut;
