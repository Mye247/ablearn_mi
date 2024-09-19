/* eslint-disable no-unused-vars */
import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

const routes = [
    {
        path: "/",
        element: <App />
    }
]

const router = createBrowserRouter(routes);

function Router() {
  return (
    <RouterProvider router={router} />
  )
}

export default Router;