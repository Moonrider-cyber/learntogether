import React from 'react'
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { getAllCourses } from '../../redux/actions/courses';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';


// const { courses } = useSelector((state) => state.courses);


// const rows = [
//   // createData('Cupcake', 305, 3.7, 67, 4.3),
//   // createData(),
// ];

export const Catagory = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCourses());
  }, [dispatch])
  
  const { courses } = useSelector((state) => state.courses);

  return (
    <div className="home-content">
      <Box sx={{paddingX:5,paddingTop:5}}>
      <Box sx={{ width: '100%' }}>
        <Button variant="contained" sx={{mY:5}}>Add Catagory</Button>
      <Paper sx={{ width: '100%', mt: 4 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            {/* <TableCell align="right">Description</TableCell> */}
            {/* <TableCell align="right">Price</TableCell> */}
            <TableCell align="right">Created By</TableCell>
            <TableCell align="right">CreateAt</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          

          <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

            >
              <TableCell component="th" scope="row" >
                Web Development
              </TableCell>
              {/* <TableCell align="right"></TableCell> */}
              <TableCell align="right">jainex</TableCell>
              <TableCell align="right">01-03-2023</TableCell>
              <TableCell align="right"><Button> Delete </Button></TableCell>
            </TableRow>
          
        </TableBody>
      </Table>
    
  
      </Paper>
      
    </Box>
        </Box>
    </div>
  )
}

