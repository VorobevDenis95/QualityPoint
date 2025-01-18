import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const List = lazy(() => import("../components/List/List"));
const Employee = lazy(() => import("../components/Employee/Employee"));

const router = createBrowserRouter([
  {
    path: "/QualityPoint",
    element: <List />,
  },
  {
    path: "/QualityPoint/employee/:id",
    element: <Employee />,
  },
]);

export default router;
