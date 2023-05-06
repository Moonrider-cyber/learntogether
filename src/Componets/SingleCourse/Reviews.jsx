import React, { useEffect } from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Avatar, Button, Grid, IconButton, Paper, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { createreview } from '../../redux/actions/user';
import { useParams } from 'react-router-dom';
import { getAllReview, getAllReviewAdmin } from '../../redux/actions/courses';
import { toast } from 'react-hot-toast';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteReview } from '../../redux/actions/admin';

export const  Reviews = ({lecturespage}) => {

  const courseid = useParams();

  const [value, setValue] = React.useState(0);
  const [reviewtext, setReviewtext] = React.useState("")
  const dispatch = useDispatch();

  function reviewbtnhandler(){
    if(value !== 0 && reviewtext !== " "){
      dispatch(createreview(value,reviewtext,courseid))
    }
    else{
      toast.error("Please fill all the fields")
    }
  }

  return (
    <>
    {lecturespage ? 
         <div className="container course_review_box" style={{marginTop:10}}>
          <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              style={{fontSize:"50px",width:"100%",marginLeft:"32%",paddingBottom:29}}
          />
            <TextField
          id="outlined-multiline-static"
          label="Write your review"
          multiline
          value={reviewtext}
          onChange={(e)=>setReviewtext(e.target.value)} 
          rows={3}
          fullWidth

        />
        <Button variant="contained" 
        onClick={reviewbtnhandler}
        style={{marginTop:20,padding:10,width:"100%",backgroundColor:"black",color:"white",borderRadius:10}}>Write review</Button>

              
        </div>
    :
     
         <div className="container course_review_box">
         
         <div className="global">
        <span className="global-value">0.0</span>
        <div className="rating-icons">
          <span className="one"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>
          <span className="two"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>
        </div>
        <span className="total-reviews">0</span>
      </div>
      <div className="chart">
        <div className="rate-box">
          <span className="value">5</span>
          <div className="progress-bar">
            <span className="progress"></span>
          </div>
          <span className="count">0</span>
        </div>
        <div className="rate-box">
          <span className="value">4</span>
          <div className="progress-bar"><span className="progress"></span></div>
          <span className="count">0</span>
        </div>
        <div className="rate-box">
          <span className="value">3</span>
          <div className="progress-bar"><span className="progress"></span></div>
          <span className="count">0</span>
        </div>
        <div className="rate-box">
          <span className="value">2</span>
          <div className="progress-bar"><span className="progress"></span></div>
          <span className="count">0</span>
        </div>
        <div className="rate-box">
          <span className="value">1</span>
          <div className="progress-bar"><span className="progress"></span></div>
          <span className="count">0</span>
        </div>
      </div>
      
        </div>
}
    </>
  )
}

export const Showreview = ({singlecourse,hascourseid}) => {
  
  const dispatch = useDispatch();
  
  const courseid = hascourseid ? hascourseid : useParams();

  const {reviews,message} = useSelector(state => state.courses)
  
  useEffect(() => {
    if(hascourseid){

      dispatch(getAllReviewAdmin(courseid))
    }else{
      dispatch(getAllReview(courseid.id))
    }
  }, [dispatch,message])
  
  
  return (
    <>
    {singlecourse ?
    <>
      <div className="container course_review_box" style={{marginTop:20,p:0}}>
        
        <div className="course_review_list" style={{width:"100%"}}>
          {reviews && reviews.length !== 0 ?
          reviews && reviews.map((review,key) => (
            <Paper elevation={2} sx={{p:3,my:2}} key={key}>
              
          <Grid container spacing={2}>
            <Grid item xs={1} style={{paddingTop:20}}>
            <Avatar sx={{ width: 50, height: 50 }} >{review.name.charAt(0)}</Avatar>
              
            </Grid>
            <Grid item xs={10} style={{marginLeft:20}}>
              <Stack spacing={1}>
              <Typography variant="span" sx={{fontSize:15}}>{review.name}</Typography>
              <Rating name="read-only" value={Number(review.rating)} readOnly /> 
              <Typography variant="p">{review.comment}</Typography>
              </Stack>
            </Grid>
            {
              hascourseid &&
              (<IconButton sx={{mb:6,ml:5,fontSize:23}}
                onClick={()=> dispatch(deleteReview(hascourseid,review._id)) }>
                <DeleteIcon  /> 
                </IconButton> 
              )}
          </Grid>
          
            </Paper>
            ))
            :
            <>
              <Typography variant="h6" style={{paddingTop:5}}>No Reviews Yet</Typography>
            </>
}        
        </div>
      </div>
    </>
    :
      <div className="container course_review_box" style={{marginTop:40,marginLeft:20}}>
        
        <div className="course_review_list">
          {reviews && reviews.map((review,key) => (
            <Paper elevation={2} sx={{p:3,my:2}} key={key} >
          <Grid container spacing={2}>
            <Grid item xs={1} style={{paddingTop:20}}>
            <Avatar sx={{ width: 50, height: 50 }} >{review.name}</Avatar>
              
            </Grid>
            <Grid item xs={10} style={{marginLeft:20}}>
              <Stack spacing={1}>
              <Typography variant="span" sx={{fontSize:15}}>{review.name}</Typography>
              <Rating name="read-only" value={review.rating} readOnly /> 
              <Typography variant="p">{review.comment}</Typography>
              </Stack>
            </Grid>
          </Grid>
            </Paper>
            ))}
          
        </div>

      </div>
      }
    </>
  );
}