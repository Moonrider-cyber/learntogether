import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { resetpwd } from '../../redux/actions/user';
import toast from "react-hot-toast";

const theme = createTheme();

export default function Resetpwd() {

    const parms = useParams();
    const Navigate = useNavigate();
    const disatch = useDispatch();
    const handleSubmit = (event) => {
      event.preventDefault();

       const data = new FormData(event.currentTarget);

    if (!data.get("password")) {
      toast.error("Enter Password");
      return;
    }
    if(data.get("password") !== data.get("conform-password")){
      toast.error("Password Not Match");
        return;
    }
    disatch(resetpwd(parms.token,data.get('password')));
  };

  const { message } = useSelector((state) => state.user);
  
  React.useEffect(() => {
    if(message){
      <Navigate to="/login" />
    }
  }, [disatch,message])


  return (
    <ThemeProvider theme={theme}>
      <Box component="main" maxWidth="xs" sx={{ display:"flex",justifyContent:"center",height:"100vh",flexDirection:"column" }}>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Reset Password
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3,width:"30%" }}>
            <Grid container spacing={2} sx={{display:"flex",justifyContent:"center"}}>
            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Enter New Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="conform-password"
                  label="Enter Conform Password"
                  type="password"
                  id="cpassword"
                />
              </Grid>
              
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,width:"70%" }}
              >
              reset password
            </Button>
              </Grid>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}