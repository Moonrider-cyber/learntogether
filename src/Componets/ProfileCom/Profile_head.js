import {
  Avatar,
  Button,
  Grid,
  IconButton,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Box, Container } from "@mui/system";
import { useSelector } from "react-redux";
import { ProfileCard } from "./ProfileCard";
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from "react-redux";
import { loadUser, updatename } from "../../redux/actions/user";
import { enrollcourse } from "../../redux/actions/user";

const Profile_head = () => {
  const { user,message } = useSelector((state) => state.user);

  // Tab
  const [value, setValue] = React.useState(0);
  const [Editname, setEditname] = React.useState(false);
  const [name, setname] = React.useState();
  

  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  function editnamehandler(){
    setEditname(true);
  }
  function savebtnhandler(){
    dispatch(updatename(name));
    setEditname(false);
  }

  React.useEffect(() => { 
    if(message){
      dispatch(loadUser());
    }
    dispatch(enrollcourse())
  }, [dispatch,message]);

  const {enrollcourses} = useSelector(state => state.user)
  
  

  return (
    <>
      <Container sx={{ mt: 1, pt:15 }}>
        <Box>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", fontWeight: "bold" }}
        >
          Profile
        </Typography>
        <Box gap={2} mt={6}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <IconButton><Avatar sx={{ width: 150, height: 150 }} src={user.avatar.url} /></IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            { Editname ? 
              <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"Center"}}>
                <TextField id="outlined-basic"
                value={ name ? name : ""}
                onChange={(e)=>setname(e.target.value)}
                placeholder="Enter Name" variant="standard" sx={{mt:3,textAlign:"center"}} />
                <Button variant="outlined" sx={{ width: 150, mt: 2 }} onClick={savebtnhandler}>
              Save Name
            </Button>
              </Box>
              :
            <Typography
              variant="h5"
              sx={{ textAlign: "center", fontWeight: "bold", mt: 3 }}>
           {user.name} <IconButton onClick={editnamehandler}><EditIcon/></IconButton>
            </Typography>

            }
            

            <Typography variant="body1" sx={{ textAlign: "center", mt: 1 }}>
              {user.email}  
            </Typography>
            {/* <Link to={"/profile/editprofile"} state={user._id}>
              <Button variant="outlined" sx={{ width: 150, mt: 2 }}>
              Edit Profile
            </Button></Link> */}
          </Box>
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
                {enrollcourses && enrollcourses.map((course,key) => (
                  course ? <ProfileCard key={key} course={course} /> : null
                  // <ProfileCard key={key} course={course} />
                ))}
                
              </Grid>
              </Grid>
            </Grid>

        </Box>
      </Container>
    </>
  );
};

export default Profile_head;
