import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
// import Box from '@mui/material/Box';

const BtnLoader = () => {

  return (
    // <Box sx={{ width:"100vw",display: 'flex',position:"absolute",justifyContent:"center",alignItems:"center",height:"100vh",zIndex:999,backgroundColor:"rgb(255 255 255 / 38%)" }}>
      <CircularProgress />
    // </Box>
  );
};

export default BtnLoader;

