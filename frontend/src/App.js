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
        <div className="btn">
            Logged in as {currentUser.username}
        </div>
        <div className='btn'>
            <LogoutButton to="/"/>
        </div>
        </>
      ) : (
        <>
        <div className='btn'>
            <RegisterButton to="register"/>
        </div>
        <div className='btn'>
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