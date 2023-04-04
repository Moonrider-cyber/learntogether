import React, { useEffect } from 'react'
import { CoursesList } from './CoursesList'
import './AllCourses.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getFilterCourses } from '../../redux/actions/courses'

export const FillterCourses = () => {
  
    const category = useParams().category;

    const dispatch = useDispatch();
    const {filtercourses} = useSelector(state => state.courses);

    useEffect(() => {
        dispatch(getFilterCourses(category))
    }, [dispatch,category])

    return (
    <>
        <section style={{paddingTop:50}}>
            <div className="container py-5">
                <div className="title pb-5">
                    <h1>{category && category} Courses</h1>
                </div>
                <div className='courses_main'>
                    {/* <div className='courses_filter'>

                    </div> */}
                    <div className='courses_list'>
                        {
                            filtercourses && filtercourses.map((data,index) => (
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
