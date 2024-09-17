
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import HomeScreen from './presentation/pages/home/home.js';
import LoginPage from './presentation/pages/authentication/login.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />}/>
        <Route exact path="/home" element={<HomeScreen />}/>
      </Routes>
  </Router> 
  );
}

export default App;
