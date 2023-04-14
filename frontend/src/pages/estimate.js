import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import moment from "moment-timezone";
import styles from './home.module.css';
import Stack from '@mui/material/Stack';

const Estimate = (props) => {
  const [gallons, setGallons] = useState(0);
  const [date, setDate] = useState("");
  const [inState, setInState] = useState(false);
  const [suggestedPrice, setSuggestedPrice] = useState(0);
  const [total, setTotal] = useState(0);
  const [address, setAddress] = useState("");
  const [historyFactor, setHistoryFactor] = useState(false);
  const navigate = useNavigate();
  const userID = props.userID;

  //const [address, setAddress] = useState('')
  //const navigate = useNavigate();
  let today = new Date();
  today = formatDate(today);

  const Login = () => {
    navigate("/login");
  };

  const Signup = () => {
    navigate("/signup");
  };

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
        setSuggestedPrice(data.suggested_price);
        setTotal(data.total_amount_due);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSave = (e) => {
    // save quote to backend
    e.preventDefault();
    const dateInServerTimezone = moment(date).tz("America/Chicago").toDate();
    const data = {
      // client_id: userID,
      estimate_date: new Date(),
      gallons_requested: gallons,
      address: address,
      delivery_date: dateInServerTimezone,
      suggested_price: suggestedPrice,
      quote: total,
    };

    console.log(data);

    fetch(`http://localhost:5000/api/v1/estimates/${userID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) =>
        response.status == 200
          ? console.log("Estimate saved!")
          : console.log("Error saving estimate")
      )
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
        const address = data.address_1;
        const address2 = data.address_2;
        const city = data.city;
        const state = data.state;
        const zip = data.zipcode;
        const fullAddress = `${address}${
          address2 ? ` ${address2}` : ""
        }, ${city}, ${state}, ${zip}`;
        setAddress(fullAddress);
      });
    console.log(inState);
  }, [userID]);

  // get user's history to see if they've ordered before (history factor)
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/estimates/${userID ? userID : ""}`)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setHistoryFactor(data.estimates.length > 0)
      });
  }, []);


  return (
    <div>
      <SectionTitle text="Estimate Calculator" />
      {props.state ? (
            <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Grid container spacing={2} sx={{ maxWidth: "320px" }}>
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
                  {gallons > 1000 ? (
                    <b style={{ color: "var(--text-highlight)" }}>
                      1000+ Gallons: 2%
                    </b>
                  ) : (
                    <>1000+ Gallons: 2%</>
                  )}
                  <br />
                  {gallons > 1000 ? (
                    <>{"< 1000 Gallons: 3%"}</>
                  ) : (
                    <b style={{ color: "var(--text-highlight)" }}>
                      {"< 1000 Gallons: 3%"}
                    </b>
                  )}
                </>
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Delivery Address"
              id="address"
              value={address}
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
          sx={{ maxWidth: "320px", marginTop: "30px" }}
        >
          <Grid item xs={12}>
            <TextField
              label="Suggested Price/Gallon"
              id="price"
              value={`$${suggestedPrice} per Gallon`}
              InputProps={{
                readOnly: true,
              }}
              sx={{ width: "100%" }}
              color="primary"
              variant="filled"
              FormHelperTextProps={{
                style: { color: "black" },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Total Amount Due"
              id="amount"
              value={`$${total}`}
              InputProps={{
                readOnly: true,
              }}
              sx={{ width: "100%" }}
              color="primary"
              variant="filled"
              helperText={
                <>
                  Base cost:
                  <b>
                    {" " + (gallons * 1.5).toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </b>
                  <br />
                  {inState ? (
                    <>
                      In-State:
                      <b>
                        {" " + (gallons * 1.5 * 0.02).toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                      </b>
                    </>
                  ) : (
                    <>
                      Out-of-State:
                      <b>
                        {" " + (gallons * 1.5 * 0.04).toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                      </b>
                    </>
                  )}
                  <br />
                  Profit Factor:
                  <b>
                    {" " + (gallons * 1.5 * 0.1).toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </b>
                  <br />
                  {historyFactor ? (
                    <>
                      History Factor:
                      <b>
                        {" " + (gallons * 1.5 * -0.01).toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                      </b>
                      <br />
                    </>
                  ) : (
                    <></>
                  )}
                  Gallons {gallons > 1000 ? "> 1000" : "< 1000"}:
                  <b>
                    {" " + (gallons * 1.5 * (gallons > 1000 ? 0.02 : 0.03))
                      .toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })
                    }
                  </b>
                </>
              }
              FormHelperTextProps={{
                style: { color: "black" },
              }}
            />
          </Grid>
        </Grid>
      </form>
      <Grid item xs={12} direction={"row"} sx={{ marginTop: "20px" }}>
        <Button onClick={handleSave} variant="contained" color="primary">
          Save Quote
        </Button>
      </Grid>
    </div>
    ) : (
      <div>
                <h2 className={styles.featuresHeading}>
                    You Are Not Logged In
                </h2>
                <p style={{ maxWidth: 900 + "px", margin: "auto" }}>
                    Please log in or sign up below to access the estimate calculator.
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
  );
};

export default Estimate;
