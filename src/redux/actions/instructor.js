import {server} from '../store';
import axios from 'axios';

export const Instructorlogin = (email,password) => async (dispatch) => {
    try{
        dispatch({type:"InstructorLoginRequest"});
 
        const {data} = await axios.post(`${server}/instructor/login`,{email,password},{
            
            headers:{
                "Content-Type":"application/json",
            },withCredentials:true,
        });
        dispatch({type:"InstructorLoginSuccess",payload: data});
    }catch(error){
        dispatch({type:"InstructorLoginFail",payload:error.response.data.message});
    }
}

export const Instructorsignup = (formdata) => async (dispatch) => {
    
    try{
        dispatch({type:"InssignupRequest"});
 
        const {data} = await axios.post(`${server}/instructor/register`,
            formdata,{
                headers:{
                    "Content-Type":"multipart/form-data",
                },withCredentials:true,
            }
        );
        dispatch({type:"Inssignupsuccess",payload: data});
    }catch(error){
        dispatch({type:"InssignupFail",payload: error.response.data.message});
    }
}
export const Instructorlogout = () => async (dispatch) => {
    try{
        dispatch({type:"InstructorlogoutRequest"});
 
        const {data} = await axios.post(
            `${server}/instructor/logout`,{},{
                withCredentials:true,
        });
        
        dispatch({type:"InstructorlogoutSuccess",payload:data});
    }catch(error){
        dispatch({type:"InstructorlogoutFail",payload:"logout failed"});
    }
}
export const loadInstructor = () => async (dispatch) => {
    try{
        dispatch({type:"loadInstructorRequest"});
 
        const {data} = await axios.post(
            `${server}/instructor/me`,{},{
                withCredentials:true,
        });

        dispatch({type:"loadInstructorSuccess",payload: data.user});
    }catch(error){
        dispatch({type:"loadInstructorFail"});
    }
}
export const getAllCoursesins = () => async (dispatch) => {
    try{
        dispatch({type:"getAllCoursesRequest"});
 
        const {data} = await axios.get(
            `${server}/instructor/course`,{
                withCredentials:true,
        });
        // console.log("Data",data);
        dispatch({type:"getAllCoursesSuccess",payload: data});
    }catch(error){
        dispatch({type:"getAllCoursesFail"});
    }
}
// get instructor payment
export const getInstructorPayment = () => async (dispatch) => {
    try{
        dispatch({type:"getInstructorPaymentRequest"});
        
        const {data} = await axios.get(
            `${server}/instructor/payments`,{
                withCredentials:true,
        });
        // console.log("Data",data);
        dispatch({type:"getInstructorPaymentSuccess",payload: data});
    }catch(error){
        dispatch({type:"getInstructorPaymentFail"});
    }
}