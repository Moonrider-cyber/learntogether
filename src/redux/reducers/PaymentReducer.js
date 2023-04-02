import { createReducer } from "@reduxjs/toolkit";

export const PaymentReducer = createReducer({
    isPaid : false
},{
    PaymentRequest:(state)=>{
        state.paymentloading=true;
    },
    PaymentSuccess:(state,action)=>{
        state.paymentloading=false;
        state.isPaid=true;
        state.paymentmessage=action.payload.message;
    },
    PaymentFail:(state,action)=>{
        state.paymentloading = false;
        state.isPaid = false;
        state.paymenterror = action.payload.message;
    },
    clearError:(state)=>{
        state.paymenterror=null;
    },
    clearMessage:(state)=>{
        state.paymentmessage=null;
    },
});
