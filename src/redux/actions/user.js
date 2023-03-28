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
        dispatch({type:"loadUserFail"});
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

export const forgetpwd = (email,user = true) => async (dispatch) => {
    try{
        dispatch({type:"forgetpwdRequest"});
 
        const {data} = await axios.post(`${server}/forgotpassword`,{email,user},{
            
            headers:{
                "Content-Type":"application/json",
            },withCredentials:true,
        });
        dispatch({type:"forgetpwdSuccess",payload: data});
    }catch(error){
        dispatch({type:"forgetpwdFail",payload:error.response.data.message});
    }
}
export const resetpwd = (token,pwd) => async (dispatch) => {
    try{
        dispatch({type:"resetpwdRequest"});
        const {data} = await axios.put(`${server}/resetpassword/${token}`,{pwd},{
            
            headers:{
                "Content-Type":"application/json",
            },withCredentials:true,
        });
        dispatch({type:"resetpwdSuccess",payload: data});
    }catch(error){
        dispatch({type:"resetpwdFail",payload:error.response.data.message});
    }
}
export const updatename = (newname) => async (dispatch) => {
    
    try{
        dispatch({type:"updateprofileRequest"});
        const {data} = await axios.put(`${server}/updateprofile`,{"name":newname},{
            
            headers:{
                "Content-Type":"application/json",
            },withCredentials:true,
        });
        dispatch({type:"updateprofileSuccess",payload: data});
    }catch(error){
        dispatch({type:"updateprofileFail",payload:error.response.data.message});
    }
}

// add to cart
export const addtocart = (courseid) => async (dispatch) => {
    try{
        dispatch({type:"addtocartRequest"});
        const {data} = await axios.post(`${server}/addtocart`,{courseid},{
            
            headers:{
                "Content-Type":"application/json",
            },withCredentials:true,
        });
        dispatch({type:"addtocartSuccess",payload: data.message});
    }catch(error){
        dispatch({type:"addtocartFail",payload:error.response.data.message});   
    }
}
// remove from cart
export const removefromcart = (courseid) => async (dispatch) => {
    try{
        
        dispatch({type:"removefromcartRequest"});
        const {data} = await axios.delete(`${server}/removefromcart`,{courseid},{
            
            headers:{
                "Content-Type":"application/json",
            },withCredentials:true,
        });
        dispatch({type:"removefromcartSuccess",payload: data.message});
    }catch(error){
        dispatch({type:"removefromcartFail",payload:error.response.data.message});   
    }
}
// get cart courses
export const getcartcourses = () => async (dispatch) => {
    try{
        dispatch({type:"getcartcoursesRequest"});
        const {data} = await axios.post(`${server}/getcartcourses`,{},{
            
            headers:{
                "Content-Type":"application/json",
            },withCredentials:true,
        });
        dispatch({type:"getcartcoursesSuccess",payload: data});
    }catch(error){
        dispatch({type:"getcartcoursesFail",payload:error.response.data.message});   
    }
}