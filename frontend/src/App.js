import './App.css';
import { BrowserRouter as Router, Routes, 
  Route } from "react-router-dom";
import React from 'react';

import RegisterButton from './pages/registerButton';
import LoginButton from './pages/loginButton';
import LogoutButton from './pages/logoutButton'
import Register from './pages/Register';
import Login from './pages/Login';


const App = () => {
  const [userValue, setuserValue] = React.useState(null);
  return (
    <Router>
      {userValue ? (
        <>
        <div className="btn">
            Logged in as {userValue.username}
        </div>
        <div className='btn'>
            <LogoutButton to="/" userValue={userValue} setuserValue={setuserValue}/>
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
        <Route path="/" />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login userValue={userValue} setuserValue={setuserValue} />} />
      </Routes>
    </Router>
  );
}
export default App;