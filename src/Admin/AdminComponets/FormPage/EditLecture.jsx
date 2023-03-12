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


export const EditLecture = () => {
  const {state} = useLocation();
  
  const dispatch = useDispatch();
  const { Lectures } = useSelector((state) => state.courses);

  useEffect(() => {
      dispatch(getAllLectures(state));
  }, [dispatch]);

  return (
    <>
        <Box>
            <Typography variant="h3" sx={{ width:"100%",textAlign:"center",fontWeight:"bold",mt: 2, mb: 1, py: 3 }}>Edit Lecture</Typography>
        </Box>
        {/* <Container>
            <Box sx={{ width: '100%' }}>
            <Grid container spacing={2} columns={12} gap={1}>
              <Grid xs={6}>
                <Paper>a</Paper>
              </Grid>
              <Grid xs={5}>
                <Paper sx={{display:"flex",justifyContent:"center",flexDirection:"column",p:5,alignItems:"center"}}>
                  <Typography sx={{textAlign:"center",fontSize:25,fontWeight:"bold"}}>Add Lecture</Typography>
                  <TextField id="outlined-basic" label="Title" variant="outlined" sx={{my:1,width:"70%"}} />
                  <TextField id="outlined-basic" label="Description" variant="outlined" sx={{my:1,width:"70%"}} />
                  <div className="form-inputs file-inputs" style={{width:"70%"}}>
                                    <input 
                                      className="form-control file-input" 
                                      type="file" 
                                      name="file"
                                      id="formFile"
                                      accept="image/jpg, image/png, image/jpeg"
                                      onChange={changeimgHandler}
                                      required
                                      style={{width:"100%!important"}}
                                    />
                  </div>
                  <Button variant='contained' size="small" sx={{my:1,width:"70%"}}>Add Lecture</Button>
                </Paper>
              </Grid>
            </Grid> 
            </Box>
        </Container> */}

        <Container>
        <Box sx={{display:"flex",justifyContent:"right"}}>
        <Link to={"/admin/dashboard/courses/addlectures"}><Button variant="contained" sx={{mY:5}} >Add Lectures</Button></Link>
        </Box>
      <TableContainer component={Paper} sx={{ mt: 4 }}>
      <Table sx={{ minWidth: 650,overflowX:"scroll" }}>
        <TableHead sx={{overflowX:"scroll" }}>
          <TableRow>
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
              <TableCell component="th" scope="row" align="left">
                {row.title}
              </TableCell>
              {/* <TableCell align="right">a</TableCell> */}
              {/* <TableCell align="center"><Button dataid={row._id} onClick={adBtnHandler}> {row.active === true ? "Disable" : "Enable"} </Button></TableCell> */}
              {/* <TableCell align="center"><IconButton aria-label="delete" onClick={()=> dispatch(deleteCourse(row._id))}> <DeleteIcon/> </IconButton></TableCell> */}
              {/* <TableCell align="center"><Button variant='outlined' >Edit Lecture</Button></TableCell> */}
              <TableCell align="right">
                <Stack flexDirection={'row'} justifyContent={"right"} >
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
                        {/* <Button sx={{ p: 1 }} onClick={()=> dispatch(activeDeactiveCourse(row._id))}>{row.active === true ? "Disable" : "Enable"}</Button> */}
                        <Button sx={{ p: 1 }} onClick={()=> dispatch(deleteLectures(row._id))}>Delete</Button>
                      </Stack>
                    </Popover>
                  </div>
                )}
              </PopupState> 
              </Stack>
              </TableCell>
            </TableRow> 
           ))
        : <Typography>No Lectures Found</Typography>
        } 
        </TableBody>
      </Table>
      {/* </Paper> */}
      </TableContainer> 
        </Container>
    </>
  )
}
