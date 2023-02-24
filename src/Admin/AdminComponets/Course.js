import * as React from 'react';
// import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';


export default function Course() {

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* <DrawerHeader /> */}
        <Typography course>
          Course Course Course Course Course Course Course Course Course Course Course Course 
          Course Course Course Course Course Course Course Course Course Course Course Course 
          Course Course Course Course Course Course Course Course Course Course Course Course 
          Course Course Course Course Course Course Course Course Course Course Course Course 
        </Typography>
        
      </Box>
    </Box>
  );
}