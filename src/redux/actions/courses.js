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
export const getAllLectures = (id) => async (dispatch) => {
    try{
        dispatch({type:"getAllLecturesRequest"});
 
        const {data} = await axios.get(
            `${server}/course/${id}`,{},{
                withCredentials:true,
        });
        dispatch({type:"getAllLecturesSuccess",payload: data});
    }catch(error){
        dispatch({type:"getAllLecturesFail"});
    }
}


export const getAllCategory = () => async (dispatch) => {
    try{
        dispatch({type:"getAllCategoryRequest"});
 
        const {data} = await axios.get(
            `${server}/category`,{},{
                withCredentials:true,
        });
        // console.log("Data",data);
        dispatch({type:"getAllCategorySuccess",payload: data});
    }catch(error){
        dispatch({type:"getAllCategoryFail"});
    }
}

