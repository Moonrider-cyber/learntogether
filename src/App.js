import React from "react";
import "./index.css";
import Homepage from "./Pages/Homepage/Homepage";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import toast,{Toaster} from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {useSelector} from "react-redux";
import { loadUser } from "./redux/actions/user";

function App() {

  const { isAuthenticated,user,message,error } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  // show toast when error or message is updated
  useEffect(() => {
    if(error){
      toast.error(error);
      dispatch({type:'clearError'})
    }
    if(message){
      toast.success(message);
      dispatch({type:'clearMessage'})
    }
  }, [dispatch,error,message]);
  
  // load user when app starts
  useEffect(() => {
    dispatch(loadUser())
  
  }, [dispatch]);
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage isAuthenticated={isAuthenticated} user={user} />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        <Toaster />
      </BrowserRouter>

    </>
  );
}

export default App;
