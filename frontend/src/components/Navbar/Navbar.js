import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css"; // Style sheet
import navBarImg from "../../assets/fa_bars.png";
import oilIcon from "../../assets/oil_icon.png";

function Navbar({user, setUser}) {
  const location = useLocation().pathname; /* page location, for underline on current page */

  const [dropdown, setdropdown] = useState(false); /* dropdown show/hide (for mobile) */

  const showdropdown = () => setdropdown(!dropdown); /* dropdown toggle function */
  async function logout() {
    setUser(null)
  }

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
                <li>
                  {/* if user exists, run logout fxn onClick, if user does not exist, go to /login page when link clicked */}
                  { user ? (<a onClick={logout}>Logout {user.name}</a>) : (<Link to={"/login"} className="nav-link">Login</Link>) }
                </li>
              </ul>
              <div>
                {/* 3rd link - one link that looks different based on a variable */}
          <li className="nav-item">
            { user ? (<a></a>)
               : (<Link to={"/register"} className="nav-link">Register</Link>) }
          </li>
                {/* Login goes here */}
              </div>
            </div>
            <Link to="#" className={styles.menuBars}>
              <img src={navBarImg} onClick={showdropdown} />
            </Link>
          </div>
        </div>
      </nav>
      <nav className={dropdown ? `${styles.dropdown} ${styles.active}` : styles.dropdown}>
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
          </ul>
          <div >
            {/* Login goes here */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;