import {server} from '../store';
import axios from 'axios';

export const getAllCourses = () => async (dispatch) => {
    try{
        dispatch({type:"getAllCoursesRequest"});
 
        const {data} = await axios.get(
            `${server}/course`,{},{
                withCredentials:true,
        });
        // console.log("Data",data);
        dispatch({type:"getAllCoursesSuccess",payload: data});
    }catch(error){
        dispatch({type:"getAllCoursesFail"});
    }
}
// delete course
export const deleteCourse = (id) => async (dispatch) => {
    try{
        dispatch({type:"deleteCourseRequest"});
        
        const {data} = await axios.delete(
            `${server}/course/${id}`,{},{
                withCredentials:true,
        });
        dispatch({type:"deleteCourseSuccess",payload: "course deleted"});
    }catch(error){
        dispatch({type:"deleteCourseFail",payload:"somthing went wrong"});
    }
}