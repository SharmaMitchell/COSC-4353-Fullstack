import React, {useState} from "react";
import SectionTitle from '../components/SectionTitle/SectionTitle'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';



const ManageProfile = props => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [address2, setAddress2] = useState('');
    const [apt, setApt] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCounty] = useState('');
    const [zipcode, setZipcode] = useState('');
    
    



    return(
        <div>
            <SectionTitle text = "Profile Management"></SectionTitle>
            <form>
                <Grid container spacing = {2}  >
                    <Grid item xs = {12}>
                        <TextField  
                        label="Full Name" 
                        id = "name"
                        placeholder = "John Doe"
                        inputProps = {{maxLength:50}}
                        required
                        />
                    </Grid>
                    <Grid item xs = {12} direction = {"row"}>
                        <TextField  
                        label="Street Address 1" 
                        id = "address"
                        placeholder = "9813 Nut Street"
                        inputProps = {{maxLength:100}}
                        required
                        
                        />
                    </Grid>
                    <Grid item xs = {12} direction = {'row'}>
                        <TextField  
                        label="Street Address 2" 
                        id = "address 2"
                        placeholder = "Apt, Suite, etc... "
                        
                        
                        />
                    </Grid>
                    <Grid item xs = {12} direction = {'row'}>
                        <TextField  
                        label="City" 
                        inputProps = {{maxLength:100}}
                        required
                        />
                    </Grid>
                    <Grid item xs = {12} direction = {'row'} >
                        <FormControl sx = {{width: 225,}} required>
                            <InputLabel id = "demo-simple-select-label">State</InputLabel>
                            <Select
                                labelId = "demo-simple-select-label"
                                label = "State"
                                required
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
                    <Grid item xs = {12} direction = {'column'} >
                        <TextField  
                            label="City" 
                            id = "city"
                            placeholder = "Houston"
                            inputProps = {{maxLength:100}}
                            required
                            />
                    </Grid>
                    <Grid item xs = {12} direction = {'row'}>
                        <TextField  
                            label="Zipcode" 
                            placeholder = "77055"
                            inputProps = {{maxLength:9}}
                            required
                            />
                    </Grid>
                    <Grid item xs = {12} direction = {'row'}>
                        <Button type="submit" variant="contained" color="primary">SIGN UP</Button>
                    </Grid>
                </Grid>
            </form>
        </div>
        
        )

};

export default ManageProfile;