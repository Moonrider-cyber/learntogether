import { Avatar } from '@mui/material';
import React from 'react'
import '../../App.scss';


export const Navbar = ({admin}) => {
  
  function Capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
    }

  return (
    <div>
      <nav>
        <div className="sidebar-button">
          <i className=''></i>
          <span className="dashboard">{admin && Capitalize(admin.role)} Dashboard</span>
        </div>
        <div className="profile-details"> 
      <Avatar src={admin ? admin.avatar.url : null}/>
          {/* <span className="admin_name">{admin ? admin.name : "Admin"}</span> */}
        </div>
      </nav>

    </div>
    )
}
