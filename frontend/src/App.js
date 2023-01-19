import './App.css';
import { BrowserRouter as Router, Routes, 
  Route } from "react-router-dom";

import RegisterButton from './registerButton';
import Register from './pages/Register'


const App = () => {
  return (
    <Router>
        <RegisterButton to="register"/>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
export default App;