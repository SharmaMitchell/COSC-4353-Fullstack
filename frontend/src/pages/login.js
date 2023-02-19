import React, {useState} from "react";
import SectionTitle from '../components/SectionTitle/SectionTitle'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// TODO: take in props to determine whether user is logging in or registering
// e.g. if props.login === true, then display "login" button, else display "register" button
const Login = props => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(username);
    };
    

    return(
        <Box sx={{ mt: 4 }}>
            <SectionTitle text = {props.login ? 'Log In' : 'Sign Up'}/>
            <form onSubmit={handleSubmit}>
                <Box sx={{ mt: 2 }}>
                    <TextField
                        id="username"
                        label="Username"
                        variant="outlined"
                        placeholder = "coolgamer123"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
          />
        </Box>
        <Box sx={{ mt:2 }}>
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            placeholder = "*********"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Box>
        <Box sx={{ '& > :not(style)': { m: 2, width: '25ch' }, }}>
          <Button type="submit" variant="contained" color="primary">
            {props.login ? 'Log In' : 'Sign Up'}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Login;