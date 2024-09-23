import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="border-b border-black">
      <div className=" container max-w-screen flex items-center justify-between">
        <Link href={"/"} className="p-5 font-bold text-cyan-300 text-3xl">CAT</Link>

        <nav className="ml-20">
          <ul>
            <li>
              <Link href={"/cats"} className="mr-5">고양이 목록</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
