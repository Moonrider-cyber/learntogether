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
import {ProtectedRoute} from "./Componets/ProtectedRoute/ProtectedRoute"
import AdminApp from "./Admin/AdminApp";
import InstructorApp from "./Instructor/InstructorApp";
import { Profile } from "./Pages/Profile";
import Loader from "./Componets/layout/Loader/Loader";
import Teachwithus from "./Pages/Techwithus";
import { Cart } from "./Pages/Cart";
import  {Singlecourse}  from "./Pages/Singlecourse";
import { getAllCourses } from "./redux/actions/courses";

function App() {

  const { isAuthenticated = true,message,error,loading} = useSelector((state) => state.user);
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
    dispatch(getAllCourses())  

  }, [dispatch]);
  
  return (
    <>
      <BrowserRouter>
        {/* {loading ? <Loader/> : null} */}
        {courseLoading ? <Loader/> : null}
        {adminLoading ? <Loader/> : null}


        <Routes>
          <Route path="/" element={<Homepage />}></Route>
        
          <Route element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect={"/"} />}>  
            <Route path="/login" element={<Login />}></Route>      
            <Route path="/signup" element={<Signup />}></Route>      
          </Route>   

          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} redirect={"/"} />}>  
            <Route path="/profile" element={<Profile />}></Route>        
          </Route>   
          
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/course/:id" element={<Singlecourse/>}></Route>
          <Route path="/teachwithus" element={<Teachwithus />}></Route>
          

           {/* Admin Routes */}
          <Route path="/admin/*" element={<AdminApp/>}></Route>
          {/* Instructor Routes */}
          <Route path="/instructor/*" element={<InstructorApp/>}></Route>
        
        
        </Routes>
        <Toaster />
      </BrowserRouter>

    </>
  );
}

export default App;
