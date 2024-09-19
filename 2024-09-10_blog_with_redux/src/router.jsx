import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostDetailPage from "./pages/PostDetailPage";
import RootLayOut from "./layouts/RootLayOut";
import PostCreatePage from "./pages/PostCreatePage";
import LogInPage from "./pages/LogInPage";
import PostEditPage from "./pages/PostEditPage";

//홈페이지에서는 posts가 목록으로
//디테일에선 정보가 보이게
//create에선 인풋요소

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
        path: "/posts/:postId",
        element: <PostDetailPage />,
      },

      {
        path:"/posts/:postId/edit",
        element: <PostEditPage />
      },

      {
        path: "/create",
        element: <PostCreatePage />,
      },

      {
        path: "/log-in",
        element: <LogInPage />,
      },

      
    ],
  },
];

const router = createBrowserRouter(routes);

export function Router({ children }) {
  return <RouterProvider router={router}>{children}</RouterProvider>;
}
