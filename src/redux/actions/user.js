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

export const loadUser = () => async (dispatch) => {
    try{
        dispatch({type:"loadUserRequest"});
 
        const {data} = await axios.post(
            `${server}/me`,{},{
                withCredentials:true,
        });
        console.log("data",data)
        dispatch({type:"loadUsersuccess",payload: data.user});
    }catch(error){
        dispatch({type:"loadUserFail",payload:error.response.data.message});
    }
}