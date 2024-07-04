import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProjectDetails from "../pages/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "project/:id",
    element: <ProjectDetails />,
  },
]);
