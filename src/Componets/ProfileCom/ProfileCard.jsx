import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
const img = require('../Courselist/asset/musk.jpg');
import {Typography} from '@mui/material';

export const ProfileCard = () => {
  return (
    <>
        <Card sx={{ maxWidth: 345 }} elevation={3} >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={img}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Musk
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
    </>
  )
}
