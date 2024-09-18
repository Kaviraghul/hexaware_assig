import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import EditEmployee from "./presentation/pages/EditUser/edit_user.js";
import { EmployeeProvider } from "./context_providers/employee_provider.js";
import Login from "./presentation/pages/Authentication/user_login.js";
import HomeScreen from "./presentation/pages/Home/home.js";

function App() {
  return (
    <EmployeeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/editEmployee/:id" element={<EditEmployee />} />
        </Routes>
      </Router>
    </EmployeeProvider>
  );
}

export default App;
