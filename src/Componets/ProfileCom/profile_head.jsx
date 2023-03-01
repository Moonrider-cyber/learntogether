import { Avatar, Container, ListItem, ListItemText, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import { useSelector } from 'react-redux';

const profile_head = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <>
    <Container sx={{mt:10}}>
      <Typography variant='h3' sx={{textAlign:"center",fontWeight:"bold"}}>Profile</Typography>
      <Box  display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2}  mt={7} >
      <Box gridColumn="1" sx={{display:"flex",justifyContent:"center"}}>
        <Avatar sx={{width: 200, height: 200}} src={user.avatar.url} />
      </Box>
      <Box gridColumn="2">
      <ListItem alignItems="flex-start">
      <ListItemText
          primary={user.name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {user.email}
              </Typography>
              
            </React.Fragment>
          }
        />
      </ListItem>

      </Box>
      </Box>
    </Container>
    </>
  );
}

export default profile_head