import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = ({isInstructor,redirect, children }) => {
  
    if(!isInstructor){
        return (
          <Navigate to={redirect} />
        )
    }
return (
    children ? children : <Outlet />
  )
}
