import React from 'react'
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Payment = () => {

  const { mypayments } = useSelector((state) => state.Instructor);

  const styles = {
    tableheading:{
      fontWeight:600,
        fontSize:"15px"
    } 
  }

return (
    <div className="home-content">
      <Box sx={{paddingX:5,paddingTop:5}}>
      <Box sx={{ width: '100%' }}>
      <Typography variant='h4' sx={{position:"absolute",fontWeight:"bold",pt:1,pl:1}}>Payments</Typography>
        <Box sx={{display:"flex",justifyContent:"right"}}>
        {/* <Button onClick={RefreshPageBtn} sx={{backgroundColor:"#008cff",color:"white",mx:1}}><RefreshIcon/></Button> */}
        {/* <Link to={"/admin/dashboard/category/addcategory"}><Button variant="contained" sx={{mY:5}} >Add category</Button></Link> */}
        </Box>

      <Paper sx={{ width: '100%', mt: 9 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
          <TableRow>
            <TableCell align="center" style={styles.tableheading}>Learner Name</TableCell>
            <TableCell align="center" style={styles.tableheading}>Instructor</TableCell>
            <TableCell align="center" style={styles.tableheading}>paidAmount</TableCell>
            <TableCell align="center" style={styles.tableheading}>Purchase Courses</TableCell>
            <TableCell align="center" style={styles.tableheading}>CreateAt</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          
        {
            mypayments ?
          // category.length > 0 ?
          mypayments.map((row,index) => (
            <TableRow
            key={index}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            
            >

              <TableCell component="th" scope="row" align="center">
                {row.payments.user[0].username}
              </TableCell>
              <TableCell align="center">
              {row.course.createBy[0].name}
              </TableCell>
              <TableCell align="center">${row.course.price}</TableCell>
              <TableCell align="center" style={{width:300}}>
            
              <Link to={{pathname:`/instructor/dashboard/payments/courses` }} state={row.course}>
                <Button variant='outlined'>Purchase Courses</Button></Link>
              </TableCell>
              
              <TableCell align="center">{row.payments.createAt.substring(0, 10)}</TableCell>

              {/* <TableCell align="center">{row.courses[0].courseid}</TableCell> */}
              {/* <TableCell align="center">{row.course}</TableCell> */}
              </TableRow> 
          ))
         
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

