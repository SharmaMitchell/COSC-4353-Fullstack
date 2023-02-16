import React from "react";
import CityImage from "../images/city-skyline.jpg"



const Home = props => {
    return(
        <div>
            <div style={{backgroundImage: `url(${CityImage})`,position: "relative", backgroundRepeat:"no-repeat", backgroundSize:"cover", width:"100%", height:"700px"}}>
            <button type="button" style={{position:"fixed", top:"600px",left: "50%",transform: "translate(-50%, -50%)",backgroundColor:"#fd6600"}}> <a href="/estimate">GET STARTED </a></button>
            <a href="#overview" style={{position:"fixed", top:"625px",left: "50%",transform: "translate(-50%, -50%)", color:"white"}}>Learn More</a>
            </div>
            <div id="overview">
                <h1 style={{color:"#2b3a55"}}>OVERVIEW</h1>
            </div>
            <div id="features">
                <h1 style={{color:"#2b3a55"}}>FEATURES</h1>
            </div>
        </div>
    )
};

export default Home;