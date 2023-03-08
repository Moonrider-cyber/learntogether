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
import { getAllUsers,deleteUser, activeDeactiveUser } from '../../redux/actions/admin';
import { useSelector } from 'react-redux';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Loader from '../../Componets/layout/Loader/Loader';

export const Users = (props) => {


  let users = props.users;
  const dispatch = useDispatch();

  const { message,admin } = useSelector((state) => state.admin);

  function deleteBtnHandler(e){
    dispatch(deleteUser(e.target.attributes.dataid.value));
  }
  function adBtnHandler(e){
    dispatch(activeDeactiveUser(e.target.attributes.dataid.value));
  }

  useEffect(() => {
    if(message){
      dispatch(getAllUsers());
    }
  }, [message]);
  

  return (
    <div className="home-content">
      {/* <Loader/> */}
      <Box sx={{paddingX:5,paddingTop:5}}>
      <Box sx={{ width: '100%' }}>
        <Typography variant='h4' sx={{position:"absolute",fontWeight:"bold",pt:1,pl:1}}>Users</Typography>
        <Box sx={{display:"flex",justifyContent:"right"}}>
        {/* <Button onClick={() => <Navigate to={"/admin/dashboard/users"}/>} sx={{backgroundColor:"#008cff",color:"white",mx:1}}><RefreshIcon/></Button> */}
        <Link to={"/admin/dashboard/users/adduser"}><Button variant="contained" sx={{mY:5}}>Add User</Button></Link>
        </Box>

        {admin ? admin.role === "super-admin" ?  

      <Paper sx={{ width: '100%', mt: 4 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Profile photo</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">CreateAt</TableCell>
            <TableCell align="center">Action</TableCell>
            <TableCell align="center">Enable/Disable</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          

          {
            users ?
          users.length > 0 ?
          users.map((row,index) => (
            users[index].role === "user" ?
            <TableRow
              key={index}
            >
              <TableCell component="th" scope="row">
                {row.avatar ? <img src={row.avatar.url} alt="avatar" style={{width:50,height:50,borderRadius:50}}/> : null }
              </TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.createAt}</TableCell>
              <TableCell align="center"><Button dataid={row._id} onClick={deleteBtnHandler}> Delete </Button></TableCell>
              <TableCell align="center"><Button dataid={row._id} onClick={adBtnHandler}> {row.active === true ? "Disable" : "Enable"} </Button></TableCell>
            </TableRow>
            : null
          ))
          : null 
          : null
        }
        </TableBody>
      </Table>
      </Paper>
      : admin.role === "sub-admin" ? 
      
      <Paper sx={{ width: '100%', mt: 4 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Profile photo</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">CreateAt</TableCell>
            <TableCell align="center">Enable/Disable</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          

          {
            users ?
          users.length > 0 ?
          users.map((row,index) => (
            users[index].role === "user" ?
            <TableRow
              key={index}
            >
              <TableCell component="th" scope="row">
                {row.avatar ? <img src={row.avatar.url} alt="avatar" style={{width:50,height:50,borderRadius:50}}/> : null }
              </TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.createAt}</TableCell>
              <TableCell align="center"><Button dataid={row._id} onClick={adBtnHandler}> {row.active === true ? "Disable" : "Enable"} </Button></TableCell>
            </TableRow>
            : null
          ))
          : null 
          : null
        }
        </TableBody>
      </Table>
      </Paper>
      : null : null}
    </Box>
        </Box>
    </div>
  )
}

