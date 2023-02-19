import React from "react";
import  SectionTitle from '../components/SectionTitle/SectionTitle'
import Button from '@mui/material/Button';
import Banner from "../assets/logo-no-background.png";
import styles from './home.module.css'
import { useNavigate } from "react-router-dom";

const Home = props => {
    let navigate = useNavigate();
    const handleGetStarted = () => {
        navigate('/estimate');
    }
    return (
      <div>
        <div className={styles.landingArea}>
          <img src={Banner} className={styles.bannerImg} />
          <div className={styles.landingButtons}>
            <Button
              variant="contained"
              type="button"
              size="large"
              onClick={handleGetStarted}
            >
              GET STARTED
            </Button>
            <a href="#overview" className={styles.learnMore}>
              Learn More
            </a>
          </div>
        </div>
        <div id="overview">
          <SectionTitle text="Overview" />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 20px",
            }}
          >
            <p style={{ maxWidth: 900 + "px", marginTop: 0 }}>
              With this application, users can easily sign up for free, enter
              their relevant information into an estimate form, and get an
              esitmate within minutes. The backend of the application, powered
              by Node and Express, can then use this data to make predictions
              based on various input factors and industry standards. The
              estimated production data can be returned to the user in just
              seconds, allowing for quick and efficient decision-making.
              Additionally, the application can store past estimates, which
              enables users to review and compare their estimated production
              data over time.
            </p>
          </div>
        </div>
        <div
          id="features"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <SectionTitle text="Features" />
          <div className={styles.featuresContainer}>
            <h2 className={styles.featuresHeading}>
              Accurate Fuel Cost Calculation
            </h2>
            <p>
              Our app uses industry-standard factors to estimate fuel costs,
              including:
              <ul
                style={{
                  textAlign: "left",
                  maxWidth: 600 + "px",
                  paddingLeft: "1.6em",
                }}
              >
                <li>
                  <b>Location Factor</b> - 2% for Texas, 4% for out of state
                </li>
                <li>
                  <b>Rate History Factor</b> - 0% for first purchase, 1% for
                  returning customers
                </li>
                <li>
                  <b>Gallons Requested Factor</b> - 2% if more than 1000
                  gallons, 3% if less
                </li>
                <li>
                  <b>Company Profit Factor</b> - 10%
                </li>
              </ul>
            </p>
          </div>
          <div className={styles.featuresContainer}>
            <h2 className={styles.featuresHeading}>Secure Login</h2>
            <p>
              Your security is our top priority. Our app provides a secure login
              with password encryption to protect your account.
            </p>
          </div>
          <div className={styles.featuresContainer}>
            <h2 className={styles.featuresHeading}>Estimate History</h2>
            <p>
              Our app conveniently stores your estimate history for easy
              reference at any time.
            </p>
          </div>
        </div>
        <div>
          <SectionTitle text="About" />
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div className={styles.featuresContainer}>
                <p style={{marginTop: 0}}>
                We are a group of Computer Science students at the University of
                Houston, and this website is our project for COSC 4353 - Software
                Design. Throughout the semester, we have been working hard to
                create a proof of concept web application to demonstrate our
                understanding of software design principles and best practices.
                </p>
                <p>
                Our team consists of Mitchell Sharma (
                <a href="https://github.com/SharmaMitchell">@SharmaMitchell</a>),
                Clara Martin (
                <a href="https://github.com/Clara-Martin">@Clara-Martin</a>),
                Kevin Nguyen (
                <a href="https://github.com/KevinChauNguyen">@KevinChauNguyen</a>
                ), and Devon Chao (
                <a href="https://github.com/DevonChao">@DevonChao</a>).
                </p>
            </div>
            <div className={styles.featuresContainer}>
                <p>
                Thank you for visiting our site, and please feel free to check out
                our individual GitHub profiles to see more of our work!
                </p>
                <p>
                If you'd like to explore the code for this project, you can find
                it <a href="https://github.com/SharmaMitchell/COSC-4353-Fullstack">
                    here, on GitHub.
                </a>
                </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Home;