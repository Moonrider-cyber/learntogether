import React from 'react'
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteCourse, getAllCourses } from '../../redux/actions/courses';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const Courses = (courses) => {

  const dispatch = useDispatch();
  function deleteBtnHandler(e){
    dispatch(deleteCourse(e.target.attributes.dataid.value));
  }
  const { message } = useSelector((state) => state.courses);

  useEffect(() => {
    if(message){
      dispatch(getAllCourses());
    }
  }, [message]);
  
  // );
  return (
    <div className="home-content">
      <Box sx={{paddingX:5,paddingTop:5}}>
      <Box sx={{ width: '100%' }}>
      <Typography variant='h4' sx={{position:"absolute",fontWeight:"bold",pt:1,pl:1}}>Courses</Typography>
        <Box sx={{display:"flex",justifyContent:"right"}}>
        {/* <Button onClick={RefreshPageBtn} sx={{backgroundColor:"#008cff",color:"white",mx:1}}><RefreshIcon/></Button> */}
        <Link to={"/admin/dashboard/courses"}><Button variant="contained" sx={{mY:5}}>Add Courses</Button></Link>
        </Box>
      <Paper sx={{ width: '100%', mt: 4 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Catagory</TableCell>
            <TableCell align="right">CreateAt</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          

          {
            courses.courses ?
          // courses.length > 0 ?
          courses.courses.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

            >
              <TableCell component="th" scope="row" >
                {row.title}
              </TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.catagory}</TableCell>
              <TableCell align="right">{row.createAt}</TableCell>
              <TableCell align="center"><Button dataid={row._id} onClick={deleteBtnHandler}> Delete </Button></TableCell>
            </TableRow>
          ))
        // : null
        : null
        }
        </TableBody>
      </Table>
    
  
      </Paper>
      
    </Box>
        </Box>
    </div>
  )
}

