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
import { Users } from './AdminComponets/Users';


function AdminApp() {

  const { isAdmin,admin,message,error } = useSelector((state) => state.admin);


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

      
        <Route path="/dashboard" element={
          <ProtectedRoute isAdmin={isAdmin} redirect={"/admin"} >
          <Dashboard home={true} />
          </ProtectedRoute>
        }></Route>      
        <Route path="/dashboard/users" element={
          // <ProtectedRoute isAdmin={isAdmin} redirect={"/admin"} >
          <Dashboard users={true} />
          // </ProtectedRoute>
        }></Route>      
      
          
    </Routes>

  </>
  );
}

export default AdminApp;
