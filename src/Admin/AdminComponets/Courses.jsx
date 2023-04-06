import React from 'react'
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Chip, Stack, TableContainer } from '@mui/material';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteCourse ,activeDeactiveCourse, getAllCoursesadmin } from '../../redux/actions/admin';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const Courses = (courses) => {

  const dispatch = useDispatch();
 
  const { message,admin } = useSelector((state) => state.admin);

  useEffect(() => {
    if(message){
      dispatch(getAllCoursesadmin(true));
    }
  }, [message]);
  
  
  return (
    <div className="home-content">
      <Box sx={{paddingX:5,paddingTop:5}}>
      <Box sx={{ width: '100%' }}>
      <Typography variant='h4' sx={{position:"absolute",fontWeight:"bold",pt:1,pl:1}}>Courses</Typography>
        <Box sx={{display:"flex",justifyContent:"right"}}>
        {/* <Button onClick={RefreshPageBtn} sx={{backgroundColor:"#008cff",color:"white",mx:1}}><RefreshIcon/></Button> */}
        <Link to={"/admin/dashboard/courses/addcourse"}><Button variant="contained" sx={{mY:5}} >Add Courses</Button></Link>
        </Box>

        { admin ? admin.role === "super-admin" ?
      
      <TableContainer component={Paper} sx={{ mt: 4 }}>
      <Table sx={{ minWidth: 650,overflowX:"scroll" }}>
        <TableHead sx={{overflowX:"scroll" }}>
          <TableRow>
            {/* <TableCell align="center">Description</TableCell> */}
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Price (₹)</TableCell>
            <TableCell align="center">Category</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">CreateAt</TableCell>
            <TableCell align="center">CreateBy</TableCell>
            {/* <TableCell align="center"></TableCell> */}
            <TableCell align="center">Action</TableCell>

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
              <TableCell component="th" scope="row" align="center">
                {row.title}
              </TableCell>
              {/* <TableCell align="center">{row.description}</TableCell> */}
              <TableCell align="center">{row.price}</TableCell>
              <TableCell align="center">{row.catagory}</TableCell>
              <TableCell align="center">{row.active ? (<Chip label="Active" color="primary"  />) : (<Chip label="Deactive" color="success"   />)}</TableCell>
              <TableCell align="center">{row.createAt.substring(0, 10)}</TableCell>
              <TableCell align="center">{row.createBy[0].name}</TableCell>
              {/* <TableCell align="center"><Button dataid={row._id} onClick={adBtnHandler}> {row.active === true ? "Disable" : "Enable"} </Button></TableCell> */}
              {/* <TableCell align="center"><IconButton aria-label="delete" onClick={()=> dispatch(deleteCourse(row._id))}> <DeleteIcon/> </IconButton></TableCell> */}
              {/* <TableCell align="center"><Button variant='outlined' >Edit Lecture</Button></TableCell> */}
              <TableCell align="center">
                <Stack flexDirection={'row'} justifyContent={"center"} >
              <Link to={{pathname:`/admin/dashboard/courses/editcourse` }} state={row._id}><Button variant='outlined'>Edit Lecture</Button></Link>
              <PopupState variant="popover" popupId="demo-popup-popover">
                {(popupState) => (
                  <div>
                    <IconButton variant="contained" {...bindTrigger(popupState)}>
                      <MoreVertIcon />
                    </IconButton>
                    <Popover
                      {...bindPopover(popupState)}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                      }}
                    >
                      <Stack sx={{ p: 1 }}>
                        <Button sx={{ p: 1 }} onClick={()=> dispatch(activeDeactiveCourse(row._id))}>{row.active === true ? "Disable" : "Enable"}</Button>
                        <Button sx={{ p: 1 }} onClick={()=> dispatch(deleteCourse(row._id))}>Delete</Button>
                      </Stack>
                    </Popover>
                  </div>
                )}
              </PopupState> 
              </Stack>
              </TableCell>
            </TableRow> 
          ))
        // : null
        : null
        }
        </TableBody>
      </Table>
      {/* </Paper> */}
      </TableContainer>
      : admin.role === "sub-admin" ?
      
      <TableContainer component={Paper} sx={{ mt: 4 }}>
      <Table sx={{ minWidth: 650,overflowX:"scroll" }}>
        <TableHead sx={{overflowX:"scroll" }}>
          <TableRow>
            <TableCell align="center">Title</TableCell>
            {/* <TableCell align="center">Description</TableCell> */}
            <TableCell align="center">Price (₹)</TableCell>
            <TableCell align="center">Category</TableCell>
            <TableCell align="center">CreateAt</TableCell>
            <TableCell align="center">CreateBy</TableCell>
            {/* <TableCell align="center"></TableCell> */}
            <TableCell align="center">Action</TableCell>

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
              <TableCell component="th" scope="row" align="center">
                {row.title}
              </TableCell>
              {/* <TableCell align="center">{row.description}</TableCell> */}
              <TableCell align="center">{row.price}</TableCell>
              <TableCell align="center">{row.catagory}</TableCell>
              <TableCell align="center">{row.createAt.substring(0, 10)}</TableCell>
              <TableCell align="center">{row.createBy[0].name}</TableCell>
              {/* <TableCell align="center"><Button dataid={row._id} onClick={adBtnHandler}> {row.active === true ? "Disable" : "Enable"} </Button></TableCell> */}
              {/* <TableCell align="center"><IconButton aria-label="delete" onClick={()=> dispatch(deleteCourse(row._id))}> <DeleteIcon/> </IconButton></TableCell> */}
              {/* <TableCell align="center"><Button variant='outlined' >Edit Lecture</Button></TableCell> */}
              <TableCell align="center">
                <Stack flexDirection={'row'} justifyContent={"center"} >
              <Link to={{pathname:`/admin/dashboard/courses/editcourse` }} state={row._id}><Button variant='outlined'>Edit Lecture</Button></Link>
              <PopupState variant="popover" popupId="demo-popup-popover">
                {(popupState) => (
                  <div>
                    <IconButton variant="contained" {...bindTrigger(popupState)}>
                      <MoreVertIcon />
                    </IconButton>
                    <Popover
                      {...bindPopover(popupState)}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                      }}
                    >
                      <Stack sx={{ p: 1 }}>
                        <Button sx={{ p: 1 }} onClick={()=> dispatch(activeDeactiveCourse(row._id))}>{row.active === true ? "Disable" : "Enable"}</Button>
                      </Stack>
                    </Popover>
                  </div>
                )}
              </PopupState> 
              </Stack>
              </TableCell>
            </TableRow> 
          ))
        // : null
        : null
        }
        </TableBody>
      </Table>
      {/* </Paper> */}
      </TableContainer>
      : null : null }
    </Box>
        </Box>
        
    </div>
  )
}

