import React from "react";
import { addWithRole } from "../../../redux/actions/admin";
const { useDispatch } = require("react-redux");
const { useState } = require("react");

function AddInstructor() {

  const [Name, setName] = useState();
  const [Email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [Img , setImg] = useState();

  function changeimgHandler(e){
    
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImg(file);
    }
  } 
    const dispatch = useDispatch();

  function addUserHandler(e){
    e.preventDefault();
    
    const myForm = new FormData();

    myForm.append("name", Name);
    myForm.append("email", Email);
    myForm.append("password", password);
    myForm.append("avatar", Img);
    myForm.append("role", "instructor");

    dispatch(addWithRole(myForm));
  }

  return (
    <div> 
      <div className="section">
        <div className="container">
          <form className="form" onSubmit={addUserHandler} >
            
            <div className="right-side">
              <div className="forms">
                <h1 className="forms-heading">ADD INSTRUCTOR</h1>
                <div className="form-inputs">
                  <i className="fa fa-user"></i>
                  <input type="text" placeholder="Instructor name"
                    name="name" 
                    value={Name ? Name : ""}
                    onChange={(e) => setName(e.target.value)}
                  required />
                </div>
                <div className="form-inputs">
                  <input
                    type="email"
                    name="email"
                    placeholder="Instructor Email"
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
                    placeholder="Instructor Password"
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
                  <button type="submit">ADD INSTRUCTOR</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddInstructor;
