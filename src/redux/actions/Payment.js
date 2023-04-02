import {server} from '../store';
import axios from 'axios';

export const Payment = (paymentID,amount) => async (dispatch) => {
    try{
        dispatch({type:"PaymentRequest"});

        const {data} = await axios.post(`${server}/payment`,{paymentID,amount},{
            
            headers:{
                "Content-Type":"application/json",
            },withCredentials:true,
        });
        dispatch({type:"PaymentSuccess",payload: data.message});
    }catch(error){
        dispatch({type:"PaymentFail",payload:error.response.data.message});
    }
}