import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css"; // Style sheet
import navBarImg from "../../assets/fa_bars.png";
import oilIcon from "../../assets/oil_icon.png";

function Navbar(props) {
  const location = useLocation().pathname; /* page location, for underline on current page */

  const [dropdown, setdropdown] = useState(false); /* dropdown show/hide (for mobile) */

  const showdropdown = () => setdropdown(!dropdown); /* dropdown toggle function */

  let loginState = props.loginState /* get and store login state */


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
                { loginState ? (<li><a onClick={props.toggle}>Logout</a></li>):(<ul><li><Link to={"/login"} className="nav-link">Login</Link></li><li><Link to={"/login"} className="nav-link">Sign Up</Link></li></ul>) }
              </ul>
              <div>
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