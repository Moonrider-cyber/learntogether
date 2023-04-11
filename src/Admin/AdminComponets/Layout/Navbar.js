import { Avatar } from '@mui/material';
import React from 'react'
import '../../App.css';


export const Navbar = ({admin}) => {
  return (
    <div>
      <nav>
        <div className="sidebar-button">
          <i className=''></i>
          <span className="dashboard">Admin Dashboard</span>
        </div>
        <div className="profile-details">
      <Avatar src={admin ? admin.avatar.url : null}/>
          {/* <span className="admin_name">{admin ? admin.name : "Admin"}</span> */}
        </div>
      </nav>

    </div>
    )
}
