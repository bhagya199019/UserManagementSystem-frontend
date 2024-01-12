import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Register from './components/Register';
import Home from './components/Home';
import Login from './components/Login';
import UserHome from './components/UserHome';
import UpdateUser from './components/UpdateUser';
import DeleteUser from './components/DeleteUser';
import GetAllUsers from './components/GetAllUsers';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  const handleLogin = () => {
    // Implement your login logic here
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    localStorage.removeItem('jwtToken');
    
    setIsLoggedIn(false);
    window.location.href = '/';
  };

  return (
    <Router>
      <div className="App">
        <NavBar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/userhome" element={<UserHome />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/updateUser" element={<UpdateUser />} />
          <Route path="/deleteUser" element={<DeleteUser />} />
          <Route path="/getUsers" element={<GetAllUsers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
