import React, { useEffect } from 'react'
import { CoursesList } from './CoursesList'
// import './AllCourses.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useParams,useLocation } from 'react-router-dom'

export const PurchaseCourses = () => {
  
  
    const location = useLocation();

    let state = [location.state]


    return (
    <>
        <section style={{paddingTop:50}}>
            <div className="container py-3">
                <div className="title pb-5">
                    
                      <h1>Purchase Courses </h1> 
                    
                </div>
                <div className='courses_main'>
                    {/* <div className='courses_filter'>

                    </div> */}
                    <div className='courses_list'>
                        {
                            state && state.map((data,index) => (
                                <CoursesList key={index} data={data} />
                            ))
                        }
                    </div>

                    </div>
                </div>
        </section>
    </>
  )
}
