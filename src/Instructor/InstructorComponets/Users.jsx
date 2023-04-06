import React from 'react'
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch} from 'react-redux';
import { Button, Chip, IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const Users = (props) => {


  let users = props.users;
  const dispatch = useDispatch();



  return (
    <div className="home-content">
      {/* <Loader/> */}
      <Box sx={{paddingX:5,paddingTop:5}}>
      <Box sx={{ width: '100%' }}>
        <Typography variant='h4' sx={{position:"absolute",fontWeight:"bold",pt:1,pl:1}}>Learner</Typography>
        <Box sx={{display:"flex",justifyContent:"right"}}>
        </Box>



      <Paper sx={{ width: '100%', mt: 10 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Profile photo</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          

          {
            users ?
          users.length > 0 ?
          users.map((row,index) => (
            <TableRow
              key={index}
            >
              <TableCell component="th" scope="row" align="center">
                {row.avatar ? <img src={row.avatar.url} alt="avatar" style={{width:50,height:50,borderRadius:50}}/> : null }
              </TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow> 
            
          )) 
          : null 
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

