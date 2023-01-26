import './App.css';
import { BrowserRouter as Router, Routes, 
  Route } from "react-router-dom";

import RegisterButton from './pages/registerButton';
import LoginButton from './pages/loginButton';
import Register from './pages/Register';
import Login from './pages/Login';


const App = () => {
  return (
    <Router>
        <RegisterButton to="register"/>
        <LoginButton to="login"/>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </Router>
  );
}
export default App;