import React from "react";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import LogoutIcon from '@mui/icons-material/Logout';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Instructorlogout } from "../../../redux/actions/instructor";

const Sidebar = () => {
  
  const dispatch = useDispatch();
  function logoutHandler(){
    dispatch(Instructorlogout());
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

        
        <li className="log_out">
          
          <button onClick={logoutHandler}>
            <a>
                <i><LogoutIcon/></i>
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
