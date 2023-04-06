import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './lecture.scss'
import { getAllLectures } from '../../redux/actions/courses'
import { useParams,useNavigate, Link } from 'react-router-dom'
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
  
  let {Lectures} = useSelector(state => state.courses)
  
  const [curlecture, setCurlecture] = useState(Lectures && Lectures.lectures[0])
  
  return (
    <>
        <div className='back'>
          <Link to={`/profile`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="bevel"><path d="M19 12H6M12 5l-7 7 7 7"/></svg>
          </Link>
        </div>
        <div className='lectures container'>
            <h1 className='lectures_title'>{curlecture && curlecture.title}</h1>

            <div className='lectures_items'>
              <div className='lectures_video'>
                <video 
                src={curlecture && curlecture.video[0].url} 
                controls controlsList="nodownload"
                ></video>
                <h4>Description</h4>
                <p>{curlecture && curlecture.desc} </p>
              </div>
              <div className='lectures_list'>
                <h4>Lectures - {Lectures && Lectures.lectures.length}</h4>
                <ul>
                  { Lectures && Lectures.lectures.map((lecture,key) => (
                    <li key={lecture._id}>
                      <button onClick={() => setCurlecture(lecture)}>{lecture.title}</button>
                    </li>
                  ))}
                </ul>
            </div>
          </div>
        </div>
    </>
  )
}
