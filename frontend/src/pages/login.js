import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ProfileDataService from "../services/profile";

// TODO: take in props to determine whether user is logging in or registering
// e.g. if props.login === true, then display "login" button, else display "register" button
const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userID, setUserID] = useState("");

  const navigate = useNavigate();

  const register = (data) => {
    ProfileDataService.createProfile(data)
      .then((response) => {
        console.log(response.data);
        // setUserID(response.data.user_id);
        props.setter(username, response.data.user_id); //TODO: Set all profile info to use in profile management page
      })
      .catch((e) => {
        console.log(e);
        window.alert(e.response.data.error);
      });
    navigate("/manage-profile");
  };

  const logUser = (data) => {
    ProfileDataService.loginProfile(data)
      .then((response) => {
        console.log(response.data);
        props.setter(username, response.data.user_id); //TODO: Set all profile info to use in profile management page
      })
      .catch((e) => {
        console.log(e);
      });
    navigate("/estimate");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      username: username,
      password: password,
    };
    props.login ? logUser(data) : register(data);
  };

  return (
    <Box sx={{ mt: 4 }}>
      <SectionTitle text={props.login ? "Log In" : "Sign Up"} />
      <form onSubmit={handleSubmit}>
        <Box sx={{ mt: 2 }}>
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            placeholder="coolgamer123"
            inputProps={{ minLength: 4, maxLength: 20 }}
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            placeholder="*********"
            inputProps={{ minLength: 8, maxLength: 30 }}
            required
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Box>
        <Box sx={{ "& > :not(style)": { m: 2, width: "25ch" } }}>
          {props.state ? (
            <Button disabled variant="contained">
              {props.login ? "Log In" : "Sign Up"}
            </Button>
          ) : (
            <Button type="submit" variant="contained" color="primary">
              {props.login ? "Log In" : "Sign Up"}
            </Button>
          )}
        </Box>
      </form>
    </Box>
  );
};

export default Login;
