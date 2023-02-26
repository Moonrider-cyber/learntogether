import React from "react";
import "./Signupcom.scss";
import { Link } from "react-router-dom";
const loginimg = require("../Login/Asset/loginbg.png");

function Signupcom() {
  return (
    <div>
      {/* <div className="alertbox">
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Alert!</strong> Email Already Exist
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div> */}
      <div className="section">
        <div className="container">
          <div className="form">
            <div className="left-side">
              <div className="content">
                <h1>BUSILEARN</h1>
                <h5>Learn with confidence</h5>
                <img src={loginimg} width="300" />
              </div>
              <div className="social">
                <ul className="social-icons">
                  <li>
                    <Link to="/">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </li>
                </ul>
                <ul className="terms">
                  <li>
                    <Link to="/">Terms</Link>
                  </li>
                  <li>
                    <span className="dots"></span>
                  </li>
                  <li>
                    <Link to="/">Services</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right-side">
              <div className="forms">
                <h1 className="forms-heading">Sign Up</h1>
                <div className="form-inputs">
                  <i className="fa fa-user"></i>
                  <input type="text" placeholder="User name" required />
                </div>
                <div className="form-inputs">
                  <input
                    type="email"
                    placeholder="Email"
                    autoComplete="chrome-off"
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
                    required
                  />
                  <i className="fa fa-eye" id="password_eye"></i>
                </div>
                
                <div className="form-inputs file-inputs">
                <input 
                  className="form-control file-input" 
                  type="file" 
                  id="formFile"
                  accept="image/jpg, image/png, image/jpeg"
                  required
                />
                </div>
                
                <div className="sign-button">
                  <button type="submit">Sign up</button>
                </div>

                <div className="form-acc">
                  <p>Already have account?</p>
                  <Link to="/login">Login</Link>
                </div>
                {/* <div className="othersign">
                  <button>Continue with Google</button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signupcom;
