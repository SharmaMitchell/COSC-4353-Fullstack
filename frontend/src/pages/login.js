import React from "react";


const Login = props => {
    return(
        <div>
            <h1>LOG IN</h1>
            
            <div className="row pb-1">
                {/*username input box*/}
                <div className="input-group col-lg-4">
                    <label for="date_time">Username:</label>
                    <input type="text" placeholder="Username, ex: ProGamer123"/>
                </div>

                {/*password input box*/}
                <div className="input-group col-lg-4">
                    <label for="date_time">Password:</label>
                    <input type="text" placeholder="*******"/>
                </div>

                <div className="input-group-append">
                    <button type="button"> LOG IN </button>
                </div>
            </div>
        </div>
    )
};

export default Login;