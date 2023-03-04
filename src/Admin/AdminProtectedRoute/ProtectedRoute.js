import React from 'react'
import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({isAdmin,redirect, children }) => {
  
    if(!isAdmin){
        return (
          <Navigate to={redirect} />
        )
    }
return (
    children
  )
}
