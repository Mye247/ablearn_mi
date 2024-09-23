import React, { PropsWithChildren } from "react";
import Header from "./_components/Header";


function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <div id="root-layout">{children}</div>
      
    </>
  );
}

export default RootLayout;
