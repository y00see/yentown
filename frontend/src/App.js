import './App.css';
import { BrowserRouter as Router, Routes, 
  Route } from "react-router-dom";

import RegisterButton from './pages/registerButton';
import LoginButton from './pages/loginButton';
import LogoutButton from './pages/logoutButton'
import Register from './pages/Register';
import Login from './pages/Login';


const App = () => {
  const currentUser = JSON.parse(localStorage.getItem('user'));
  return (
    <Router>
      {currentUser ? (
        <>
        <div className="Status">
            Logged in as {currentUser.username}
        </div>
        <div className='Logoutbutton'>
            <LogoutButton to="/"/>
        </div>
        </>
      ) : (
        <>
        <div className='Registerbutton'>
            <RegisterButton to="register"/>
        </div>
        <div className='Loginbutton'>
            <LoginButton to="login"/>
        </div>
        </>
      )}
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
export default App;