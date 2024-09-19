import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RootLayOut from "./LayOut/RootLayOut";

const routes = [
  {
    path: "/",
    element: <RootLayOut />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },

      {
        path: "/sign-up",
        element: <SignUpPage />,
      },

      {
        path: "/log-in",
        element: <LoginPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
