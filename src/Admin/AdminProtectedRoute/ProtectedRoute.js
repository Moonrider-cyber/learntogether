import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = ({isAdmin,isadduser,redirect, children }) => {
  
    if(!isAdmin){
        return (
          <Navigate to={redirect} />
        )
    }
return (
    children ? children : <Outlet />
  )
}
