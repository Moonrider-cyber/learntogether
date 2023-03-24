import React from "react";
import "./index.css";
import Homepage from "./Pages/Homepage";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import toast,{Toaster} from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {useSelector} from "react-redux";
import { loadUser } from "./redux/actions/user";
import {ProtectedRoute} from "protected-route-react"
import AdminApp from "./Admin/AdminApp";
import InstructorApp from "./Instructor/InstructorApp";
import { Profile } from "./Pages/Profile";
import Loader from "./Componets/layout/Loader/Loader";
import EditProfile from "./Componets/ProfileCom/EditProfile";
import Teachwithus from "./Pages/Techwithus";
import { Cart } from "./Pages/Cart";
import  {Singlecourse}  from "./Pages/Singlecourse";

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
        {/* {loading ? <Loader/> : null} */}
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
          <Route path="/teachwithus" element={<Teachwithus isAuthenticated={isAuthenticated} user={user} />}></Route>
          <Route path="/admin/*" element={<AdminApp/>}></Route>
          <Route path="/instructor/*" element={<InstructorApp/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/course" element={<Singlecourse/>}></Route>
        </Routes>
        <Toaster />
      </BrowserRouter>

    </>
  );
}

export default App;
