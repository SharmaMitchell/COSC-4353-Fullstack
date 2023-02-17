import React from "react";
import  SectionTitle from '../components/SectionTitle/SectionTitle'


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