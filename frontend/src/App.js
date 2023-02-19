import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';
import './App.css';
import Estimate from "./pages/estimate.js";
import History from "./pages/history.js";
import Home from "./pages/home.js";
import Login from "./pages/login.js";
import ManageProfile from "./pages/manage-profile.js";
import Navbar from './components/Navbar/Navbar.js'

function App() {

  const [loginState, setLoginState] = useLocalStorage('loginState', false)

  const toggleLogin = () =>{
    loginState ? setLoginState(false) : setLoginState(true)
  }

  return (
    <div className="App">
      <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'></link>
      <Router>
      <Navbar login={loginState} toggle={toggleLogin}/>
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
