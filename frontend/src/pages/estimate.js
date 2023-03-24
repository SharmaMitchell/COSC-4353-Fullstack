import React, { useState, useEffect, useRef } from "react";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const Estimate = (props) => {
  const [gallons, setGallons] = useState(0);
  const [date, setDate] = useState("");
  const [inState, setInState] = useState(false);
  const userID = props.userID;

  //const [address, setAddress] = useState('')
  //const navigate = useNavigate();
  let today = new Date();
  today = formatDate(today);

  const handleSubmit = (e) => {
    // get quote from backend
    e.preventDefault();
    const data = {
      gallons: gallons,
      //address: address,
      in_state: inState,
      // date: date,
    };

    console.log(data);

    fetch(`http://localhost:5000/api/v1/get-estimate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // TODO: put this data in the form
      })
      .catch((error) => {
        console.error(error);
      });
  };

  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  // get user address to see if it's in state or not, via backend apiGetProfileData
  useEffect(() => {
    // fetch to api/get-profile, passing in user id
    console.log(userID);
    if (userID == undefined) return;
    fetch(`http://localhost:5000/api/v1/get-profile?id=${userID}`)
      .then((res) => res.json())
      .then((data) => {
        // if address is in state, set inState to true
        console.log(data);
        if (data.state == "TX") {
          setInState(true);
        }
      });
    console.log(inState);
  }, [userID]);

  return (
    <div>
      <SectionTitle text="Estimate Calculator" />
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Grid container spacing={2} sx={{ maxWidth: "250px" }}>
          <Grid item xs={12}>
            <TextField
              required
              type="number"
              label="Gallons Requested"
              id="gallons"
              placeholder="ex: 1,700"
              inputProps={{ maxLength: 50 }}
              onChange={(event) => setGallons(event.target.value)}
              sx={{ width: "100%" }}
              color="secondary"
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
              sx={{ width: "100%" }}
              color="secondary"
              helperText={
                <>
                  {inState ? (
                    <b style={{ color: "var(--text-highlight)" }}>
                      In-State Location: 2%
                    </b>
                  ) : (
                    <>In-State Location: 2%</>
                  )}
                  <br />
                  {inState ? (
                    <>Out-of-State Location: 4%</>
                  ) : (
                    <b style={{ color: "var(--text-highlight)" }}>
                      Out-of-State Location: 4%
                    </b>
                  )}
                </>
              }
              variant="filled"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              //disablePast
              inputFormat="MM/DD/YYYY"
              type="date"
              id="date"
              //<DatePicker minDate={today}/>
              inputProps={{ min: today }}
              onChange={(event) => setDate(event.target.value)}
              sx={{ width: "100%" }}
              color="secondary"
            />
          </Grid>
          <Grid item xs={12} direction={"row"} sx={{ marginTop: "20px" }}>
            <Button type="submit" variant="contained" color="primary">
              GET QUOTE
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{ maxWidth: "250px", marginTop: "30px" }}
        >
          <Grid item xs={12}>
            <TextField
              label="Suggested Price/Gallon"
              id="price"
              value="$6 per gallon"
              InputProps={{
                readOnly: true,
              }}
              sx={{ width: "100%" }}
              color="primary"
              variant="filled"
              helperText={
                <>
                  Your Profit: $4.50 per gallon
                  <br />
                  Profit Factor Fee: $0.45 per gallon
                </>
              }
              FormHelperTextProps={{
                style: { color: "black" },
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
              sx={{ width: "100%" }}
              color="primary"
              variant="filled"
              helperText={
                <>
                  Base cost: $2,550.00 ($1.50/gallon)
                  <br />
                  In-State: $51.00 (2% on $2,550.00)
                  <br />
                  Profit Fee: $510.00 (10% on $5100)
                  <br />
                  Total Cost: $3,111.00
                </>
              }
              FormHelperTextProps={{
                style: { color: "black" },
              }}
            />
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Estimate;
