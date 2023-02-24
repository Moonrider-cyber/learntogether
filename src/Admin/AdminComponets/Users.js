import * as React from 'react';
// import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Header from './Header';


// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'flex-end',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));


export default function User() {

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* <DrawerHeader /> */}
        <Typography course>
            Users Users 
            Users Users 
            Users Users 
            Users Users 
            Users Users 
            Users Users 
            Users Users 
            Users Users 
            Users Users 
            Users Users 
            Users Users 
            Users Users 
            Users Users 
            Users Users 
            Users Users 
            Users Users 
            Users Users 
            Users Users 
            Users Users 
            Users Users 
            Users Users 
            Users Users 
            Users Users 
            Users Users 
            Users Users 
            Users Users 
            Users Users 
            Users Users 
            Users Users 
            Users Users 
        </Typography>
        
      </Box>
    </Box>
  );
}