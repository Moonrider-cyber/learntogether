import React from "react";
import "./Signupcom.scss";
import { Link } from "react-router-dom";
const loginimg = require("../Login/Asset/loginbg.png");
const { signup } = require("../../redux/actions/user");
const { useDispatch } = require("react-redux");
const { useState } = require("react");

function Signupcom() {

  const [Name, setName] = useState();
  const [Email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [ImgPrev, setImgPrev] = useState();
  const [Img , setImg] = useState();


  function changeimgHandler(e){
    
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImgPrev(reader.result);
      setImg(file);
    }
  }
    const dispatch = useDispatch();

  function submitHandler(e){
    e.preventDefault();
    
    const myForm = new FormData();

    myForm.append("name", Name);
    myForm.append("email", Email);
    myForm.append("password", password);
    myForm.append("avatar", Img);

    dispatch(signup(myForm));
  }

  return (
    <div> 
      <div className="section">
        <div className="container">
          <form className="form" onSubmit={submitHandler} >
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
                  <input type="text" placeholder="User name"
                    name="name" 
                    value={Name ? Name : ""}
                    onChange={(e) => setName(e.target.value)}
                  required />
                </div>
                <div className="form-inputs">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={Email ? Email : ""}
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
                    name="password"
                    placeholder="Password"
                    value={password ? password : ""}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <i className="fa fa-eye" id="password_eye"></i>
                </div>
                
                <div className="form-inputs file-inputs">
                <input 
                  className="form-control file-input" 
                  type="file" 
                  name="file"
                  id="formFile"
                  accept="image/jpg, image/png, image/jpeg"
                  onChange={changeimgHandler}
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
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signupcom;
