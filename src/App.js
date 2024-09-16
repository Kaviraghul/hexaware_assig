
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import HomeScreen from './presentation/pages/home/home.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomeScreen />}/>
      </Routes>
  </Router> 
  );
}

export default App;
