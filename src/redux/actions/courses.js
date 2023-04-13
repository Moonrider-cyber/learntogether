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
export const getFilterCourses = (category,search) => async (dispatch) => {
    try{
        dispatch({type:"getFilterCoursesRequest"});
        if(category){
            const {data} = await axios.get(
                `${server}/course?catagory=${category}`,{},{
                    withCredentials:true,
                });
                dispatch({type:"getFilterCoursesSuccess",payload: data});
        }
        else if(search){
            const {data} = await axios.get(
                `${server}/course?keyword=${search}`,{},{
                    withCredentials:true,
                });
                dispatch({type:"getFilterCoursesSuccess",payload: data});
        }
        // console.log("Data",data);
    }catch(error){
        dispatch({type:"getFilterCoursesFail"});
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

export const getAllReview = (courseid) => async (dispatch) => {
    try {
      dispatch({ type: "getAllReviewRequest"});
  
      const { data } = await axios.get(`${server}/course/reviews/${courseid.id}`, {
        withCredentials: true,
      });

      dispatch({ type: "getAllReviewSuccess", payload: data.reviews });
    } catch (error) {
      dispatch({ type: "getAllReviewFail" });
    }
  };

export const getAllReviewAdmin = (courseid) => async (dispatch) => {
    try {
      dispatch({ type: "getAllReviewRequest"});
  
      const { data } = await axios.get(`${server}/course/reviews/${courseid}`, {
        withCredentials: true,
      });

      dispatch({ type: "getAllReviewSuccess", payload: data.reviews });
    } catch (error) {
      dispatch({ type: "getAllReviewFail" });
    }
  };