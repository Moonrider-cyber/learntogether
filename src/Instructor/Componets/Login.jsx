import React from "react";
import "./Logincom.scss";
const loginimg = require("../asset/bg_1.jpg");

function Login() {
  
  return (
    <>
      <div class="i-login-container">
        
        <div class="bg order-1 order-md-2">
          {/* <img src={loginimg} /> */}
          </div>
        <div class="contents order-2 order-md-1">

          <div class="container i-login-form">
            <div class="row align-items-center justify-content-center i-login-content">
              <div class="col-md-7">
                <div class="mb-4">
                  <h3>Sign In</h3>
                </div>
                <form>
                  <div class="form-group first">
                    <label for="username">Username</label>
                    <input type="text" class="form-control" id="username"/>

                  </div>
                  <div class="form-group last mb-3">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password"/>

                  </div>

                  {/* <div class="d-flex mb-5 align-items-center">
                    <label class="control control--checkbox mb-0"><span class="caption">Remember me</span>
                      <input type="checkbox" checked="checked"/>
                      <div class="control__indicator"></div>
                    </label>
                    <span class="ml-auto"><a href="#" class="forgot-pass">Forgot Password</a></span> 
                  </div> */}

                  <button class="btn btn-block btn-primary">Login</button>

                  {/* <span class="d-block text-center my-4 text-muted">&mdash; or &mdash;</span>

                  <div class="social-login">
                    <a href="#" class="facebook btn d-flex justify-content-center align-items-center">
                      <span class="icon-facebook mr-3"></span> Login with Facebook
                    </a>
                    <a href="#" class="twitter btn d-flex justify-content-center align-items-center">
                      <span class="icon-twitter mr-3"></span> Login with  Twitter
                    </a>
                    <a href="#" class="google btn d-flex justify-content-center align-items-center">
                      <span class="icon-google mr-3"></span> Login with  Google
                    </a>
                  </div> */}
                </form>
              </div>
            </div>
          </div>
        </div>


      </div>
    
    

    </>
  );
}

export default Login;
