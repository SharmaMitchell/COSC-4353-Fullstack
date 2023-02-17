import React from "react";
import  SectionTitle from '../components/SectionTitle/SectionTitle'

// TODO: change buttons and inputs to Material UI components (there is also a calendar component)
//     (see https://mui.com/components/buttons/ and https://mui.com/components/text-fields/)
//     (see https://mui.com/components/pickers/ for the calendar)
// TODO: add hints below inputs to explain the calculations (see design)
// TODO: validate input fields (gallons must be a number, date must be after current day, address must be valid (use regex, ask Mitchell for help if needed))
// TODO: add estimate output preview (it can be blank for now, just implement the layout)
const Estimate = props => {
    return(
        <div>
            <SectionTitle text="Estimate Calculator" />
            
            <div className="row pb-1">
                <div className="input-group col-lg-4">
                    <label for="date_time">Gallons Requested:</label>
                    <input type="number" placeholder="ex: 1,700"/>
                </div>

                <p>Delivery Address</p>

                <div className="input-group col-lg-4">
                    <label for="date_time">Delivery Date:</label>
                    <input type="date"/>
                </div>

                <div className="input-group-append">
                    <button type="button"> GET QUOTE </button>
                </div>
            </div>
        </div>
    )
};

export default Estimate;