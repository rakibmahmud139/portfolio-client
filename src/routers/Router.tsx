import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProjectDetails from "../pages/ProjectDetails";
import BlogDetails from "../pages/BlogDetails";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "project/:id",
        element: <ProjectDetails />,
      },
      {
        path: "blog/:id",
        element: <BlogDetails />,
      },
    ],
  },
]);
