import React, { useState } from 'react'
import './lecture.scss'
const testvid = require('../../asset/video.mp4')

export const Lecturecomp = () => {

  const [currentlec, setCurrentlec] = useState(null)

  return (
    <>
        <div className='lectures container'>
            <h1 className='lectures_title'>1st video hahaha</h1>

            <div className='lectures_items'>
              <div className='lectures_video'>
                <video 
                src={testvid} 
                controls autoplay controlsList="nodownload"
                ></video>
              </div>
              <div className='lectures_list'>
                <h4>Lectures</h4>
                <ul>
                  <li><button>1st  video</button></li>
                  <li><button>2nd video</button></li>
                  <li><button>3rd video</button></li>
                  <li><button>4th video</button></li>
                  <li><button>5th video</button></li>
                  <li><button>6th video</button></li>
                </ul>
            </div>
          </div>
        </div>
    </>
  )
}
