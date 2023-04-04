import React, { useEffect } from 'react'
import { CoursesList } from './CoursesList'
import './AllCourses.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useParams,useLocation } from 'react-router-dom'
import { getFilterCourses } from '../../redux/actions/courses'

export const FillterCourses = () => {
  
    let category = useParams().category;
    const location = useLocation();
    
    const search = location.state ? location.state.search : false;

    if(search){ category = false }
    const dispatch = useDispatch();
    const {filtercourses} = useSelector(state => state.courses);

    useEffect(() => {
        dispatch(getFilterCourses(category,search))
    }, [dispatch,category,search])

    return (
    <>
        <section style={{paddingTop:50}}>
            <div className="container py-5">
                <div className="title pb-5">
                    {
                        category && <h1>{category && category} Courses</h1> 
                    }
                    {
                        search && <h1>search result for {search && search}</h1> 
                    }
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
                    {
                        filtercourses && filtercourses.length === 0 &&
                        <div className='no_result' style={{marginTop:20,textAlign:"center"}}>
                            <h4>No result found</h4>
                        </div>
                    }   
                    </div>
                </div>
        </section>
    </>
  )
}
