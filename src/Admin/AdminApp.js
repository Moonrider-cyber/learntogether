import React from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import {useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { ProtectedRoute } from './AdminProtectedRoute/ProtectedRoute';


// project imports
import Login from './AdminComponets/Login';
import Dashboard from './AdminComponets/Dashboard';
import { loadAdmin } from '../redux/actions/admin';
import  AddUser from './AdminComponets/FormPage/AddUser';
import AddAdmin from './AdminComponets/FormPage/AddAdmin';
import AddInstructor from './AdminComponets/FormPage/AddInstructor';
import AddCourse from './AdminComponets/FormPage/AddCourse';
import AddCategory from './AdminComponets/FormPage/AddCategory';

function AdminApp() {

  const { isAdmin,isadduser = false,message,error,isaddcategory = false,isaddcourse = false } = useSelector((state) => state.admin);
 
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
  
   // load user when app starts
   useEffect(() => {
    dispatch(loadAdmin())  
  }, [dispatch]);
  
  return (
  <>
  
    <Routes>
        <Route path="/" element={
        <ProtectedRoute isAdmin={!isAdmin} redirect={"/admin/dashboard"} >
            <Login />
        </ProtectedRoute>
      }></Route>
    

      
        <Route path="/dashboard" element={
          <ProtectedRoute isAdmin={isAdmin} redirect={"/admin"} >
          <Dashboard home={true} />
          </ProtectedRoute>
        }></Route>      
        
        
        <Route element={<ProtectedRoute isAdmin={!isadduser} redirect={"/admin/dashboard"} />}>  
          <Route path="/dashboard/users/adduser" element={<AddUser />}></Route>      
          <Route path="/dashboard/admins/addadmin" element={<AddAdmin />}></Route>      
          <Route path="/dashboard/instructors/addinstructor" element={<AddInstructor />}></Route>      
        </Route>      

        <Route element={<ProtectedRoute isAdmin={!isaddcourse} redirect={"/admin/dashboard/courses"} />}>  
          <Route path="/dashboard/courses/addcourse" element={<AddCourse />}></Route>           
        </Route>      

        <Route element={<ProtectedRoute isAdmin={!isaddcategory} redirect={"/admin/dashboard/category"} />}>  
          <Route path="/dashboard/category/addcategory" element={<AddCategory />}></Route>      
        </Route>      
        
        <Route element={<ProtectedRoute isAdmin={isAdmin} redirect={"/admin"} />}>  
          <Route path="/dashboard/users" element={<Dashboard userspage={true} />}></Route>      
          <Route path="/dashboard/instructor" element={<Dashboard instructorpage={true} />}></Route>      
          <Route path="/dashboard/admins" element={<Dashboard adminspage={true} />}></Route>      
          <Route path="/dashboard/courses" element={<Dashboard coursespage={true} />}></Route>      
          <Route path="/dashboard/category" element={<Dashboard categorypage={true} />}></Route>      
        </Route>      
      
          
    </Routes>

  </>
  );
}

export default AdminApp;
