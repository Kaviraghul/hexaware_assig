
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import HomeScreen from './presentation/pages/home/home.js';
import LoginPage from './presentation/pages/authentication/login.js';
import EditUserScreen from './presentation/pages/EditUser/edit_user.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />}/>
        <Route exact path="/home" element={<HomeScreen />}/>
        <Route exact path="/editUser" element={<EditUserScreen />}></Route>
      </Routes>
  </Router> 
  );
}

export default App;
