import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer({},{
    AdminLoginRequest:(state)=>{
        state.loading=true;
    },
    AdminLoginSuccess:(state,action)=>{
        state.loding=false;
        state.isAdmin=true;
        state.user=action.payload.user;
        state.message=action.payload.message;
    },
    AdminLoginFail:(state,action)=>{
        state.loding = false;
        state.isAdmin = false;
        state.error = action.payload;
    },
    clearError:(state)=>{
        state.error=null;
    },
    clearMessage:(state)=>{
        state.message=null;
    },
});