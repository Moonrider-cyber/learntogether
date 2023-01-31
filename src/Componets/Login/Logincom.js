import React from "react";
import "./Logincom.scss";
import { Link } from "react-router-dom";


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
                  <i class="fa fa-user"></i>
                  <input
                    type="text"
                    placeholder="User name"
                    name="name"
                    required
                  />
                </div>
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

                <div class="submit-button">
                  <input type="submit" name="signsubmit" />
                </div>

                <div class="form-acc">
                  <p>Dont have account?</p>
                  <Link to="/signup">Signup</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logincom;
