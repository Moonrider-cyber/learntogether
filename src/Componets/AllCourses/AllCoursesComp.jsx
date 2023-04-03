import React, { useEffect } from 'react'
import { CoursesList } from './CoursesList'
import './AllCourses.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCourses } from '../../redux/actions/courses'


export const AllCoursesComp = () => {

    const dispatch = useDispatch();
    const {courses} = useSelector(state => state.courses);
    useEffect(() => {
        dispatch(getAllCourses());
    }, [dispatch])

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
                        {
                            courses && courses.map((data,index) => (
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
