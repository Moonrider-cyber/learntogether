import React from "react";
import "./Logincom.scss";
import { Link } from "react-router-dom";
const loginimg = require("./Asset/loginbg.png");
const { login } = require("../../redux/actions/user");
const { useDispatch } = require("react-redux");
const { useState } = require("react");

function Logincom() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const disatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    disatch(login(email,password));
  }

  return (
    <div>
     
      <div className="section">
        <div className="container">
          <form className="form" onSubmit={submitHandler}>
            <div className="right-side">
              <div className="forms">
                <h1 className="forms-heading">Login</h1>
                <div className="form-inputs">
                  <input
                    type="email"
                    placeholder="Email"
                    autoComplete="chrome-off"
                    name="email"
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
                    required
                  />
                  <i className="fa fa-eye" id="password_eye"></i>
                </div>

                <div className="login-button">
                  <button>Login</button>
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
