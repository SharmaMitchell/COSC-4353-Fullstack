import React from "react";
import  SectionTitle from '../components/SectionTitle/SectionTitle'

// TODO: take in props to determine whether user is logging in or registering
// e.g. if props.login === true, then display "login" button, else display "register" button
const Login = props => {
    return(
        <div>
            <SectionTitle text="Login" />
            
            <div className="row pb-1">
                {/* TODO: change username input box to MaterialUI component */}
                <div className="input-group col-lg-4">
                    <label for="date_time">Username:</label>
                    <input type="text" placeholder="Username, ex: ProGamer123"/>
                </div>

                {/* TODO: change password input box to MaterialUI component */}
                <div className="input-group col-lg-4">
                    <label for="date_time">Password:</label>
                    <input type="text" placeholder="*******"/>
                </div>

                {/* TODO: change login to MaterialUI component */}
                {/* TODO: change button label based on props.login */}
                <div className="input-group-append">
                    <button type="button"> LOG IN </button>
                </div>
            </div>
        </div>
    )
};

export default Login;