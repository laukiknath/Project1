import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, BrowserRouter } from 'react-router-dom';
import './App.css';
import Signup from './Component/Signup';
import Home from './Component/Home';
import Login from './Component/Login';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
