import "./App.css";
import { RouterProvider } from "react-router-dom";
import { EmployeeProvider } from "./context_providers/employee_provider.js";
import { router } from "./utils/app_routes.js";


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
// 1. We can use useReducer instead of useState if the form fields grow
// 2. Reuable css code snippets like tailwind
// 3. Move all the hooks to a new folder called hooks for fetching the employee details in employee details screen,
//    and remove EmployeeProvider as it makes no sence for having the provider for entire app.
// 4. Lazy loading can be implemented for fetching different sections on the screen
// 5. Media query can be used to make the website responsive
// 6. Instead of switch case we can use navlink and outlet from the the react-routing-dom
// 7. Redux state management can be adopted if the app grows larger in future
