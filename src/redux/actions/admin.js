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