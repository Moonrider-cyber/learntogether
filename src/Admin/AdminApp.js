import React from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import {ProtectedRoute} from "protected-route-react"
import { useEffect } from 'react';
import {useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

// import MainRoutes from "./routes/MainRoutes";


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
    {/* <MainRoutes /> */}
    <Routes>
      
      
        <Route path="/dashboard" element={
          <ProtectedRoute isadmin={isAdmin} redirect="/admin">
            <Dashboard />
          </ProtectedRoute>}></Route>      
      
      <Route path="/" element={
        // <ProtectedRoute isadmin={isadmin} redirect="/admin/dashboard">
          <Login />
        // </ProtectedRoute>
        }>
          
        </Route>
    </Routes>

  </>
  );
}

export default AdminApp;
