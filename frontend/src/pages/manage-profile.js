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
import { Alert } from "@mui/material";
import {UserAlert} from '../components/UserAlert/UserAlert';


const ManageProfile = (props) => {
    const [name, setName] = useState(null);
    const [address, setAddress] = useState(null);
    const [address2, setAddress2] = useState(null);
    const [city, setCity] = useState(null);
    const [state, setState] = useState("");
    const [zipcode, setZipcode] = useState(null);
    const navigate = useNavigate();

    const [invalid, setInvalid] = useState(false);

    useEffect(() => {
        if (props.state){ 
            getValues(props.logID)
        }
    },[]);
    
    const getValues = (userID) => {
        console.log(userID)
        ProfileDataService.getProfileData(userID)
        .then(response => {
            setName(response.data.client_name)
            setAddress(response.data.address_1)
            setAddress2(response.data.address_2)
            setCity(response.data.city)
            setState(response.data.state)
            setZipcode(response.data.zipcode)
            console.log(response.data);
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
          navigate("/estimate");
        })
        .catch(e => {
          console.log(e);
          setInvalid(true)
        });
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
                            {name == null ? 
                                <TextField   
                                    label="Full Name" 
                                    id = "name"
                                    placeholder = "John Doe"
                                    inputProps = {{maxLength:40}}
                                    required
                                    onChange={(event) => setName(event.target.value)}
                                />
                                : 
                                <TextField
                                    label="Full Name" 
                                    id = "name"
                                    value = {name}
                                    inputProps = {{maxLength:50}}
                                    required
                                    onChange={(event) => setName(event.target.value)}
                                    InputLabelProps={{ shrink: true }}
                                />
                            }
                        </Grid>
                        <Grid item xs = {12} direction = {"row"}>
                            {address == null ?
                                <TextField  
                                    label="Street Address 1" 
                                    id = "address"
                                    placeholder = "9813 Nut Street"
                                    inputProps = {{maxLength:100}}
                                    // required
                                    onChange={(event) => setAddress(event.target.value)}
                                />
                                :
                                <TextField  
                                    label="Street Address 1" 
                                    id = "address"
                                    value = {address}
                                    inputProps = {{maxLength:100}}
                                    // required
                                    onChange={(event) => setAddress(event.target.value)}
                                    InputLabelProps={{ shrink: true }}
                                />
                            }

                        </Grid>
                        <Grid item xs = {12} direction = {'row'}>
                            {address2 == null ?
                                <TextField  
                                label="Street Address 2" 
                                id = "address2"
                                placeholder = "Apt, Suite, etc... "
                                inputProps = {{maxLength:100}}
                                onChange={(event) => setAddress2(event.target.value)}
                                />
                                :
                                <TextField  
                                label="Street Address 2" 
                                id = "address2"
                                value = {address2}
                                inputProps = {{maxLength:100}}
                                onChange={(event) => setAddress2(event.target.value)}
                                InputLabelProps={{ shrink: true }}
                                />
                            }
                        </Grid>
                        <Grid item xs = {12} direction = {'column'} >
                            {city == null ?
                                <TextField  
                                    label="City" 
                                    id = "city"
                                    placeholder = "Houston"
                                    inputProps = {{maxLength:100}}
                                    required
                                    onChange={(event) => setCity(event.target.value)}
                                />
                                :
                                <TextField  
                                    label="City" 
                                    id = "city"
                                    value = {city}
                                    inputProps = {{maxLength:50}}
                                    required
                                    onChange={(event) => setCity(event.target.value)}
                                    InputLabelProps={{ shrink: true }}
                                />
                            }
                        </Grid>
                        <Grid item xs = {12} direction = {'row'} >
                            <FormControl sx = {{width: 225,}} required>
                                <InputLabel id = "demo-simple-select-label">State</InputLabel>
                                {state == null ?
                                <Select
                                    labelId = "demo-simple-select-label"
                                    label = "State"
                                    required
                                    sx={{textAlign: 'left',}}
                                    onChange={(event) => setState(event.target.value)}
                                >   
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
                                :
                                <Select
                                labelId = "demo-simple-select-label"
                                label = "State"
                                required
                                value = {state}
                                sx={{textAlign: 'left',}}
                                onChange={(event) => setState(event.target.value)}
                            >   
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
                            }
                            </FormControl>
                        </Grid>
                        <Grid item xs = {12} direction = {'row'}>
                            {zipcode == null ?
                                <TextField  
                                    label="Zipcode" 
                                    type="number"
                                    placeholder = "77055"
                                    inputProps = {{minLength: 5, maxLength:9}}
                                    required
                                    onChange={(event) => setZipcode(event.target.value)}
                                />
                                :
                                <TextField  
                                    label="Zipcode" 
                                    type="number"
                                    value = {zipcode}
                                    inputProps = {{minLength: 5, maxLength:9}}
                                    required
                                    onChange={(event) => setZipcode(event.target.value)}
                                    InputLabelProps={{ shrink: true }}
                                />
                            }
                        </Grid>
                        <Grid item xs = {12} direction = {'row'}>
                            <Button type="submit" variant="contained" color="primary">SAVE</Button>
                        </Grid>
                    </Grid>
                    {invalid == true ? <Alert severity="error">Invalid entry, please try again</Alert> : <div></div>}
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