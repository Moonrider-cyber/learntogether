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
import { Instructorlogout } from "../../../redux/actions/instructor";

const Sidebar = () => {
  
  const dispatch = useDispatch();
  
  function logoutHandler(){
    dispatch(Instructorlogout());

    <Navigate to={"/instructor"}/>
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
        <Link to="/instructor/dashboard">
            <i><DashboardIcon/></i>
            <span className="links_name">Dashboard</span>
          </Link>
        </li>

        <li>
          <Link to="/instructor/dashboard/users">
            <i><PeopleIcon/></i>
            <span className="links_name">Students</span>
          </Link>
        </li>
        
        
        <li>
        <Link to="/instructor/dashboard/courses">
            <i className='' ><SchoolIcon/></i>
            <span className="links_name">Courses</span>
          </Link>
        </li>
        
        <li>
        <Link to={"/instructor/dashboard/payment"}>
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
