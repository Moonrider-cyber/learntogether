import React from 'react'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SchoolIcon from '@mui/icons-material/School';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Avatar } from '@mui/material';

export const Home = () => {
  return (
    <div className="home-content">
      <div className="overview-boxes">
        <div className="box">
          <PeopleAltIcon sx={{fontSize:70 , mr:4,ml:0}} />
          <div className="right-side">
            <div className="box-topic">Total Student</div>
            <div className="number">100</div>
            
          </div>
          <i className=''></i>
        </div>
        <div className="box">
          <AssignmentIndIcon sx={{fontSize:70 , mr:4,ml:0}} />
          <div className="right-side">
            <div className="box-topic">Total Instructor</div>
            <div className="number">22</div>
          </div>
          <i className='' ></i>
        </div>
        <div className="box">
        <SchoolIcon sx={{fontSize:70 , mr:4,ml:0}} />            

          <div className="right-side">
            <div className="box-topic">Total Course</div>
            <div className="number">120</div>
            
          </div>
          <i className='' ></i>
        </div>

        <div className="box">
        <CurrencyRupeeIcon sx={{fontSize:70 , mr:4,ml:0}} />            

          <div className="right-side">
            <div className="box-topic">Subscription</div>
            <div className="number">11,086</div>
            
          </div>
        </div>
      </div>




      <div className="video-boxes">
        <div className="recent-video box">
          <div className="title">Course List</div>
          <div className="video-details">
            <ul className="details">
              <li className="topic">Course Date</li>
              <li><a href="#">02 Jan 2021</a></li>
              <li><a href="#">02 Jan 2021</a></li>
              <li><a href="#">02 Jan 2021</a></li>
              <li><a href="#">02 Jan 2021</a></li>
              <li><a href="#">02 Jan 2021</a></li>
              <li><a href="#">02 Jan 2021</a></li>
              <li><a href="#">02 Jan 2021</a></li>
            </ul>
            <ul className="details">
            <li className="topic">Courses Name</li>
            <li><a href="#">How To Start Business</a></li>
            <li><a href="#">Increase Profit In Business</a></li>
            <li><a href="#">How To Start Zero Investment Business</a></li>
            <li><a href="#">Affiliate Marketing</a></li>
            <li><a href="#">How To Make A Brand For Your Business</a></li>
            <li><a href="#">Marketing Tips</a></li>
            <li><a href="#">Profitable Businessess</a></li>
          
          </ul>
          <ul className="details">
            <li className="topic">Total View</li>
            <li><a href="#">10000</a></li>
            <li><a href="#">5000</a></li>
            <li><a href="#">10000</a></li>
            <li><a href="#">600</a></li>
            <li><a href="#">1369</a></li>
            <li><a href="#">99999</a></li>
            <li><a href="#">500</a></li>
             
          </ul>
          {/* <ul className="details">
            <li className="topic">Incom</li>
            <li><a href="#">$204.98</a></li>
            <li><a href="#">$24.55</a></li>
            <li><a href="#">$25.88</a></li>
            <li><a href="#">$170.66</a></li>
            <li><a href="#">$56.56</a></li>
            <li><a href="#">$44.95</a></li>
            <li><a href="#">$67.33</a></li>
             
          </ul> */}
          </div>
          <div className="button">
            <a href="#">See All</a>
          </div>
        </div>




        
        <div className="top-video box">
          <div className="title">Student List</div>

        
          <ul className="top-video-details">
            <li>
           
              
              <span className="video">
                Student
              </span>
           
            <span className="view">
              Join Date
            </span>
          </li>

            <li>
            <a href="#">
              <Avatar sx={{mx:1}}/>
              {/* <img src={stdimg} alt=""/> */}
              <span className="video">Jainex Patel</span>
            </a>
            <span className="view">20-Feb-2023</span>
          </li>
          <li>
            <a href="#">
            <Avatar sx={{mx:1}}/>
              {/* <img src={stdimg} alt=""/> */}
              <span className="video">Parth Makadiya</span>
            </a>
            <span className="view">19-Feb-2023</span>
          </li>
          <li>
            <a href="#">
            <Avatar sx={{mx:1}}/>
              {/* <img src={stdimg} alt=""/> */}
              <span className="video">Jay Parmar</span>
            </a>
            <span className="view">15-Feb-2023</span>
          </li>
          <li>
            <a href="#">
            <Avatar sx={{mx:1 }}/>
              {/* <img src={stdimg} alt=""/> */}
              <span className="video">Rohit Parmar</span>
            </a>
            <span className="view">01-Feb-2023</span>
          </li>
         
          </ul>
        </div>
      </div>
    </div>
  )
}
