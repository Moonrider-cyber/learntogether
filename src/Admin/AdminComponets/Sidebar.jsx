import React from "react";
import { FaChalkboardTeacher,FaChartBar,FaDollarSign,FaCopyright,FaCog,FaCommentAlt} from "react-icons/fa";
import { BsFillCalendar3WeekFill} from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { Adminlogout } from '../../redux/actions/admin';
import { Link, Navigate } from 'react-router-dom';

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
            <i className='' ><BsFillCalendar3WeekFill/></i>
            <span className="links_name">Dashboard</span>
          </Link>
        </li>

        <li>
          <Link to="/admin/dashboard/users">
            <i className='' ><FaChalkboardTeacher/></i>
            <span className="links_name">content</span>
          </Link>
        </li>

          <li>
            <a href="#">
              {/* <i className='' ><FaChartBar/></i> */}
              <span className="links_name">Analytics</span>
            </a>
          </li>
          <li>
            <a href="#">
              {/* <i className='' ><FaCommentAlt/></i> */}
              <span className="links_name">comment</span>
            </a>
          </li>

          <li>
            <a href="#">
              {/* <i className='' ><FaCopyright/></i> */}
              <span className="links_name">Copyright</span>
            </a>
          </li>

          <li>
            <a href="#">
              {/* <i className='' ><FaDollarSign/></i> */}
              <span className="links_name">Earn Money</span>
            </a>
          </li>

        <li>
          <a href="#">
            <i className='' ><FaCopyright/></i>
            <span className="links_name">Copyright</span>
          </a>
        </li>

        <li>
          <a href="#">
            <i className='' ><FaDollarSign/></i>
            <span className="links_name">Earn Money</span>
          </a>
        </li>
      
        <li>
          <a href="#">
            <i className='' ><FaCog/></i>
            <span className="links_name">Setting</span>
          </a>
        </li>
        <li className="log_out">
          
          <button onClick={logoutHandler}>
            <i className=''><BiLogIn/></i>
            {/* <span className="links_name">Log out</span> */}
          </button>
        </li>
      </ul>
  </div>   
    </>
  );
};

export default Sidebar;
