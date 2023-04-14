import React from 'react'
import { Box, Button, Grid, Paper, Table, TableBody,TableCell, TableContainer, TextField} from '@mui/material'
import { useLocation } from 'react-router-dom'
import { Typography,Container } from '@mui/material'
import { Stack } from '@mui/system'
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { getAllLectures } from '../../../redux/actions/courses'
import { deleteLecture } from '../../../redux/actions/admin'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

export const EditLecture = () => {
  const {state} = useLocation();

  let id = state;
  const dispatch = useDispatch();
  const { Lectures } = useSelector((state) => state.courses);
  const { message } = useSelector((state) => state.Instructor);

  useEffect(() => {
      dispatch(getAllLectures(state));
  }, [dispatch]);

  useEffect(() => {
    if(message){
      dispatch(getAllLectures(state));
    }
  }, [message]);
  
  
  return (
    <div style={{backgroundColor:"whitesmoke",width:"100vw",height:"100vh"}}>
        <Box>
            <Typography variant="h3" sx={{width:"100%",textAlign:"center",fontWeight:"bold",mt: 2, mb: 1, py: 3,mt:0 }}>Edit Lecture</Typography>
        </Box>

        <Container>
        <Box sx={{display:"flex",justifyContent:"right"}}>
        <Link to={"/instructor/dashboard/courses/editcourse/addlecture"} state={id}><Button variant="contained" sx={{mY:5}} >Add Lectures</Button></Link>
        </Box>
      <TableContainer component={Paper} sx={{ mt: 4 }}>
      <Table sx={{ minWidth: 650,overflowX:"scroll" }}>
        <TableHead sx={{overflowX:"scroll" }}>
          <TableRow>
            <TableCell align="center">Video</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          

          {
            Lectures ?
            Lectures.lectures.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center" width={100}>
                <Link to={row.video[0].url} target="_blank" style={{color:"black"}}><PlayCircleIcon/></Link>
                
              </TableCell>
              <TableCell component="th" scope="row" align="left">
                {row.title}
              </TableCell>
              <TableCell align="right">
                <Stack flexDirection={'row'} justifyContent={"right"} >
              {/* <Link to={{pathname:`/admin/dashboard/courses/editcourse/addlecture` }} editid={row._id}><Button variant='outlined'>Edit Lecture</Button></Link> */}
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
                        {/* <Button sx={{ p: 1 }} onClick={()=> dispatch(activeDeactiveCourse(row._id))}>{row.active === true ? "Disable" : "Enable"}</Button> */}
                        <Button sx={{ p: 1 }} onClick={()=> dispatch(deleteLecture(id,row._id))}>Delete</Button>
                      </Stack>
                    </Popover>
                  </div>
                )}
              </PopupState> 
              </Stack>
              </TableCell>
            </TableRow> 
           ))
        : <TableRow>
            <TableCell>
              No Lectures Found
            </TableCell>
          </TableRow>
        } 
        </TableBody>
      </Table>
      {/* </Paper> */}
      </TableContainer> 
        </Container>
    </div>
  )
}
