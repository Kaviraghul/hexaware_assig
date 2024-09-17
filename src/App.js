import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./presentation/pages/home/home.js";
import EditUserScreen from "./presentation/pages/EditUser/edit_user.js";
import { EmployeeProvider } from "./context_providers/employee_provider.js";
import LoginPage from "./presentation/pages/authentication/user_login.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage/>} />
        <Route
          exact
          path="/home"
          element={
            <EmployeeProvider>
              <HomeScreen />
            </EmployeeProvider>
          }
        />
        <Route exact path="/editUser" element={<EditUserScreen />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
