import React from "react";
import { useDispatch } from 'react-redux';
import { Adminlogout } from '../../redux/actions/admin';
import { Link, Navigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  
  const dispatch = useDispatch();
  
  function logoutHandler(){
    dispatch(Adminlogout());

    <Navigate to={"/admin"}/>
  }
  return (
    <>
              <div className="sidebar">
    <div className="logo-details">
      <i className='bx bxl-c-plus-plus'></i>
      <span className="logo_name">Busilearn</span>
    </div>
      <ul className="nav-links">
        
        <li>
        <Link to="/admin/dashboard">
            <i><DashboardIcon/></i>
            <span className="links_name">Dashboard</span>
          </Link>
        </li>

        <li>
          <Link to="/admin/dashboard/users">
            <i><PeopleIcon/></i>
            <span className="links_name">Users</span>
          </Link>
        </li>
        
        <li>
          <Link to="/admin/dashboard/users">
            <i><AssignmentIndIcon/></i>
            <span className="links_name">Instructor</span>
          </Link>
        </li>

        <li>
        <Link to="/admin/dashboard/courses">
            <i className='' ><SchoolIcon/></i>
            <span className="links_name">Courses</span>
          </Link>
        </li>

        {/* <li>
          <a href="#">
            <i className='' ><FaDollarSign/></i>
            <span className="links_name">Earn Money</span>
          </a>
        </li> */}
      
        {/* <li>
          <a href="#">
            <i className='' ><FaCog/></i>
            <span className="links_name">Setting</span>
          </a>
        </li> */}
        
        <li className="log_out">
          
          <button onClick={logoutHandler}>
            <a>
                <i className=''><LogoutIcon/></i>
                <span className="links_name">Log out</span>
            </a>
          </button>
        </li>
      </ul>
  </div>   
    </>
  );
};

export default Sidebar;
