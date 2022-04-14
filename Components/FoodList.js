import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";

export default function FoodList(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Food ID</TableCell>
            <TableCell align="left">Food Name</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Quantity</TableCell>
          </TableRow>
          <Button align="right">Submit Order</Button>
        </TableHead>
        <TableBody>
          {props.courses.map((course, index) => (
            <TableRow
              key={course.courseName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index}
              </TableCell>
              <TableCell align="left">{course.courseName}</TableCell>
              <TableCell align="left">{course.courseLocation}</TableCell>
              <TableCell align="left">{course.courseContent}</TableCell>
              <TableCell align="left">{course.teacherId}</TableCell>
              <TableCell align="left">
                <Button variant="contained"
                color = {props.buttonColor}
                onClick={() => props.handleButtonClick(course.courseName)}>
                  {props.buttonLabel}</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
