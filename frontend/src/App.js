import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Estimate from "./pages/estimate.js";
import History from "./pages/history.js";
import Home from "./pages/home.js";
import Login from "./pages/login.js";
import ManageProfile from "./pages/manage-profile.js";
import Navbar from './components/Navbar/Navbar.js'
import PageContainer from './components/PageContainer/PageContainer';



function App() {
  return (
    <div className="App">
      <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'></link>
      <Router>
      <Navbar />
        <PageContainer>
          <Routes> 
            <Route path='/' element={<Home/>} />
            <Route path='/history' element={<History/>} />
            <Route path='/login' element={<Login login = {true}/>}/>
            <Route path='/signup' element={<Login login = {false}/>}/>
            <Route path='/estimate' element={<Estimate/>} />
            <Route path='/manage-profile' element={<ManageProfile/>} />
          </Routes>
        </PageContainer>
      </Router>
    </div>
  );
}

export default App