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

function AdminApp() {

  const { isAdmin,isadduser = false,message,error,loading } = useSelector((state) => state.admin);

  // console.log(isadduser);

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
    dispatch(loadAdmin())  
  }, [dispatch]);
  
  return (
  <>
  
    <Routes>
        <Route path="/"
     element={
      <ProtectedRoute isAdmin={!isAdmin} redirect={"/admin/dashboard"} >
      <Login />
      </ProtectedRoute>
        }></Route>
        {/* <Route path="/dashboard/users/adduser"
     element={
      <ProtectedRoute isAdmin={!isadduser} redirect={"/admin/dashboard/users"} >
        <AddUser />
      </ProtectedRoute>
        }></Route> */}

      
        <Route path="/dashboard" element={
          <ProtectedRoute isAdmin={isAdmin} redirect={"/admin"} >
          <Dashboard home={true} />
          </ProtectedRoute>
        }></Route>      
        
        
        <Route element={<ProtectedRoute isAdmin={!isadduser} redirect={"/admin"} />}>  
          <Route path="/dashboard/users/adduser" element={<AddUser />}></Route>      
          <Route path="/dashboard/admins/addadmin" element={<AddAdmin />}></Route>      
          <Route path="/dashboard/admins/addinstructor" element={<AddInstructor />}></Route>      
        </Route>      
        
        <Route element={<ProtectedRoute isAdmin={isAdmin} redirect={"/admin"} />}>  
          <Route path="/dashboard/users" element={<Dashboard userspage={true} />}></Route>      
          <Route path="/dashboard/instructor" element={<Dashboard instructorpage={true} />}></Route>      
          <Route path="/dashboard/admins" element={<Dashboard adminspage={true} />}></Route>      
          <Route path="/dashboard/courses" element={<Dashboard coursespage={true} />}></Route>      
          <Route path="/dashboard/catagory" element={<Dashboard catagorypage={true} />}></Route>      
        </Route>      
      
          
    </Routes>

  </>
  );
}

export default AdminApp;
