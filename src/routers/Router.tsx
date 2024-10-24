import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProjectDetails from "../pages/ProjectDetails";
import BlogDetails from "../pages/BlogDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "project/:id",
    element: <ProjectDetails />,
  },
  {
    path: "blog/:id",
    element: <BlogDetails />,
  },
]);
