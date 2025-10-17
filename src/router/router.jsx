import { createBrowserRouter } from "react-router-dom";
import RootLayouts from "../Layouts/RootLayouts/RootLayouts";
import Home from "../Pages/Home/Home";
import ProjectDetails from './../Pages/Home/ProjectDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts />,
    children: [
      { index: true, element: <Home /> },
      { path: "projects/:id", element: <ProjectDetails /> },
    ],
  },
]);
