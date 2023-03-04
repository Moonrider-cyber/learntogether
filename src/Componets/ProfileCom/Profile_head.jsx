import {
  Avatar,
  Button,
  Container,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";

const Profile_head = () => {
  const { user } = useSelector((state) => state.user);

  // Tab
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Container sx={{ mt: 1 }}>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", fontWeight: "bold" }}
        >
          Profile
        </Typography>
        <Box gap={2} mt={7}>
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
            <Button variant="outlined" sx={{ width: 150, mt: 2 }}>
              Edit Profile
            </Button>
          </Box>
          <Box sx={{ width: "100%", py: 4 }}>
            <Tabs value={value} onChange={handleChange} centered>
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </Tabs>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Profile_head;
