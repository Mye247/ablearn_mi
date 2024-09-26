import Link from "next/link";
import React from "react";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen grid place-items-center">
      <div className="bg-white max-w-sm w-full aspect-[9/16]">
        <header className="border-b h-16 flex items-center justify-center">
          <Link href={"/"} className="text-2xl font-bold">
            투두222
          </Link>
        </header>
        {children}
      </div>
    </div>
  );
}

export default RootLayout;
