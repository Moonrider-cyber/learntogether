import React from "react";
import "./Logincom.scss";
import { Link } from "react-router-dom";
const loginimg = require("./Asset/loginbg.png");
const { login } = require("../../redux/actions/user");
const { useDispatch } = require("react-redux");
const { useState } = require("react");

function Logincom() {
  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const disatch = useDispatch();

  function fillEmailInput(e) {
    setEmail(e.target.value);
  }
  function FillPasswordInput(e) {
    setPassword(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("email", email);
    console.log("password", password);

    disatch(login(email, password));
  }

  return (
    <div>
     
      <div className="section">
        <div className="container">
          <form className="form" onSubmit={submitHandler} method="post" >
            <div className="right-side">
              <div className="forms">
                <h1 className="forms-heading">Login</h1>
                <div className="form-inputs">
                  <input
                    type="email"
                    placeholder="Email"
                    autoComplete="chrome-off"
                    name="email"
                    value={ email ? email : ""}
                    onChange={fillEmailInput}
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
                    onChange={FillPasswordInput}
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
            <div className="left-side">
              <div className="content">
                <h1>BUSILEARN</h1>
                <h5>Learn with confidence</h5>
                <img src={loginimg} width="300" />
              </div>
              <div className="social">
                <ul className="social-icons">
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
                <ul className="terms">
                  <li>
                    <a href="#">Terms</a>
                  </li>
                  <li>
                    <span className="dots"></span>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Logincom;
