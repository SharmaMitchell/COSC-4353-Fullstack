import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useLocalStorage from 'use-local-storage';
import './App.css';
import Estimate from "./pages/estimate.js";
import History from "./pages/history.js";
import Home from "./pages/home.js";
import Login from "./pages/login.js";
import ManageProfile from "./pages/manage-profile.js";
import Navbar from './components/Navbar/Navbar.js'
import PageContainer from './components/PageContainer/PageContainer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';


function App() {
  const [loginState, setLoginState] = useLocalStorage('loginState', null)
  const [isLoggedIn, setIsLoggedIn] = useState(loginState != null ? true : false)

  const setLogin = (uid) =>{
    setLoginState(uid)
    setIsLoggedIn(true)
  }

  const handleLogOut = () => {
    setLoginState(null)
    setIsLoggedIn(false)
  }

  useEffect(() => {
    console.log("loginState updated:", loginState);
  }, [loginState]);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#FD5E00",
      },
      secondary:{
        main: "#2B3A55"
      },
      white:{
        main: "#FFFFFF"
      }
    }
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'></link>
        <Router>
        <ScrollToTop />
        <Navbar login={loginState} toggle={handleLogOut}/>
          <PageContainer>
            <Routes> 
              <Route path='/' element={<Home/>} />
              <Route path='/history' element={<History/>} />
              <Route path='/login' element={<Login login = {true} state={isLoggedIn} setter={setLogin}/>}/>
              <Route path='/signup' element={<Login login = {false} state={isLoggedIn} setter={setLogin}/>}/>
              <Route path='/estimate' element={<Estimate/>} />
              <Route path='/manage-profile' element={<ManageProfile/>} />
            </Routes>
          </PageContainer>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App