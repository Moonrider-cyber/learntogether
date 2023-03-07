import {server} from '../store';
import axios from 'axios';

export const Adminlogin = (email,password) => async (dispatch) => {
    try{
        dispatch({type:"AdminLoginRequest"});
 
        const {data} = await axios.post(`${server}/admin/login`,{email,password},{
            
            headers:{
                "Content-Type":"application/json",
            },withCredentials:true,
        });
        dispatch({type:"AdminLoginSuccess",payload: data});
    }catch(error){
        dispatch({type:"AdminLoginFail",payload:error.response.data.message});
    }
}

export const loadAdmin = () => async (dispatch) => {
    try{
        dispatch({type:"loadAdminRequest"});
 
        const {data} = await axios.post(
            `${server}/admin/me`,{},{
                withCredentials:true,
        });

        dispatch({type:"loadAdminSuccess",payload: data.user});
    }catch(error){
        dispatch({type:"loadAdminFail"});
    }
}

export const Adminlogout = () => async (dispatch) => {
    try{
        dispatch({type:"AdminlogoutRequest"});
 
        const {data} = await axios.post(
            `${server}/admin/logout`,{},{
                withCredentials:true,
        }).catch((err)=>console.log(err));
        
        dispatch({type:"AdminlogoutSuccess",payload:data});
    }catch(error){
        dispatch({type:"AdminlogoutFail",payload:"logout failed"});
    }
}

export const getAllUsers = () => async (dispatch) => {
    try{
        dispatch({type:"getAllUsersRequest"});
 
        const {data} = await axios.post(
            `${server}/admin/users`,{},{
                withCredentials:true,
        });
        dispatch({type:"getAllUsersSuccess",payload: data.users});
    }catch(error){
        dispatch({type:"getAllUsersFail"});
    }
}

export const deleteUser = (id) => async (dispatch) => {
    try{
        dispatch({type:"deleteUserRequest"});
 
        const {data} = await axios.delete(
            `${server}/admin/users/${id}`,{},{
                withCredentials:true,
        });
        dispatch({type:"deleteUserSuccess",payload: "user deleted"});
    }catch(error){
        dispatch({type:"deleteUserFail",payload:"somthing went wrong"});
    }
}
export const addWithRole = (formdata) => async (dispatch) => {
    try{
        dispatch({type:"addUserRequest"});
 
        const {data} = await axios.post(`${server}/admin/addwithrole`,
            formdata,{
                headers:{
                    "Content-Type":"multipart/form-data",
                },withCredentials:true,
            }
        );
        dispatch({type:"addUsersuccess",payload: data});
    }catch(error){
        dispatch({type:"addUserFail",payload: error.response.data.message });
    }
}