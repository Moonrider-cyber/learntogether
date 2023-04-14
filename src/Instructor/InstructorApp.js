import React from 'react'
// import './App.scss';
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
import Addcourse from './InstructorComponets/FormPage/AddCourse';
import {EditLecture} from './InstructorComponets/FormPage/EditLecture';
import AddLecture from './InstructorComponets/FormPage/AddLecture';
import { AllReviews } from '../Admin/AdminComponets/Layout/AllReviews';
import { PurchaseCourses } from '../Admin/AdminComponets/FormPage/PurchaseCourses';


function InstructorApp() {

  const { isinstructor,message,error,isaddcourse,isaddlecture } = useSelector((state) => state.Instructor);
 
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
          <Route path="/dashboard/courses/reviews" element={<AllReviews />}></Route>   
          <Route path="/dashboard/payments/courses" element={<PurchaseCourses />}></Route>   
        </Route>      
      
          
          
        <Route element={<ProtectedRoute isInstructor={!isaddcourse} redirect={"/instructor/dashboard/courses"} />}>  
          <Route path="/dashboard/courses/addcourse" element={<Addcourse/>}></Route>           
        </Route>      
          
          <Route element={<ProtectedRoute isInstructor={!isaddlecture} redirect={"/instructor/dashboard/courses"} />}>  
          <Route path="/dashboard/courses/editcourse/addlecture" element={<AddLecture />}></Route>      
        </Route>  

    </Routes>

  </>
  );
}

export default InstructorApp;
