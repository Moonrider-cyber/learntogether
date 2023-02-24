import React from 'react';
import { Route, Routes } from 'react-router-dom';

// project imports
import Login from '../AdminComponets/Login';
import Dashboard from '../AdminComponets/Dashboard';
import Users from '../AdminComponets/Users';
import Course from '../AdminComponets/Course';


const MainRoutes = () => {
    
    return (    
                
        <Routes>
                      {/* <Route path="/" element={<Dashboard />}></Route> */}
                      <Route path="/" element={<Dashboard />}></Route>
                      <Route path="/user" element={<Users />}></Route>
                      <Route path="/course" element={<Course />}></Route>
                      
                      <Route path="/login" element={<Login />}></Route>
                      <Route path="/wow" element={<div>wow</div>}></Route>
            </Routes>

    );
};


export default MainRoutes;
