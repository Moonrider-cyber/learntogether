import React from "react";
import "./Logincom.scss";
import { Link } from "react-router-dom";
const loginimg = require("./Asset/loginbg.png");

function Logincom() {
  return (
    <div>
      {/* <div class="alertbox">
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Alert!</strong> Email Already Exist
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div> */}
      <div class="section">
        <div class="container">
          <div class="form">
            <div class="right-side">
              <div class="forms">
                <h1 class="forms-heading">Login</h1>
                <div class="form-inputs">
                  <input
                    type="email"
                    placeholder="Email"
                    autocomplete="chrome-off"
                    name="email"
                    required
                  />
                  <i class="fa fa-envelope"></i>
                </div>
                <div class="form-inputs">
                  <input
                    class="password-input"
                    autocomplete="chrome-off"
                    type="password"
                    placeholder="Password"
                    name="pwd"
                    required
                  />
                  <i class="fa fa-eye" id="password_eye"></i>
                </div>

                <div class="login-button">
                  <button>Login</button>
                </div>

                <div class="form-acc">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logincom;
