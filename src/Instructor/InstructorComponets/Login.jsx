import React from "react";
import "./Logincom.scss";
import TextField from "@mui/material/TextField";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Instructorlogin } from "../../redux/actions/instructor";

function Login() {
  const disatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    disatch(Instructorlogin(data.get('email'),data.get('password')));
  };

  return (
    <>
      <div className="i-login-container">
        <div className="bg order-1 order-md-2"></div>
        <div className="contents order-2 order-md-1">
          <div className="container i-login-form">
            <div className="row align-items-center justify-content-center i-login-content">
              <div className="col-md-7">
                <div className="mb-4">
                  <h3>INSTRUCTOR LOGIN</h3>
                </div>
                <Box component="form" noValidate onSubmit={handleSubmit}>
                  <div className="form-group first">
                    <TextField
                      id="email"
                      name="email"
                      label="Enter Your Email"
                      variant="standard"
                      type={"email"}
                      fullWidth
                    />
                  </div>
                  <div
                    className="form-group last mb-3"
                    style={{ paddingTop: "15px" }}
                  >
                    <TextField
                      id="password"
                      name="password"
                      label="Enter Your Password"
                      variant="standard"
                      type={"password"}
                      fullWidth
                    />
                  </div>

                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    fullWidth
                    sx={{ mt: 2 }}
                  >
                    Login
                  </Button>
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    Don't have an account?{" "}
                    <Link to={"/instructor/signup"}>Sign Up</Link>
                  </Typography>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
