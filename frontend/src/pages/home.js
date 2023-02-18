import React from "react";
import CityImage from "../assets/Houston-skyline.jpg"
import  SectionTitle from '../components/SectionTitle/SectionTitle'
import Button from '@mui/material/Button';
import Banner from "../assets/logo-no-background.png";



const Home = props => {
    return(
        <div>
            <div style={{backgroundImage: `url(${CityImage})`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 0 0 1000px rgba(0,0,0,.2)', position: "relative", backgroundRepeat:"no-repeat", backgroundSize:"cover", width:"100%", height:"700px",bottom:"50px"}}>
                {/* TODO: add text/banner to image (see design, room for improvement if you have ideas) */}
                {/* <div style={{backgroundImage: `url(${Banner})`, position: "absolute", backgroundRepeat:"no-repeat", margin:"auto", width:"75%", height:"50%", top:"30%"}}></div> */}
                <img src={Banner} style={{position:"fixed", maxWidth: "90vw"}}/>
                <Button variant="contained" type="button" size="large" style={{position:"fixed", top:"600px",left: "50%",transform: "translate(-50%, -50%)",backgroundColor:"#fd6600"}}> <a href="/estimate" style={{color:'white'}}>GET STARTED </a></Button>
                <a href="#overview" style={{textDecoration:"underline", position:"fixed", top:"635px",left: "50%",transform: "translate(-50%, -50%)", color:"white"}}>Learn More</a>
            </div>
            <div id="overview">
                <SectionTitle text="Overview" />
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <p style={{width:'75%'}}>With this application, users can easily sign up for free, enter their relevant information into an estimate form, and get an esitmate within minutes. 
                        The backend of the application, powered by Node and Express, can then use this data to make predictions based on various factors such as oil 
                        reserves and production rates. The estimated production data can be returned to the user in just seconds, allowing for quick and efficient decision-making. 
                        Additionally, the application can store past estimates, which enables users to review and compare their estimated production data over time.
                    </p>
                </div>

            </div>
            <div id="features">
                <SectionTitle text="Features" />

                {/* TODO: add features text, describing the features in more detail, maybe with instructions. Have chatGPT write something? */}

            </div>
        </div>
    )
};

export default Home;