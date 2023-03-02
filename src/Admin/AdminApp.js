import React from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import {useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";



// project imports
import Login from './AdminComponets/Login';
import Dashboard from './AdminComponets/Dashboard';
import { loadAdmin } from '../redux/actions/admin';


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
          <Login />
        }></Route>

    <Route path="/login" element={
        <Login />
        }></Route>
      
        <Route path="/dashboard" element={
          <Dashboard />
        }></Route>      
      
          
    </Routes>

  </>
  );
}

export default AdminApp;
