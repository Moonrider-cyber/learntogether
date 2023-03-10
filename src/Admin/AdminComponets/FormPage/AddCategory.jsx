import React from "react";
const { useDispatch } = require("react-redux");
const { useState } = require("react");
const { addCategory } = require('../../../redux/actions/admin');
const { useSelector } = require("react-redux");

function AddCategory() {

  const [Name, setName] = useState();
  const [Desc, setDesc] = useState();

  const dispatch = useDispatch();
  const { admin } = useSelector((state) => state.admin);

  function addUserHandler(e){
    e.preventDefault();
    dispatch(addCategory(Name, Desc, admin._id));
  }

  return (
    <div> 
      <div className="section">
        <div className="container">
          <form className="form" onSubmit={addUserHandler} >
            
            <div className="right-side">
              <div className="forms">
                <h1 className="forms-heading">ADD CATEGORY</h1>
                <div className="form-inputs">
                  <i className="fa fa-user"></i>
                  <input type="text" placeholder="category name"
                    name="name" 
                    value={Name ? Name : ""}
                    onChange={(e) => setName(e.target.value)}
                  required />
                </div>
                
                <div className="form-inputs">
                  <i className="fa fa-user"></i>
                  <textarea type="text" placeholder="category description"
                    name="description"
                    rows="4" 
                    value={Desc ? Desc : ""}
                    onChange={(e) => setDesc(e.target.value)}
                  required />
                </div>
                
                
                
                <div className="sign-button">
                  <button type="submit">ADD Category</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCategory;
