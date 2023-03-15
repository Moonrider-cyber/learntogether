import {
  Avatar,
  Button,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ProfileCard } from "./ProfileCard";


const Profile_head = () => {
  const { user } = useSelector((state) => state.user);

  // Tab
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Container sx={{ mt: 1, pt:15 }}>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", fontWeight: "bold" }}
        >
          Profile
        </Typography>
        <Box gap={2} mt={6}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Avatar sx={{ width: 150, height: 150 }} src={user.avatar.url} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              sx={{ textAlign: "center", fontWeight: "bold", mt: 3 }}
            >
              {user.name}
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "center", mt: 1 }}>
              {user.email}
            </Typography>
            <Link to={"/profile/editprofile"} state={user._id}><Button variant="outlined" sx={{ width: 150, mt: 2 }}>
              Edit Profile
            </Button></Link>
          </Box>
          <Box sx={{ width: "100%", py: 4 }}>
            <Tabs value={value} onChange={handleChange} centered>
              <Tab label="My courses" />
              {/* <Tab label="Item Two" />
              <Tab label="Item Three" /> */}
            </Tabs>
            </Box>
            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
              <Grid item xs={12}>
              <Grid container justifyContent="center" gap={4}>
                <ProfileCard/>
                <ProfileCard/>
                <ProfileCard/>
              </Grid>
              </Grid>
            </Grid>

        </Box>
      </Container>
    </>
  );
};

export default Profile_head;
