import React from "react";
import DataTable from '../components/DataTable/DataTable'

const History = props => {
    return(
        <div style={{width: 100 + '%', display: 'flex', justifyContent: "center"}}>
            <div style={{maxWidth: 1300 + 'px',  marginTop: 100 + 'px'}}>
                <DataTable />
            </div>
        </div>
    )
};

export default History;