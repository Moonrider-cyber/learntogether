import { Avatar } from '@mui/material';
import React from 'react'
import '../../App.css';


export const Navbar = ({instructor}) => {
  return (
    <div>
      <nav>
        <div className="sidebar-button">
          <i className=''></i>
          <span className="dashboard">Instructor Dashboard</span>
        </div>
        <div className="profile-details">
      <Avatar src={instructor ? instructor.avatar.url : null}/>
        </div>
      </nav>

    </div>
    )
}
