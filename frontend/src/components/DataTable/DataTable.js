import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import tableData from './example-data.json'

function DataTable(props) {
  // const USER_ID = props.userID
  const USER_ID = "63f82d40be153fa3c4b62062";
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/${USER_ID ? USER_ID : ""}`)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setTableData(data.estimates);
        console.log(data.estimates);
        return tableData;
      });
  }, []);
  const headStyle = {
    fontWeight: 600,
  };
  const StyledTableRow = styled(TableRow)(() => ({
    "&:nth-of-type(odd)": {
      backgroundColor: `var(--card-background)`,
    },
  }));
  function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let period = hours < 12 ? "AM" : "PM";
    hours = hours % 12 || 12;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours}:${minutes}${period}`;
  }
  const formatDate = (dateString) => {
    let theDate = new Date(dateString);
    return `${
      theDate.getMonth() + 1
    }/${theDate.getDate()}/${theDate.getFullYear()}, ${formatTime(theDate)}`;
  };
  return (
    <TableContainer component={Paper}>
      <Table aria-label="estimate history table">
        <TableHead>
          <TableRow>
            <TableCell style={headStyle}>Estimate Date</TableCell>
            <TableCell style={headStyle}>Gallons Requested</TableCell>
            <TableCell style={headStyle}>Delivery Address</TableCell>
            <TableCell style={headStyle}>Delivery Date</TableCell>
            <TableCell style={headStyle}>Suggested Price</TableCell>
            <TableCell style={headStyle}>Fuel Quote</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row, index) => (
            <StyledTableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{formatDate(row.estimateDate)}</TableCell>
              <TableCell>
                {row.gallonsRequested.toLocaleString("en-US")}
              </TableCell>
              <TableCell>{row.deliveryAddress}</TableCell>
              <TableCell>{formatDate(row.deliveryDate)}</TableCell>
              <TableCell>
                $
                {parseFloat(row.suggestedPrice)
                  .toFixed(2)
                  .toLocaleString("en-US")}
              </TableCell>
              <TableCell>
                ${parseFloat(row.quote).toFixed(2).toLocaleString("en-US")}
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DataTable;
