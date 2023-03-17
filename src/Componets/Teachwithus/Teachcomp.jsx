import React from 'react'
const billboardimg = require('./asset/billboard-desktop-v4.jpg')
const whyteachimg1 = require('./asset/why-teach-img1.jpg')
const whyteachimg2 = require('./asset/why-teach-img2.jpg')
const whyteachimg3 = require('./asset/why-teach-img3.jpg')
const howstartimg1 = require('./asset/howstartimg1.jpg')
const howstartimg2 = require('./asset/howstartimg2.jpg')
const howstartimg3 = require('./asset/howstartimg3.jpg')
import './Teachcomp.scss'

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


export const Teachcomp = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
        <div className="billboard" style={{paddingTop:70}}>
          <div className="billboard__content">
                <h1 className="billboard__title">Come teach with us</h1>
                <p className="billboard__text">Become an instructor and change lives — including your own</p>
                <button className='billboard__btn'>Get Started</button>
          </div>
          <div className="billboard__image">
            <img src={billboardimg} alt="billboard" />
          </div>
            
        </div>
         <div className="container why-teach">
            <div className='why-teach-heading'>
              <h1>So many reasons to start</h1>
            </div>
            <div className='why-teach-content'>
              <div className='why-teach-content__item'>
                <div className='why-teach-content__item__img'>
                  <img src={whyteachimg1} alt="teach" />
                </div>
                <div className='why-teach-content__item__text'>
                  <h3>Teach your way</h3>
                  <p>Publish the course you want, in the way you want, and always have control of your own content.</p>
                </div>
              </div>
              <div className='why-teach-content__item'>
                <div className='why-teach-content__item__img'>
                  <img src={whyteachimg2} alt="teach" />
                </div>
                <div className='why-teach-content__item__text'>
                  <h3>Inspire learners</h3>
                  <p>Teach what you know and help learners explore their interests, gain new skills, and advance their careers.</p>
                </div>
              </div>
              <div className='why-teach-content__item'>
                <div className='why-teach-content__item__img'>
                  <img src={whyteachimg3} alt="teach" />
                </div>
                <div className='why-teach-content__item__text'>
                  <h3>Get rewarded</h3>
                  <p>Expand your professional network, build your expertise, and earn money on each paid enrollment.</p>
                </div>
              </div>
            </div>
         </div>
         <div className='container how-start'>
          <div className='how-start-heading'>
            <h1>How to begin</h1>
          </div>
         <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Tabs value={value} onChange={handleChange} centered>
              <Tab label="Plan your curriculum" sx={{fontSize:"1rem",mx:4,fontWeight:800}} />
              <Tab label="Record your video" sx={{fontSize:"1rem",mx:4,fontWeight:800}} />
              <Tab label="Launch your course"sx={{fontSize:"1rem",mx:4,fontWeight:800}} />
            </Tabs>
            {value === 0 && 
              <div className='how-start-content'>
                
                  <div className="how-start-content-text">
                    <p>You start with your passion and knowledge. Then choose a promising topic with the help of our Marketplace Insights tool.The way that you teach — what you bring to it — is up to you.
                    </p>
                    <h6>How we help you</h6>
                    <p>We offer plenty of resources on how to create your first course. And, our instructor dashboard and curriculum pages help keep you organized.</p>
                  </div>
                  <div className="how-start-content-img">
                    <img src={howstartimg1} />
                  </div>
                
              </div>
            }
            {value === 1 && 
              <div className='how-start-content'>
                
                  <div className="how-start-content-text">
                    <p>Use basic tools like a smartphone or a DSLR camera. Add a good microphone and you’re ready to start.
                    If you don’t like being on camera, just capture your screen. Either way, we recommend two hours or more of video for a paid course.</p>
                    <h6>How we help you</h6>
                    <p>Our support team is available to help you throughout the process and provide feedback on test videos.</p>
                  </div>
                  <div className="how-start-content-img">
                    <img src={howstartimg2} />
                  </div>
              </div>
            }
            {value === 2 && 
              <div className='how-start-content'>
                
                  <div className="how-start-content-text">
                    <p>Gather your first ratings and reviews by promoting your course through social media and your professional networks.
                    Your course will be discoverable in our marketplace where you earn revenue from each paid enrollment.</p>
                    <h6>How we help you</h6>
                    <p>Our custom coupon tool lets you offer enrollment incentives while our global promotions drive traffic to courses. There’s even more opportunity for courses chosen for Udemy Business.</p>
                  </div>
                  <div className="how-start-content-img">
                    <img src={howstartimg3} />
                  </div>
              </div>
            }
          </Box>
         </div>
    </>
  )
}
