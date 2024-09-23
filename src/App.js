import "./App.css";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import { EmployeeProvider } from "./context_providers/employee_provider.js";
import { EditEmployee, HomeScreen, Login, PageNotFound } from "./presentation/pages/pages.js";


export const pathName = {
  main: '/',
  home: '/home',
  editEmployee: '/editEmployee/:employeeId',
};

const router = createBrowserRouter([
  {
    path: pathName.main,
    element: <Login />,
    errorElement: <PageNotFound />
  },
  {
    path: pathName.home,
    element: <HomeScreen />
  },
  {
    path: pathName.editEmployee,
    element: <EditEmployee />
  }
]);

function App() {
  return (
   
      <EmployeeProvider>
        <RouterProvider router={router} />
      </EmployeeProvider>
   
  );
}

export default App;

// Future improvements
//
// 1. we can use useReducer instead of useState if the form fields grow
// 2. reuable css bode snippets
// 3. move all the hooks to a new folder called hooks for fetching the employee details in employee details screen,
//    and remove EmployeeProvider as it makes no sence for having the provider for entire app.
// 4. lazy loading can be implemented for fetching different sections on the screen
// 5. media query can be used to make the website responsive
