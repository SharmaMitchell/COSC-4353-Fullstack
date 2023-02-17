import React from "react";
import CityImage from "../assets/Houston-skyline.jpg"
import  SectionTitle from '../components/SectionTitle/SectionTitle'



const Home = props => {
    return(
        <div>
            <div style={{backgroundImage: `url(${CityImage})`,position: "relative", backgroundRepeat:"no-repeat", backgroundSize:"cover", width:"100%", height:"700px"}}>

                {/* TODO: add black layer with opacity 0.3 to image */}

                {/* TODO: add text/banner to image (see design, room for improvement if you have ideas) */}

                {/* TODO: swap button with MaterialUI button component, add link to estimate page */}
                <button type="button" style={{position:"fixed", top:"600px",left: "50%",transform: "translate(-50%, -50%)",backgroundColor:"#fd6600"}}> <a href="/estimate">GET STARTED </a></button>
                
                {/* TODO: style text as per design (underline, font size) */}
                <a href="#overview" style={{position:"fixed", top:"625px",left: "50%",transform: "translate(-50%, -50%)", color:"white"}}>Learn More</a>
            </div>
            <div id="overview">
                <SectionTitle text="Overview" />

                {/* TODO: add overview text, briefly describing the site */}

            </div>
            <div id="features">
                <SectionTitle text="Features" />

                {/* TODO: add features text, describing the features in more detail, maybe with instructions. Have chatGPT write something? */}

            </div>
        </div>
    )
};

export default Home;