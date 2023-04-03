import React from 'react'
import { CoursesList } from './CoursesList'
import './AllCourses.scss'


export const AllCoursesComp = () => {
  return (
    <>
        <section style={{paddingTop:50}}>
            <div className="container py-5">
                <div className="title pb-5">
                    <h1>All Courses</h1>
                </div>
                <div className='courses_main'>
                    {/* <div className='courses_filter'>

                    </div> */}
                    <div className='courses_list'>
                        <CoursesList/>
                        <CoursesList/>
                        <CoursesList/>
                    </div>
                    </div>
                </div>
        </section>
    </>
  )
}
