import React from "react";
import { addLecture } from "../../../redux/actions/admin";
import { useLocation } from 'react-router-dom'
const { useDispatch } = require("react-redux");
const { useState } = require("react");

function AddLecture() {
    
    const {state} = useLocation();
    let id = state;
  const [Title, setTitle] = useState();
  const [desc, setdesc] = useState();
  const [password, setPassword] = useState();
  const [ImgPrev, setImgPrev] = useState();
  const [Img , setImg] = useState();

  function changevideoHandler(e){
    
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImgPrev(reader.result);
      setImg(file);
    }
  } 
    const dispatch = useDispatch();

  function addUserHandler(e){
    e.preventDefault();
    
    const myForm = new FormData();

    myForm.append("title", Title);
    myForm.append("desc", desc);
    myForm.append("file", Img);
    
    dispatch(addLecture(myForm,id));
  }

  return (
    <div> 
      <div className="section">
        <div className="container">
          <form className="form" onSubmit={addUserHandler} >
            
            <div className="right-side">
              <div className="forms">
                <h1 className="forms-heading">ADD LECTURE</h1>
                <div className="form-inputs">
                <i className="fa-solid fa-heading"></i>
                  <input type="text" placeholder="Lesson Title"
                    name="title" 
                    value={Title ? Title : ""}
                    onChange={(e) => setTitle(e.target.value)}
                  required />
                </div>
                <div className="form-inputs">
                  <input
                    type="desc"
                    name="desc"
                    placeholder="Enter Description"
                    value={desc ? desc : ""}
                    onChange={(e) => setdesc(e.target.value)}
                    required
                  />
                  <i className="fa-solid fa-pen-to-square"></i>
                </div>
                
                
                <div className="form-inputs file-inputs">
                <input 
                  className="form-control file-input" 
                  type="file" 
                  name="file"
                  id="formFile"
                  accept="video/mp4"
                  onChange={changevideoHandler}
                  required
                />
                </div>
                
                <div className="sign-button">
                  <button type="submit">ADD LECTURE</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddLecture;
