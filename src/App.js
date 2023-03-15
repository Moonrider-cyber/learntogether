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
import {ProtectedRoute} from "protected-route-react"
import AdminApp from "./Admin/AdminApp";
import { Profile } from "./Pages/Profile/Profile";
import Loader from "./Componets/layout/Loader/Loader";
import EditProfile from "./Componets/ProfileCom/EditProfile";

function App() {

  const { isAuthenticated = true,user,message,error,loading} = useSelector((state) => state.user);
  const { adminLoading } = useSelector((state) => state.admin);
  const { courseLoading } = useSelector((state) => state.courses);
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
        {loading ? <Loader/> : null}
        {courseLoading ? <Loader/> : null}
        {adminLoading ? <Loader/> : null}
        <Routes>
          <Route path="/" element={<Homepage isAuthenticated={isAuthenticated} user={user} />}></Route>
          <Route path="/signup" element={
            <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/">
              <Signup />
          </ProtectedRoute>
          
          }></Route>
          <Route path="/login" element={
            <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/">
            <Login />  
          </ProtectedRoute>
          }></Route>
          <Route path="/profile" element={
            <ProtectedRoute isAuthenticated={isAuthenticated} redirect="/">
            <Profile user={user} />  
          </ProtectedRoute>
          }></Route>
          <Route path="/profile/editprofile" element={
            <ProtectedRoute isAuthenticated={isAuthenticated} redirect="/">
            <EditProfile />  
          </ProtectedRoute>
          }></Route>
          <Route path="/admin/*" element={<AdminApp/>}></Route>
        </Routes>
        <Toaster />
      </BrowserRouter>

    </>
  );
}

export default App;
