import React from "react";
import "./Logincom.scss";
import { Link } from "react-router-dom";
// const loginimg = require("../asset/loginimg.jpg");
const { login } = require("../../redux/actions/user");
const { useDispatch } = require("react-redux");
const { useState } = require("react");

function Login() {
  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const disatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    disatch(login(email,password));
  } 

  return (
    <div>
     
      <div className="section">
        <div className="container">
          <form className="form" onSubmit={submitHandler} method="post" >
            <div className="right-side">
              <div className="forms">
                <h1 className="forms-heading">Instructor Login</h1>
                <div className="form-inputs">
                  <input
                    type="email"
                    placeholder="Email"
                    autoComplete="chrome-off"
                    name="email"
                    value={ email ? email : ""}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <i className="fa fa-envelope"></i>
                </div>
                <div className="form-inputs">
                  <input
                    className="password-input"
                    autoComplete="chrome-off"
                    type="password"
                    placeholder="Password"
                    name="pwd"
                    onChange={(e) => setPassword(e.target.value)}
                    value={ password ? password : ""}
                    required
                  />
                  <i className="fa fa-eye" id="password_eye"></i>
                </div>

                <div className="login-button">
                  <input type={"submit"} value="login" />
                </div>

                <div className="form-acc">
                  <p>Dont have account?</p>
                  <Link to="/signup">Signup</Link>
                </div>
              </div>
            </div>
            {/* <div className="left-side">
              <div className="content">
                <img src={loginimg} width="300" />
              </div>
              
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
