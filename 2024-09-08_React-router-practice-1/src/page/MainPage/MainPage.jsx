import React from "react";
import { Outlet } from "react-router-dom";
import PageSetting from "../PageSetting/PageSetting";

function MainPage() {
  return (
    <>
      <header className="bg-black mb-10 p-10">
        <h1 className="text-red-600">머리머리</h1>
      </header>
      <Outlet />
      <footer>Footer</footer>
    </>
  );
}

export default MainPage;
