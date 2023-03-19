import React from 'react'
// import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import {useSelector} from "react-redux";
import { useDispatch } from "react-redux";
// import toast from "react-hot-toast";
import { ProtectedRoute } from './InstructorProtectedRoute/ProtectedRoute';
import Login from './Componets/Login';

function AdminApp() {

//   const { isAdmin,isadduser = false,message,error,isaddcategory = false,isaddcourse = false, isaddlecture = false } = useSelector((state) => state.admin);
 
//   const dispatch = useDispatch();
//   useEffect(() => {
//     if(error){
//       toast.error(error);
//       dispatch({type:'clearError'})
//     }
//     if(message){
//       toast.success(message);
//       dispatch({type:'clearMessage'})
//     }
//   }, [dispatch,error,message]);
  
   // load user when app starts
//    useEffect(() => {
//     dispatch(loadAdmin())  
//   }, [dispatch]);
  const instructor = false;
  return (
  <>
    <Routes>
        <Route path="/" element={
        <ProtectedRoute isInstructor={!instructor} redirect={"/instructor/dashboard"} >
            <Login />
        </ProtectedRoute>
      }></Route>
        
        {/* <Route element={<ProtectedRoute isAdmin={isAdmin} redirect={"/admin"} />}>  
          <Route path="/dashboard/users" element={<Dashboard userspage={true} />}></Route>      
          <Route path="/dashboard/instructor" element={<Dashboard instructorpage={true} />}></Route>      
          <Route path="/dashboard/admins" element={<Dashboard adminspage={true} />}></Route>      
          <Route path="/dashboard/courses" element={<Dashboard coursespage={true} />}></Route>      
          <Route path="/dashboard/category" element={<Dashboard categorypage={true} />}></Route>   
          <Route path="/dashboard/payment" element={<Dashboard paymentpage={true} />}></Route>   
          <Route path="/dashboard/courses/editcourse" element={<EditLecture />}></Route>   
        </Route>      
       */}
          
    </Routes>

  </>
  );
}

export default AdminApp;
