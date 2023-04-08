import React, { useEffect } from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { createreview } from '../../redux/actions/user';
import { useParams } from 'react-router-dom';
import { getAllReview } from '../../redux/actions/courses';


export const  Reviews = ({lecturespage}) => {

  // let rateBox = Array.from(document.querySelectorAll(".rate-box"));
  // let globalValue = document.querySelector(".global-value");
  // let two = document.querySelector(".two");
  // let totalReviews = document.querySelector(".total-reviews");
  // let reviews = {
  //   5: 0,
  //   4: 2,
  //   3: 1,
  //   2: 0,
  //   1: 2,
  // };
  // updateValues();
  
  // function updateValues() {
  //   rateBox.forEach((box) => {
  //     let valueBox = rateBox[rateBox.indexOf(box)].querySelector(".value");
  //     let countBox = rateBox[rateBox.indexOf(box)].querySelector(".count");
  //     let progress = rateBox[rateBox.indexOf(box)].querySelector(".progress");
  //     console.log(typeof reviews[valueBox.innerHTML]);
  //     countBox.innerHTML = nFormat(reviews[valueBox.innerHTML]);
  
  //     let progressValue = Math.round(
  //       (reviews[valueBox.innerHTML] / getTotal(reviews)) * 100
  //     );
  //     progress.style.width = `${progressValue}%`;
  //   });
  //   totalReviews.innerHTML = getTotal(reviews);
  //   finalRating();
  // }
  // function getTotal(reviews) {
  //   return Object.values(reviews).reduce((a, b) => a + b);
  // }
  
  // document.querySelectorAll(".value").forEach((element) => {
  //   element.addEventListener("click", () => {
  //     let target = element.innerHTML;
  //     reviews[target] += 1;
  //     updateValues();
  //   });
  // });
  
  // function finalRating() {
  //   let final = Object.entries(reviews)
  //     .map((val) => val[0] * val[1])
  //     .reduce((a, b) => a + b);
  //     // console.log(typeof parseFloat(final / getTotal(reviews)).toFixed(1));
  //   let ratingValue = nFormat(parseFloat(final / getTotal(reviews)).toFixed(1));
  //   globalValue.innerHTML = ratingValue;
  //   two.style.background = `linear-gradient(to right, #66bb6a ${
  //     (ratingValue / 5) * 100
  //   }%, transparent 0%)`;
  // }
  
  // function nFormat(number) {
  //   if (number >= 1000 && number < 1000000) {
  //     return `${number.toString().slice(0, -3)}k`;
  //   } else if (number >= 1000000 && number < 1000000000) {
  //     return `${number.toString().slice(0, -6)}m`;
  //   } else if (number >= 1000000000) {
  //     return `${number.toString().slice(0, -9)}md`;
  //   } else if (number === "NaN") {
  //     return `0.0`;
  //   } else {
  //     return number;
  //   }
  // }
  const courseid = useParams();

  const [value, setValue] = React.useState(0);
  const [reviewtext, setReviewtext] = React.useState("")
  const dispatch = useDispatch();

  function reviewbtnhandler(){
    if(value !== 0 && reviewtext !== " "){
      console.log("created")
      dispatch(createreview(value,reviewtext,courseid))
    }
  }


  return (
    <>
    {lecturespage ? 
         <div className="container course_review_box" style={{marginTop:30}}>
          <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              style={{fontSize:"50px",marginLeft:"25%",marginBottom:30}}
          />
            <TextField
          id="outlined-multiline-static"
          label="Enter your review"
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

export const Showreview = () => {
  
  const dispatch = useDispatch();
  const courseid = useParams();
  
  useEffect(() => {
    dispatch(getAllReview(courseid))
  }, [dispatch])
  
  const {reviews} = useSelector(state => state.courses)
  console.log(reviews)
  return (
    <>
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
    </>
  );
}