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
 
        const {data} = await axios.post(`${server}/register`,
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