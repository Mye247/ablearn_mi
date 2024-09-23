import React from "react";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="bg-white text-black p-3 border-black text-center">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default RootLayout;
