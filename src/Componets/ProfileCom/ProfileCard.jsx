import React, { useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
const img = require('../Courselist/asset/musk.jpg');
import {Typography} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const ProfileCard = ({course}) => {

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
                  <Typography gutterBottom variant="h5" component="div">
                    {course && course.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {course && course.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
      </Link>
    </>
  )
}
