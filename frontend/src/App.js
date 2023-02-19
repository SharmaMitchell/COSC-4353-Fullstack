import React from 'react';
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



function App() {

  const [loginState, setLoginState] = useLocalStorage('loginState', false)

  const toggleLogin = () =>{
    loginState ? setLoginState(false) : setLoginState(true)
  }

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
        <Navbar login={loginState} toggle={toggleLogin}/>
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
      </ThemeProvider>
    </div>
  );
}

export default App