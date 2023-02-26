import {server} from '../store';
import axios from 'axios';

export const login = (email,password) => async (dispatch) => {
    try{
        dispatch({type:"loginRequest"});
 
        const {data} = await axios.post(`${server}/login`,{email,password},{
            
            headers:{
                "Content-Type":"application/json",
            },withCredentials:true,
        });
        dispatch({type:"loginsuccess",payload: data});
    }catch(error){
        dispatch({type:"loginFail",payload:error.response.data.message});
    }
}
export const signup = (formdata) => async (dispatch) => {
    try{
        dispatch({type:"signupRequest"});
 
        const {data} = await axios.post(`${server}/register`,
            formdata,{
                headers:{
                    "Content-Type":"multipart/form-data",
                },withCredentials:true,
            }
        );
        dispatch({type:"signupsuccess",payload: data});
    }catch(error){
        dispatch({type:"signupFail",payload: error.response.data.message});
    }
}

export const loadUser = () => async (dispatch) => {
    try{
        dispatch({type:"loadUserRequest"});
 
        const {data} = await axios.post(
            `${server}/me`,{},{
                withCredentials:true,
        });
        
        dispatch({type:"loadUserSuccess",payload: data.user});
    }catch(error){
        dispatch({type:"loadUserFail",payload:error.response.data.message});
    }
}

export const logout = () => async (dispatch) => {
    try{
        dispatch({type:"logoutRequest"});
 
        const {data} = await axios.post(
            `${server}/logout`,{},{
                withCredentials:true,
        }).catch((err)=>console.log(err));
        
        dispatch({type:"logoutSuccess",payload:data});
    }catch(error){
        dispatch({type:"logoutFail",payload:"logout failed"});
    }
}
