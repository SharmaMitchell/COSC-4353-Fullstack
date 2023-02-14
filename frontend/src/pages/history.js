import React from "react";
import DataTable from '../components/DataTable/DataTable'
import  SectionTitle from '../components/SectionTitle/SectionTitle'
import styles from './history.module.css'

const History = props => {
    return(
        <div>
            <SectionTitle text="Estimate History" />
            <div className={styles.tableWrapper}>
                <div style={{maxWidth: 1300 + 'px'}}>
                    <DataTable />
                </div>
            </div>
        </div>
        
    )
};

export default History;