import React from 'react'
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Chip } from '@mui/material';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getAllCategory } from '../../redux/actions/courses';
import { activeDeactivecategory } from '../../redux/actions/admin';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { deletecategory } from '../../redux/actions/admin';
import RefreshIcon from '@mui/icons-material/Refresh';

export const Category = (props) => {

  const dispatch = useDispatch();
  
  let category = props.category ? props.category : [];
  const { admin } = useSelector((state) => state.admin);


  const { message } = useSelector((state) => state.admin);
  
  useEffect(() => {
    if(message){
      dispatch(getAllCategory());
    }
  }, [message]);
  const styles = {
    tableheading:{
      fontWeight:600,
        fontSize:"15px"
    }
  }
  function handlerefresh(){
    dispatch(getAllCategory());
  }
  return (
    <div className="home-content">
      <Box sx={{paddingX:5,paddingTop:5,pb:10}}>
      <Box sx={{ width: '100%' }}>
      <Typography variant='h4' sx={{position:"absolute",fontWeight:"bold",pt:1,pl:1}}>category</Typography>
        <Box sx={{display:"flex",justifyContent:"right"}}>

        <Button onClick={handlerefresh}><RefreshIcon/></Button>
        
        <Link to={"/admin/dashboard/category/addcategory"}><Button variant="contained" sx={{mY:5}} >Add category</Button></Link>
        </Box>

        { admin ? admin.role === "super-admin" ?
      <Paper sx={{ width: '100%', mt: 4 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='center'style={styles.tableheading}>Name</TableCell>
            <TableCell align="center"style={styles.tableheading}>Description</TableCell>
            <TableCell align="center"style={styles.tableheading}>CreateAt</TableCell>
            <TableCell align="center"style={styles.tableheading}>CreateBy</TableCell>
            <TableCell align="center"style={styles.tableheading}>Status</TableCell>
            <TableCell align="center"style={styles.tableheading}>Enable/Disable</TableCell>
            <TableCell align="center"style={styles.tableheading}>Delete</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          

          {
            category ?
          // category.length > 0 ?
          category.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

            >
              <TableCell component="th" scope="row" align="center">
                {row.name}
              </TableCell>
              <TableCell align="center" style={{
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  // width: "300px",
                  padding:'25px',
                  display: "block",
                  overflow: "hidden"
                }}
                >{row.description}</TableCell>
              <TableCell align="center">{row.createAt.substring(0, 10)}</TableCell>
              <TableCell align="center">{row.createBy[0].name} </TableCell>
              <TableCell align="center">{row.active ? (<Chip label="Active" color="primary"  />) : (<Chip label="Deactive" color="success"   />)}</TableCell>
            
              <TableCell align="center"><Button onClick={()=> dispatch(activeDeactivecategory(row._id))}> {row.active === true ? "Disable" : "Enable"} </Button></TableCell>
              <TableCell align="center"><IconButton aria-label="delete" onClick={() => dispatch(deletecategory(row._id)) }> <DeleteIcon/> </IconButton></TableCell>
              </TableRow>
          ))
        // : null
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
          <TableCell align='center'style={styles.tableheading}>Name</TableCell>
            <TableCell align="center"style={styles.tableheading}>Description</TableCell>
            <TableCell align="center"style={styles.tableheading}>CreateAt</TableCell>
            <TableCell align="center"style={styles.tableheading}>CreateBy</TableCell>
            <TableCell align="center"style={styles.tableheading}>Status</TableCell>
            <TableCell align="center"style={styles.tableheading}>Enable/Disable</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          

          {
            category ?
          // category.length > 0 ?
          category.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

            >
              <TableCell component="th" scope="row" align="center">
                {row.name}
              </TableCell>
              <TableCell align="center" style={{
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  // width: "300px",
                  padding:'25px',
                  display: "block",
                  overflow: "hidden"
                }}
                >{row.description}</TableCell>
              <TableCell align="center">{row.createAt}</TableCell>
              <TableCell align="center">{row.createBy[0].name} </TableCell>
              <TableCell align="center">{row.active ? (<Chip label="Active" color="primary"  />) : (<Chip label="Deactive" color="success"   />)}</TableCell>

              <TableCell align="center"><Button onClick={()=> dispatch(activeDeactivecategory(row._id))}> {row.active === true ? "Disable" : "Enable"} </Button></TableCell>
              </TableRow>
          ))
        // : null
        : null
        }
        </TableBody>
      </Table>
      </Paper>
      : null : null }
    </Box>
        </Box>
    </div>
  )
}

