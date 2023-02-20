import {server} from '../store';
import axios from 'axios';

export const login = (email,password) => async dispatch => {
    try{
        dispatch({type:"loginrequest"});
 
        const {data} = await axios.post(`${server}/login`,{email,password},{
            headers:{
                "Content-Type":"application/json",
            },withCredentials:true,
        });
        dispatch({type:"loginsucess"});
    }catch(error){
        dispatch({type:"loginfail",payload:error.response.data.message});
    }
}
