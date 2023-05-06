import React from 'react'
import { useLocation } from 'react-router-dom'
import { Showreview } from '../../../Componets/SingleCourse/Reviews';
import { Box, IconButton, Typography } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useDispatch } from 'react-redux';
import { getAllReviewAdmin } from '../../../redux/actions/courses';

export const AllReviews = () => {
    const {state} = useLocation();
    const dispatch = useDispatch();

    return (
    <>
      <Box sx={{p:10}}>

      <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",mb:5}}>
      <Typography variant='h3' sx={{ml:5}}>All Reviews
      </Typography>
      {/* <Rating  value={state.rate} readOnly sx={{pl:5,fontSize:40}} /> */}
      <IconButton sx={{mr:5}} onClick={()=> dispatch(getAllReviewAdmin(state))}><RefreshIcon/></IconButton>
      </Box>
      {/* <Box sx={{ml:4.5}}>
        
      </Box> */}
      <Showreview singlecourse={true} hascourseid={state.id} />
      </Box>
    </>
  )
}
