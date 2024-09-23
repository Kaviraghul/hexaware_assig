import { createBrowserRouter } from "react-router-dom";
import {EditEmployeePage,HomePage,PageNotFound,UserLogInPage} from "../presentation/pages/pages";

export const pathName = {
  main: "/",
  home: "/home",
  editEmployee: "/editEmployee/:employeeId",
};

export const router = createBrowserRouter([
  {
    path: pathName.main,
    element: <UserLogInPage />,
    errorElement: <PageNotFound />,
  },
  {
    path: pathName.home,
    element: <HomePage />,
  },
  {
    path: pathName.editEmployee,
    element: <EditEmployeePage />,
  },
]);
