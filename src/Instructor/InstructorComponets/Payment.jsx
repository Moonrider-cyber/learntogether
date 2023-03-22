import React from 'react'
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Stack, TableContainer } from '@mui/material';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteCourse ,activeDeactiveCourse } from '../../redux/actions/admin';
import { getAllCourses } from '../../redux/actions/courses';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const Payment = (courses) => {

  const dispatch = useDispatch();
 
  const { message,admin } = useSelector((state) => state.admin);

  useEffect(() => {
    if(message){
      dispatch(getAllCourses());
    }
  }, [message]);
  
  
  return (
    <div className="home-content">
      <Box sx={{paddingX:5,paddingTop:5}}>
      <Box sx={{ width: '100%' }}>
      <Typography variant='h4' sx={{position:"absolute",fontWeight:"bold",pt:1,pl:1}}>Payment</Typography>
        <Box sx={{display:"flex",justifyContent:"right"}}>
        {/* <Button onClick={RefreshPageBtn} sx={{backgroundColor:"#008cff",color:"white",mx:1}}><RefreshIcon/></Button> */}
        {/* <Link to={"/admin/dashboard/courses/addcourse"}><Button variant="contained" sx={{mY:5}} >Add Courses</Button></Link> */}
        </Box>

      <TableContainer component={Paper} sx={{ mt: 9 }}>
      <Table sx={{ minWidth: 650,overflowX:"scroll" }}>
        <TableHead sx={{overflowX:"scroll" }}>
          <TableRow>
            <TableCell align="center">User Name</TableCell>
            {/* <TableCell align="center">Description</TableCell> */}
            <TableCell align="center">Course Name</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Date</TableCell>
            {/* <TableCell align="center">CreateBy</TableCell> */}
            {/* <TableCell align="center"></TableCell> */}
            {/* <TableCell align="center">Action</TableCell> */}

          </TableRow>
        </TableHead>
        <TableBody>
          

          {
            // courses.courses ?
          // courses.length > 0 ?
        //   courses.courses.map((row,index) => (
            <TableRow
            //   key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

            >
              <TableCell component="th" scope="row" align="center">
                {/* {row.title} */}
                test
              </TableCell>
              {/* <TableCell align="center">{row.description}</TableCell> */}
              <TableCell align="center">
                {/* {row.price} */}
                web dev
                </TableCell>
              <TableCell align="center">
                {/* {row.catagory} */}999
                </TableCell>
              <TableCell align="center">
                {/* {row.createAt} */}12/12/2021
                </TableCell>
              
            </TableRow> 
        //   ))
        // : null
        // : null
        }
        </TableBody>
      </Table>
      {/* </Paper> */}
      </TableContainer>
      
      
    </Box>
        </Box>
        
    </div>
  )
}

