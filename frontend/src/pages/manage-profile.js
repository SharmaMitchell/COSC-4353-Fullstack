import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SectionTitle from '../components/SectionTitle/SectionTitle'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import ProfileDataService from "../services/profile";
import styles from './home.module.css'
import Stack from '@mui/material/Stack';


const ManageProfile = (props) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (address == ''){
            getValues(props.logID)
        }
    });

    const getValues = (userID) => {
        const loginData = {
            loginID: userID
        }
<<<<<<< HEAD
        ProfileDataService.getProfileData(loginData)
        .then(response => {
            // console.log(response.data);
=======
        ProfileDataService.getProfileData(userID)
        .then(response => {
            setName(response.data.client_name)
            setAddress(response.data.address_1)
            setAddress2(response.data.address_2)
            setCity(response.data.city)
            setState(response.data.state)
            setZipcode(response.data.zipcode)
            console.log(response.data);
>>>>>>> e292d04 (navbar stuff)
        })
        .catch(e => {
            console.log(e);
        });
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            user_id: props.logID,
            client_name: name,
            address_1: address,
            address_2: address2,
            city: city,
            state: state,
            zipcode: zipcode
        }
        console.log(data)
        ProfileDataService.editProfile(data)
        .then(response => {
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
        navigate("/estimate");
    }

    const Login = () => {
        navigate("/login");
      };
    
    const Signup = () => {
        navigate("/signup");
      };

    return(
        <div>
            <SectionTitle text = "Profile Management"></SectionTitle>
            {props.state ? (
            <div>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing = {2}  >
                        <Grid item xs = {12}>
                            <TextField  
                            label="Full Name" 
                            id = "name"
                            placeholder = "John Doe"
                            inputProps = {{maxLength:50}}
                            required
                            onChange={(event) => setName(event.target.value)}
                            />
                        </Grid>
                        <Grid item xs = {12} direction = {"row"}>
                            <TextField  
                            label="Street Address 1" 
                            id = "address"
                            placeholder = "9813 Nut Street"
                            inputProps = {{maxLength:100}}
                            required
                            onChange={(event) => setAddress(event.target.value)}
                            />
                        </Grid>
                        <Grid item xs = {12} direction = {'row'}>
                            <TextField  
                            label="Street Address 2" 
                            id = "address2"
                            placeholder = "Apt, Suite, etc... "
                            inputProps = {{maxLength:100}}
                            onChange={(event) => setAddress2(event.target.value)}
                            />
                        </Grid>
                        <Grid item xs = {12} direction = {'column'} >
                            <TextField  
                                label="City" 
                                id = "city"
                                placeholder = "Houston"
                                inputProps = {{maxLength:100}}
                                required
                                onChange={(event) => setCity(event.target.value)}
                                />
                        </Grid>
                        <Grid item xs = {12} direction = {'row'} >
                            <FormControl sx = {{width: 225,}} required>
                                <InputLabel id = "demo-simple-select-label">State</InputLabel>
                                <Select
                                    labelId = "demo-simple-select-label"
                                    label = "State"
                                    required
                                    sx={{textAlign: 'left',}}
                                    onChange={(event) => setState(event.target.value)}
                                >   
                                    <MenuItem value={''}>Select a State...</MenuItem>
                                    <MenuItem value={'AL'}>Alabama</MenuItem>
                                    <MenuItem value={'AK'}>Alaska</MenuItem>
                                    <MenuItem value={'AZ'}>Arizona</MenuItem>
                                    <MenuItem value={'AR'}>Arkansas</MenuItem>
                                    <MenuItem value={'CA'}>California</MenuItem>
                                    <MenuItem value={'CO'}>Colorado</MenuItem>
                                    <MenuItem value={'CT'}>Connecticut</MenuItem>
                                    <MenuItem value={'DE'}>Delaware</MenuItem>
                                    <MenuItem value={'DC'}>District Of Columbia</MenuItem>
                                    <MenuItem value={'FL'}>Florida</MenuItem>
                                    <MenuItem value={'GA'}>Georgia</MenuItem>
                                    <MenuItem value={'HI'}>Hawaii</MenuItem>
                                    <MenuItem value={'ID'}>Idaho</MenuItem>
                                    <MenuItem value={'IL'}>Illinois</MenuItem>
                                    <MenuItem value={'IN'}>Indiana</MenuItem>
                                    <MenuItem value={'IA'}>Iowa</MenuItem>
                                    <MenuItem value={'KS'}>Kansas</MenuItem>
                                    <MenuItem value={'KY'}>Kentucky</MenuItem>
                                    <MenuItem value={'LA'}>Louisiana</MenuItem>
                                    <MenuItem value={'ME'}>Maine</MenuItem>
                                    <MenuItem value={'MD'}>Maryland</MenuItem>
                                    <MenuItem value={'MA'}>Massachusetts</MenuItem>
                                    <MenuItem value={'MI'}>Michigan</MenuItem>
                                    <MenuItem value={'MN'}>Minnesota</MenuItem>
                                    <MenuItem value={'MS'}>Mississippi</MenuItem>
                                    <MenuItem value={'MO'}>Missouri</MenuItem>
                                    <MenuItem value={'MT'}>Montana</MenuItem>
                                    <MenuItem value={'NE'}>Nebraska</MenuItem>
                                    <MenuItem value={'NV'}>Nevada</MenuItem>
                                    <MenuItem value={"NH"}>New Hampshire</MenuItem>
                                    <MenuItem value={"NJ"}>New Jersey</MenuItem>
                                    <MenuItem value={"NM"}>New Mexico</MenuItem>
                                    <MenuItem value={"NY"}>New York</MenuItem>
                                    <MenuItem value={"NC"}>North Carolina</MenuItem>
                                    <MenuItem value={"ND"}>North Dakota</MenuItem>
                                    <MenuItem value={"OH"}>Ohio</MenuItem>
                                    <MenuItem value={"OK"}>Oklahoma</MenuItem>
                                    <MenuItem value={"OR"}>Oregon</MenuItem>
                                    <MenuItem value={"PA"}>Pennsylvania</MenuItem>
                                    <MenuItem value={"RI"}>Rhode Island</MenuItem>
                                    <MenuItem value={"SC"}>South Carolina</MenuItem>
                                    <MenuItem value={"SD"}>South Dakota</MenuItem>
                                    <MenuItem value={"TN"}>Tennessee</MenuItem>
                                    <MenuItem value={"TX"}>Texas</MenuItem>
                                    <MenuItem value={"UT"}>Utah</MenuItem>
                                    <MenuItem value={"VT"}>Vermont</MenuItem>
                                    <MenuItem value={"VA"}>Virginia</MenuItem>
                                    <MenuItem value={"WA"}>Washington</MenuItem>
                                    <MenuItem value={"WV"}>West Virginia</MenuItem>
                                    <MenuItem value={"WI"}>Wisconsin</MenuItem>
                                    <MenuItem value={"WY"}>Wyoming</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs = {12} direction = {'row'}>
                            <TextField  
                                label="Zipcode" 
                                type="number"
                                placeholder = "77055"
                                inputProps = {{minLength: 5, maxLength:9}}
                                required
                                onChange={(event) => setZipcode(event.target.value)}
                                />
                        </Grid>
                        <Grid item xs = {12} direction = {'row'}>
                            <Button type="submit" variant="contained" color="primary">SAVE</Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
            ) : (
            <div>
                <h2 className={styles.featuresHeading}>
                    You Are Not Logged In
                </h2>
                <p style={{ maxWidth: 900 + "px", margin: "auto" }}>
                    Please log in or sign up below to manage your profile.
                </p>
                    <div style={{padding: 15 + "px", display: "inline-block"}}>
                            <Stack direction="row" spacing={2}>
                            <Button variant="contained" onClick={Login} color="primary">Log In</Button>
                            <Button variant="outlined" onClick={Signup} color="secondary">Sign Up</Button>
                            </Stack>
                    </div>
            </div>
            )}
        </div>
        
        )

};

export default ManageProfile;