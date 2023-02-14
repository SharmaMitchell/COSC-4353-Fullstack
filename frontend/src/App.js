import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Estimate from "./pages/estimate.js";
import History from "./pages/history.js";
import Home from "./pages/home.js";
import Login from "./pages/login.js";
import ManageProfile from "./pages/manage-profile.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes> 
          <Route path='/' element={<Home/>} />
          <Route path='/history' element={<History/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/estimate' element={<Estimate/>} />
          <Route path='/manage-profile' element={<ManageProfile/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
