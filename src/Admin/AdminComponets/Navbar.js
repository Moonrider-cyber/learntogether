import React from 'react'
import '../App.css';


export const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="sidebar-button">
          <i className=''></i>
          <span className="dashboard">Dashboard</span>
        </div>
    
        {/* <div className="search-box">
          <input type="text" placeholder="Search..."/>
          <i className='' ><FaSearch/></i>
        </div> */}
  
        <div className="profile-details">
          <span className="admin_name">cosigner</span>
        </div>
      </nav>

    </div>
    )
}
