import React from "react";
import  SectionTitle from '../components/SectionTitle/SectionTitle'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const Estimate = props => {
    // const [gallons, setGallons] = useState('');
    // const [date, setDate] = useState('');
    // const navigate = useNavigate();


    return(
        <div>
            <SectionTitle text="Estimate Calculator" />
                <Grid container spacing = {2}  > 
                    <Grid item xs = {12}>
                        <TextField
                        type = "number"
                        label = "Gallons Requested" 
                        id = "gallons"
                        placeholder = "ex: 1,700"
                        inputProps = {{maxLength:50}}
                        required
                        // onChange={(event) => setGallons(event.target.value)}
                        />
                     </Grid>

                     <Grid item xs = {12}>
                        <TextField
                        
                        label = "Delivery Address"
                        inputProps = {{maxLength:50}}
                        
                        />
                     </Grid>

                     <Grid item xs = {12}>
                        <TextField
                        helperText = "Delivery Date" 
                        type = "date"
                        id = "date"
                        required
                        //inputProps = {{maxLength:50}}

                        // onChange={(event) => setDate(event.target.value)}
                        />
                     </Grid>      

                     <Grid item xs = {12} direction = {'row'}>
                        <Button type="submit" variant="contained" color="primary">GET QUOTE</Button> 
                     </Grid>         
                </Grid>
            

        </div>
    )
};

export default Estimate;