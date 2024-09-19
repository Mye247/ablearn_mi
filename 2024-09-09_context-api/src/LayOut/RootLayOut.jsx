/* eslint-disable no-unused-vars */
import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

function RootLayOut() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default RootLayOut;
