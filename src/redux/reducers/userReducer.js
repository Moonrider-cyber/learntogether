import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer({},{
    loginRequest:(state)=>{
        state.loading=true;
    },
    loginsuccess:(state,action)=>{
        state.loding=false;
        state.isAuthenicated=true;
        state.user=action.payload.user;
        state.message=action.payload.message;
    },
    loginFail:(state,action)=>{
        state.loding = false;
        state.isAuthenicated = false;
        state.error = action.payload;
    },
    clearError:(state)=>{
        state.error=null;
    },
    clearMessage:(state)=>{
        state.message=null;
    },

    loadUserRequest:(state)=>{
        state.loading=true;
    },
    loadUsersuccess:(state,action)=>{
        state.loding=false;
        state.isAuthenicated=true;
        state.user=action.payload;
    },
    loadUserFail:(state,action)=>{
        state.loding = false;
        state.isAuthenicated = false;
        state.error = action.payload;
    },
})