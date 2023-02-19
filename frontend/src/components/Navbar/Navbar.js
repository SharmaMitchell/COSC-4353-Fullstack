import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css"; // Style sheet
import navBarImg from "../../assets/fa_bars.png";
import oilIcon from "../../assets/oil_icon.png";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

function Navbar(props) {
  const location = useLocation().pathname; /* page location, for underline on current page */

  const [dropdown, setdropdown] = useState(false); /* dropdown show/hide (for mobile) */

  const showdropdown = () => setdropdown(!dropdown); /* dropdown toggle function */

  const theme = useTheme();

  let loginState = props.login /* get and store login state */
  let loginToggle = props.toggle /* get and store login toggle function */
  
  let navigate = useNavigate(); /* navigate to different pages */

  const Login = () => {
    navigate("/login");
  };

  const Signup = () => {
    navigate("/signup");
  };

  return (
    <>
      <nav id={styles.navbar}>
        <div className={styles.navbarContainer}>
          <div className={styles.navBar}>
            <div className={styles.brand}>
              <Link to="/">
                <img src={oilIcon} />
              </Link>
              <Link to="/">
                <h1>My Oil Estimate</h1>
              </Link>
            </div>
            <div className={styles.navList}>
              <ul>
                <li>
                  <a className={location === "/" ? styles.cuPage : ""}>
                    <Link to="/">Home</Link>
                  </a>
                </li>
                <li>
                  <a className={location === "/estimate" ? styles.cuPage : ""}>
                    <Link to="/estimate">Estimate</Link>
                  </a>
                </li>
                <li>
                  <a className={location === "/history" ? styles.cuPage : ""}>
                    <Link to="/history">History</Link>
                  </a>
                </li>
                <li className={styles.loginList}>
                  {loginState ? (
                    <Button variant="outlined" onClick={loginToggle} color="white">Log Out</Button>
                  ) : (
                    <Stack direction="row" spacing={2}>
                      <Button variant="contained" onClick={Login} color="primary">Log In</Button>
                      <Button variant="outlined" onClick={Signup} color="white">Sign Up</Button>
                    </Stack>
                  )}
                </li>
              </ul>
              
            </div>
            <Link to="#" className={styles.menuBars}>
              <img src={navBarImg} onClick={showdropdown} />
            </Link>
          </div>
        </div>
      </nav>
      <nav
        className={
          dropdown ? `${styles.dropdown} ${styles.active}` : styles.dropdown
        }
      >
        <div className={styles.navList}>
          <ul className={styles.navItems} onClick={showdropdown}>
            <li>
              <a className={location === "/" ? styles.cuPage : ""}>
                <Link to="/">Home</Link>
              </a>
            </li>
            <li>
              <a className={location === "/estimate" ? styles.cuPage : ""}>
                <Link to="/estimate">Estimate</Link>
              </a>
            </li>
            <li>
              <a className={location === "/history" ? styles.cuPage : ""}>
                <Link to="/history">History</Link>
              </a>
            </li>
            <li className={styles.loginList}>
              {loginState ? (
                <Button variant="contained" onClick={props.setLoginState}>Log Out</Button>
              ) : (
                <Stack direction="row" spacing={2}>
                  <Button variant="contained" onClick={Login} color="primary">Log In</Button>
                  <Button variant="outlined" onClick={Signup} color="white">Sign Up</Button>
                </Stack>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;