import {server} from '../store';
import axios from 'axios';

export const getAllCourses = () => async (dispatch) => {
    try{
        dispatch({type:"getAllCoursesRequest"});
 
        const {data} = await axios.get(
            `${server}/course`,{},{
                withCredentials:true,
        });
        console.log(data.courses);
        dispatch({type:"getAllCoursesSuccess",payload: data.courses});
    }catch(error){
        dispatch({type:"getAllCoursesFail"});
    }
}