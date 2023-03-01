import React from 'react'
import { FaChalkboardTeacher,FaChartBar,FaDollarSign,FaCopyright,FaCog,FaCommentAlt,FaSearch,FaUsers} from "react-icons/fa";
import { BsFillCalendar3WeekFill} from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";

const Sidebar = () => {
  return (
    <>
              <div className="sidebar">
    <div className="logo-details">
      <i className='bx bxl-c-plus-plus'></i>
      <span className="logo_name">Busilearn</span>
    </div>
      <ul className="nav-links">
        
        <li>
          <a href="#" className="active">
            <i className='' ><BsFillCalendar3WeekFill/></i>
            <span className="links_name">Dashboard</span>
          </a>
        </li>

        <li>
          <a href="#">
            <i className='' ><FaChalkboardTeacher/></i>
            <span className="links_name">content</span>
          </a>
        </li>

        <li>

          <a href="#">
            <i className='' ><FaChartBar/></i>
            <span className="links_name">Analytics</span>
          </a>
        </li>
        <li>

          <a href="#">
            <i className='' ><FaCommentAlt/></i>
            <span className="links_name">comment</span>
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
          <a href="#">
            <i className=''><BiLogIn/></i>
            <span className="links_name">Log out</span>
          </a>
        </li>
      </ul>
  </div>   
    </>
  )
}

export default Sidebar;