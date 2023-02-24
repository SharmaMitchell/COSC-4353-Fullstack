import React, {useState} from "react";
import SectionTitle from '../components/SectionTitle/SectionTitle'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const Estimate = props => {
    const [gallons, setGallons] = useState(0);
    const [date, setDate] = useState('');
    //const [address, setAddress] = useState('')
    //const navigate = useNavigate();
    let today = new Date()
    today = formatDate(today)

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            gallons: gallons,
            //address: address,
            date: date,
        }
        console.log(data);
    }
    function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      }
    return(
        <div>
            <SectionTitle text="Estimate Calculator" />
            <form onSubmit={handleSubmit}>
                <Grid container spacing = {2}  > 
                    <Grid item xs = {12}>
                        <TextField
                        required
                        type = "number"
                        label = "Gallons Requested" 
                        id = "gallons"
                        placeholder = "ex: 1,700"
                        inputProps = {{maxLength:50}}
                        onChange={(event) => setGallons(event.target.value)}
                        helperText={
                            <>
                              1000+ Gallons: 2%
                              <br />
                              1000 Gallons: 3%
                            </>
                          }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Delivery Address"
                            id="address"
                            value="123 Drive"
                            InputProps={{
                            readOnly: true,
                            }}
                            helperText={
                                <>
                                  In-State Location: 2%
                                  <br />
                                  Out-Of-State Location: 4%
                                </>
                              }
                            />
                    </Grid>
                     <Grid item xs = {12}>
                        <TextField
                        //disablePast
                        inputFormat="MM/DD/YYYY"
                        type = "date"
                        id = "date"
                        //<DatePicker minDate={today}/>
                        inputProps = {{min: today}}
                        onChange={(event) => setDate(event.target.value)}
                        />
                     </Grid>      
                     <Grid item xs = {12} direction = {'row'}>
                        <Button type="submit" variant="contained" color="primary">GET QUOTE</Button> 
                     </Grid>
                     <Grid item xs={12}>
                        <TextField
                            label="Suggested Price/Gallon"
                            id="price"
                            value="$6 per gallon"
                            InputProps={{
                            readOnly: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Total Amount Due"
                            id="amount"
                            value="$5300"
                            InputProps={{
                            readOnly: true,
                            }}
                        />
                    </Grid>         
                </Grid>
            </form>
        </div>
    )
};

export default Estimate;