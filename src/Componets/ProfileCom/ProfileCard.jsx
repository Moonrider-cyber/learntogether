import React, { useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import {Typography} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const img = require('../Courselist/asset/musk.jpg');

export const ProfileCard = ({course}) => {
  
  
  const textoverflow = {
    multilineEllipsis: {
      overflow: 'hidden',
      display: '-webkit-box',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: '2',
      whiteSpace: 'pre-wrap'
    }
  };
  
  return (
    <>
      <Link to={"/profile/lecture/" + course._id}>
        <Card sx={{ maxWidth: 345 }} elevation={3} >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={course && course.poster[0].url}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" style={textoverflow.multilineEllipsis}>
                    {course && course.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" style={textoverflow.multilineEllipsis}>
                    {course && course.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
      </Link>
    </>
  )
}
