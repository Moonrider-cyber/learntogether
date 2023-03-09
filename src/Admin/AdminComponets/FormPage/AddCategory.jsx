import React from "react";
const { useDispatch } = require("react-redux");
const { useState } = require("react");

function AddCategory() {

  const [Name, setName] = useState();
  const [Desc, setDesc] = useState();

    const dispatch = useDispatch();

  function addUserHandler(e){
    e.preventDefault();
    
    const myForm = new FormData();

    myForm.append("name", Name);
    myForm.append("description", Desc);
 

    dispatch(createcategory(myForm));
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
