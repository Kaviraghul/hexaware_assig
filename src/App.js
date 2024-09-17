import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./presentation/pages/home/home.js";
import EditEmployee from "./presentation/pages/EditUser/edit_user.js";
import { EmployeeProvider } from "./context_providers/employee_provider.js";
import Login from "./presentation/pages/authentication/user_login.js";

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
