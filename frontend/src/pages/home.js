import React from "react";
import CityImage from "../assets/Houston-skyline.jpg"
import  SectionTitle from '../components/SectionTitle/SectionTitle'
import Button from '@mui/material/Button';
import Banner from "../assets/logo-no-background.png";



const Home = props => {
    return(
        <div>
            <div style={{backgroundImage: `url(${CityImage})`, boxShadow: 'inset 0 0 0 1000px rgba(0,0,0,.2)', position: "relative", backgroundRepeat:"no-repeat", backgroundSize:"cover", width:"100%", height:"700px",bottom:"50px"}}>
                {/* TODO: add text/banner to image (see design, room for improvement if you have ideas) */}
                <div style={{backgroundImage: `url(${Banner})`, position: "absolute", backgroundRepeat:"no-repeat", left:"12.5%", width:"75%", height:"50%"}}></div>
                <Button variant="contained" type="button" size="large" style={{position:"fixed", top:"600px",left: "50%",transform: "translate(-50%, -50%)",backgroundColor:"#fd6600"}}> <a href="/estimate" style={{color:'white'}}>GET STARTED </a></Button>
                <a href="#overview" style={{textDecoration:"underline", position:"fixed", top:"635px",left: "50%",transform: "translate(-50%, -50%)", color:"white"}}>Learn More</a>
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