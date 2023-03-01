import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import {useSelector} from "react-redux";
import { useDispatch } from "react-redux";

// project imports
import Login from '../AdminComponets/Login';
import Dashboard from '../AdminComponets/Dashboard';


const MainRoutes = () => {
    
    const { isadmin,admin,message,error } = useSelector((state) => state.user);
    
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


      return (    

        <Routes>
                <Route path="/dashboard" element={<Dashboard />}></Route>      
                    <Route path="/" element={<Login />}></Route>
            </Routes>

    );
};


export default MainRoutes;
