import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useLocalStorage from "use-local-storage";
import "./App.css";
import Estimate from "./pages/estimate.js";
import History from "./pages/history.js";
import Home from "./pages/home.js";
import Login from "./pages/login.js";
import ManageProfile from "./pages/manage-profile.js";
import Navbar from "./components/Navbar/Navbar.js";
import PageContainer from "./components/PageContainer/PageContainer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { UserAlert } from "./components/UserAlert/UserAlert";

function App() {
  // Login state
  const [loginState, setLoginState] = useLocalStorage("loginState", null);
  const [isLoggedIn, setIsLoggedIn] = useState(loginState != null);
  const [loginID, setLoginID] = useLocalStorage("", null);
  const [isFirstLogin, setIsFirstLogin] = useLocalStorage(
    "firstLogin",
    loginState == null
  );

  // Alert state (for login/signup)
  const [openAlert, setOpenAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  // Login state setter
  const setLogin = (username, userID) => {
    setLoginState(username);
    setLoginID(userID);
    setIsLoggedIn(true);
  };

  // Logout setter
  const handleLogOut = () => {
    if (isLoggedIn && !isFirstLogin) {
      setAlertMessage(`Successfully logged out.`);
      setOpenAlert(true);
      setIsFirstLogin(false);
    }
    setLoginID(null);
    setLoginState(null);
    setIsLoggedIn(false);
    setIsFirstLogin(true);
  };

  // Login state change handler, for login alert
  useEffect(() => {
    console.log("loginState updated:", loginState);
    console.log("loginID updated:", loginID);
    if (isLoggedIn && isFirstLogin) {
      setAlertMessage(`Successfully logged in: Welcome, ${loginState}!`);
      setOpenAlert(true);
      setIsFirstLogin(false);
    }
  }, [loginState]);

  // MUI theme
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FD5E00",
      },
      secondary: {
        main: "#2B3A55",
      },
      white: {
        main: "#FFFFFF",
      },
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <link
          href="https://fonts.googleapis.com/css?family=Inter"
          rel="stylesheet"
        ></link>
        <Router>
          <ScrollToTop />
          <Navbar login={loginState} toggle={handleLogOut} />
          <PageContainer>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/history" element={<History />} />
              <Route
                path="/login"
                element={
                  <Login login={true} state={isLoggedIn} setter={setLogin} />
                }
              />
              <Route
                path="/signup"
                element={
                  <Login login={false} state={isLoggedIn} setter={setLogin} />
                }
              />
              <Route path="/estimate" element={<Estimate userID={loginID} />} />
              <Route
                path="/manage-profile"
                element={<ManageProfile state={isLoggedIn} logID={loginID} />}
              />
            </Routes>
          </PageContainer>
          <UserAlert
            open={openAlert}
            setOpen={setOpenAlert}
            message={alertMessage}
            severity="success"
          />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
