import React from 'react'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SchoolIcon from '@mui/icons-material/School';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { LineChart,DoughutChart } from './Chart';
import { Box } from '@mui/system';

export const Home = () => {
  
  const { users } = useSelector((state) => state.admin);
  const { courses } = useSelector((state) => state.courses);

  let usercount = 0;
  let inscount = 0;
  let coursecount = courses ? courses.length : 0;
  if(users){
    for (let i = 0; i < users.length; i++) {
      if(users[i].role === "user"){
        usercount++;
      }
      if(users[i].role === "instructor"){
        inscount++;
      }
    }
  }
  return (
    <div className="home-content">
      <div className="overview-boxes">
        <div className="box">
          <PeopleAltIcon sx={{fontSize:70 , mr:4,ml:0}} />
          <div className="right-side">
            <div className="box-topic">Total Student</div>
            <div className="number">{usercount ? usercount : 0}</div>
            
          </div>
          <i className=''></i>
        </div>
        <div className="box">
          <AssignmentIndIcon sx={{fontSize:70 , mr:4,ml:0}} />
          <div className="right-side">
            <div className="box-topic">Total Instructor</div>
            <div className="number">{usercount ? inscount : 0}</div>
          </div>
          <i className='' ></i>
        </div>
        <div className="box">
        <SchoolIcon sx={{fontSize:70 , mr:4,ml:0}} />            

          <div className="right-side">
            <div className="box-topic">Total Course</div>
            <div className="number">{coursecount ? coursecount : 0}</div>
            
          </div>
          <i className='' ></i>
        </div>

        <div className="box">
        <CurrencyRupeeIcon sx={{fontSize:70 , mr:4,ml:0}} />            

          <div className="right-side">
            <div className="box-topic">Subscription</div>
            <div className="number">0</div>
            
          </div>
        </div>
      </div>




      <Box sx={{px:10,width:"100%",height:"40vh",display:"flex",gap:"40px"}}>
        <Box sx={{width:"100%"}}>
          <LineChart />
        </Box>

        
        <Box sx={{width:"100%"}}>
          <DoughutChart />
          </Box>
      </Box>
    </div>
  )
}
