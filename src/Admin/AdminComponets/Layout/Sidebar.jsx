import React from "react";
import { useDispatch } from 'react-redux';
import { Adminlogout } from '../../../redux/actions/admin';
import { Link, Navigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LogoutIcon from '@mui/icons-material/Logout';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

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
    <i className="fa-solid fa-b"></i>
    
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
          <Link to="/admin/dashboard/instructor">
            <i><AssignmentIndIcon/></i>
            <span className="links_name">Instructor</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/dashboard/admins">
            <i><AdminPanelSettingsIcon/></i>
            <span className="links_name">Admins</span>
          </Link>
        </li>

        <li>
        <Link to="/admin/dashboard/courses">
            <i className='' ><SchoolIcon/></i>
            <span className="links_name">Courses</span>
          </Link>
        </li>
        
        <li>
        <Link to="/admin/dashboard/category">
            <i className='' ><TurnedInIcon/></i>
            <span className="links_name">Catagory</span>
          </Link>
        </li>
        <li>
        <Link to={"/admin/dashboard/payment"}>
            <i className='' ><CurrencyRupeeIcon/></i>
            <span className="links_name">Payment</span>
          </Link>
        </li>
        {/* <li>
        <a>
            <i className='' ><SupportAgentIcon/></i>
            <span className="links_name">Support</span>
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
