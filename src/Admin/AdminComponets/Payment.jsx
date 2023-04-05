import React from 'react'
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
export const Payment = (props) => {

  let payments = props.payments ? props.payments : [];
  // const { payments } = useSelector((state) => state.admin);
  
  return (
    <div className="home-content">
      <Box sx={{paddingX:5,paddingTop:5}}>
      <Box sx={{ width: '100%' }}>
      <Typography variant='h4' sx={{position:"absolute",fontWeight:"bold",pt:1,pl:1}}>category</Typography>
        <Box sx={{display:"flex",justifyContent:"right"}}>
        {/* <Button onClick={RefreshPageBtn} sx={{backgroundColor:"#008cff",color:"white",mx:1}}><RefreshIcon/></Button> */}
        {/* <Link to={"/admin/dashboard/category/addcategory"}><Button variant="contained" sx={{mY:5}} >Add category</Button></Link> */}
        </Box>

      <Paper sx={{ width: '100%', mt: 9 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='center'>PaymentID</TableCell>
            <TableCell align="center">Learner Name</TableCell>
            <TableCell align="center">paidAmount</TableCell>
            <TableCell align="center">CreateAt</TableCell>
            <TableCell align="center">Enable/Disable</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          
        {
            payments ?
          // category.length > 0 ?
          payments.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

            >
              <TableCell component="th" scope="row" align="center">
                {row.paymentID}
              </TableCell>
              <TableCell align="center">
              {row.user[0].username}
              </TableCell>
              <TableCell align="center">${row.paidAmount}</TableCell>
              <TableCell align="center">{row.createAt.substring(0, 10)}</TableCell>
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

