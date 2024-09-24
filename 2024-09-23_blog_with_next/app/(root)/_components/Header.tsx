import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="flex items-center px-5 py-4 container mx-auto max-w-screen-md border-b">
      <Link href={"/"} className="font-2xl font-bold ">
        My blog
      </Link>

      <nav className="ml-20">
        <ul>
          <li>
            <Link href={"/posts/new"} className="font-2xl font-bold ">
              post 작성하기
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
