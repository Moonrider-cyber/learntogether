import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './lecture.scss'
import { getAllLectures } from '../../redux/actions/courses'
import { useParams,useNavigate } from 'react-router-dom'
import { checkenrolled } from '../../redux/actions/user'
const testvid = require('../../asset/video.mp4')

export const Lecturecomp = () => {
  
  let courseid = useParams().courseid;
  const dispatch = useDispatch()
  
  const navigate = useNavigate();
  const {isenroll} = useSelector(state => state.user)
  useEffect(() => {
    dispatch(checkenrolled(courseid))
    dispatch(getAllLectures(courseid))
    if(!isenroll){
      navigate("/");
    }
  }, [dispatch])
  
  const {Lectures} = useSelector(state => state.courses)
    
  const [curlecture, setCurlecture] = useState(Lectures && Lectures.lectures[0])
  console.log(curlecture)
  
  return (
    <>
        <div className='lectures container'>
            <h1 className='lectures_title'>{curlecture && curlecture.title}</h1>

            <div className='lectures_items'>
              <div className='lectures_video'>
                <video 
                src={curlecture && curlecture.video[0].url} 
                controls controlsList="nodownload"
                ></video>
              </div>
              <div className='lectures_list'>
                <h4>Lectures</h4>
                <ul>
                  { Lectures && Lectures.lectures.map((lecture,key) => (
                    <li key={lecture._id}>
                      <button onClick={() => setCurlecture(lecture)}>{lecture.title}</button>
                    </li>
                  ))}
                  {/* <li><button>1st  video</button></li>
                  <li><button>2nd video</button></li>
                  <li><button>3rd video</button></li>
                  <li><button>4th video</button></li>
                  <li><button>5th video</button></li>
                  <li><button>6th video</button></li> */}
                </ul>
            </div>
          </div>
        </div>
    </>
  )
}
