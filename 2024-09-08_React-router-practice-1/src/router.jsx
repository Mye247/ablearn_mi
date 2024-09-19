import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "./page/HomePage/HomePage";
import MainPage from "./page/MainPage/MainPage";

const routes = [
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
