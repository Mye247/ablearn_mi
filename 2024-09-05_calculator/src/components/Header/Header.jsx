/* eslint-disable no-unused-vars */
import React from "react";

function Header() {
  return (
    <>
      <header className="w-[460] h-40 bg-gray-700 flex gap-2 relative p-2 rounded-t-2xl">
          <div className="w-5 h-5 bg-red-500 p-3 br rounded-xl mt-1"></div>
          <div className="w-5 h-5 bg-yellow-500 p-3 rounded-xl mt-1"></div>
          <div className="w-5 h-5 bg-green-500 p-3 rounded-xl mt-1"></div>

          <span className="absolute bottom-0 right-0 text-cyan-100 text-7xl p-6">
            0
          </span>
        </header>
    </>
  );
}

export default Header;
