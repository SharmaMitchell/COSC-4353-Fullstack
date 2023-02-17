import React from "react";
import CityImage from "../images/city-skyline.jpg"
import  SectionTitle from '../components/SectionTitle/SectionTitle'



const Home = props => {
    return(
        <div>
            <div style={{backgroundImage: `url(${CityImage})`,position: "relative", backgroundRepeat:"no-repeat", backgroundSize:"cover", width:"100%", height:"700px"}}>
            <button type="button" style={{position:"fixed", top:"600px",left: "50%",transform: "translate(-50%, -50%)",backgroundColor:"#fd6600"}}> <a href="/estimate">GET STARTED </a></button>
            <a href="#overview" style={{position:"fixed", top:"625px",left: "50%",transform: "translate(-50%, -50%)", color:"white"}}>Learn More</a>
            </div>
            <div id="overview">
                <SectionTitle text="Overview" />
            </div>
            <div id="features">
                <SectionTitle text="Features" />
            </div>
        </div>
    )
};

export default Home;