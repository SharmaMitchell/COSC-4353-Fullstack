import React, {useState} from "react";
import SectionTitle from '../components/SectionTitle/SectionTitle'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
//import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const Estimate = props => {
    const [gallons, setGallons] = useState(0);
    const [date, setDate] = useState('');
    //const [address, setAddress] = useState('')
    // const navigate = useNavigate();
    const today = new Date()

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            gallons: gallons,
            //address: address,
            date: date,

        }
        console.log(data);
    }
    return(
        <div>
            <SectionTitle text="Estimate Calculator" />
            <form onSubmit={handleSubmit}>
                <Grid container spacing = {2}  > 
                    <Grid item xs = {12}>
                        <TextField
                        type = "number"
                        label = "Gallons Requested" 
                        id = "gallons"
                        placeholder = "ex: 1,700"
                        inputProps = {{maxLength:50}}
                        required
                        onChange={(event) => setGallons(event.target.value)}
                        />
                     </Grid>

                    <Grid item xs = {12}>
                    <TextField
                        label = "Delivery Address" 
                        id = "address"
                        defaultValue= "123 Drive"
                        disabled
                        />
                    </Grid>


                     <Grid item xs = {12}>
                        <TextField
                        helperText = "Delivery Date" 
                        type = "date"
                        id = "date"
                        required
                        inputProps = {{minDate: today.setDate(today.getDate())}}

                        onChange={(event) => setDate(event.target.value)}
                        />
                     </Grid>      

                     <Grid item xs = {12} direction = {'row'}>
                        <Button type="submit" variant="contained" color="primary">GET QUOTE</Button> 
                     </Grid>         
                </Grid>
            </form>
        </div>
    )
};

export default Estimate;