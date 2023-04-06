import React from 'react'
// import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import {useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { ProtectedRoute } from './InstructorProtectedRoute/ProtectedRoute';
import { loadInstructor } from '../redux/actions/instructor';


// project imports
import Signup from './InstructorComponets/Signup';
import Login from './InstructorComponets/Login';
import Dashboard from './InstructorComponets/Dashboard';
import AddCourse from './InstructorComponets/FormPage/AddCourse';
import {EditLecture} from './InstructorComponets/FormPage/EditLecture';
import AddLecture from './InstructorComponets/FormPage/AddLecture';

function InstructorApp() {

  const { isinstructor,message,error} = useSelector((state) => state.Instructor);
 
  const dispatch = useDispatch();
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
  
  //  load user when app starts
   useEffect(() => {
    dispatch(loadInstructor())  
  }, [dispatch]);
  
  return (
  <>
    <Routes>
        <Route path="/" element={
        <ProtectedRoute isInstructor={!isinstructor} redirect={"/instructor/dashboard"} >
            <Login />
        </ProtectedRoute>
      }></Route>
        <Route path="/signup" element={
        <ProtectedRoute isInstructor={!isinstructor} redirect={"/instructor/dashboard"} >
            <Signup />
        </ProtectedRoute>
      }></Route>
        
      
        <Route path="/dashboard" element={
          <ProtectedRoute isInstructor={isinstructor} redirect={"/instructor"} >
          <Dashboard home={true} />
          </ProtectedRoute>
        }></Route>      


        <Route element={<ProtectedRoute isInstructor={isinstructor} redirect={"/instructor"} />}>
          <Route path="/dashboard/users" element={<Dashboard userspage={true} />}></Route>        
          <Route path="/dashboard/courses" element={<Dashboard coursespage={true} />}></Route>     
          <Route path="/dashboard/payment" element={<Dashboard paymentpage={true} />}></Route>   
          <Route path="/dashboard/courses/editcourse" element={<EditLecture />}></Route>   
        </Route>      
      
          
    </Routes>

  </>
  );
}

export default InstructorApp;
