import './App.css';
import { BrowserRouter as Router, Routes, 
  Route } from "react-router-dom";
import React from 'react';

import RegisterButton from './pages/registerButton';
import LoginButton from './pages/loginButton';
import LogoutButton from './pages/logoutButton'
import ProfileButton from './pages/profileButton';
import OrdersButton from './pages/ordersButton';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Orders from './pages/Orders';
import Home from './pages/Home';

const App = () => {
  const [userValue, setuserValue] = React.useState(JSON.parse(localStorage.getItem('user')));
  return (
    <Router>
      {userValue ? (
        <>
        <div className="btn">
            Logged in as {userValue.username}
        </div>
            <LogoutButton to="/" userValue={userValue} setuserValue={setuserValue}/>
            <ProfileButton to="profile" />
            <OrdersButton to="orders" />
        </>
      ) : (
        <>
            <RegisterButton to="register"/>
            <LoginButton to="login"/>
        </>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login userValue={userValue} setuserValue={setuserValue} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </Router>
  );
}
export default App;