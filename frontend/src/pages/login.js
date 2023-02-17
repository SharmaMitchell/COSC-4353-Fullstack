import React from "react";
import SectionTitle from '../components/SectionTitle/SectionTitle'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// TODO: take in props to determine whether user is logging in or registering
// e.g. if props.login === true, then display "login" button, else display "register" button
const Login = props => {
    
    return(
        <div>
            <SectionTitle text="Login" />
            
            <div className="row pb-1">
                {/* TODO: change username input box to MaterialUI component DONE */}
                <div className="input-group col-lg-4">
                    <Box
                        component = "form"
                        sx = {{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete = "on"
                    >
                        <TextField id="outlined-basic" label="Username" variant="outlined" placeholder = "ex: gamer123" />
                    </Box>
                    
                </div>

                {/* TODO: change password input box to MaterialUI component DONE*/}
                <div className="input-group col-lg-4">
                <Box
                        component = "form"
                        sx = {{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete = "on"
                    >
                        <TextField id="outlined-basic" label="Password" variant="outlined" placeholder = "****** "/>
                    </Box>
                </div>

                {/* TODO: change login to MaterialUI component DONE*/}
                {/* TODO: change button label based on props.login */}
                <div className="input-group-append">
                    <Button  variant = "outlined" color = "primary"  type="submit"> Login </Button>
                </div>
            </div>
        </div>
    )
};

export default Login;