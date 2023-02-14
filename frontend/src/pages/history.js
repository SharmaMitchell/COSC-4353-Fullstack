import React from "react";
import DataTable from '../components/DataTable/DataTable'
import  SectionTitle from '../components/SectionTitle/SectionTitle'

const History = props => {
    return(
        <>
            <SectionTitle text="Estimate History" />
            <div style={{width: 100 + '%', display: 'flex', justifyContent: "center"}}>
                <div style={{maxWidth: 1300 + 'px'}}>
                    <DataTable />
                </div>
            </div>
        </>
        
    )
};

export default History;