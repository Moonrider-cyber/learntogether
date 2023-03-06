import { createReducer } from "@reduxjs/toolkit";

export const adminReducer = createReducer({
    isAdmin: false
},{
    AdminLoginRequest:(state)=>{
        state.loading=true;
    },
    AdminLoginSuccess:(state,action)=>{
        state.loding=false;
        state.isAdmin=true;
        state.admin=action.payload.user;
        state.message=action.payload.message;
    },
    AdminLoginFail:(state,action)=>{
        state.loding = false;
        state.isAdmin = false;
        state.error = action.payload;
    },

    AdminlogoutRequest:(state)=>{
        state.loading=true;
    },
    AdminlogoutSuccess:(state,action)=>{
        state.loding=false;
        state.isAdmin=false;
        state.admin=null;
        state.message=action.payload.message;
    },
    logoutFail:(state,action)=>{
        state.loding = false;
        state.isAdmin = true;
        state.message=action.payload.message;
        state.error = action.payload.message;
    },

    clearError:(state)=>{
        state.error=null;
    },
    clearMessage:(state)=>{
        state.message=null;
    },
    loadAdminRequest:(state)=>{
        state.loading=true;
    },
    loadAdminSuccess:(state,action)=>{
        state.loding=false;
        state.isAdmin=true;
        state.admin=action.payload;
    },
    loadAdminFail:(state,action)=>{
        state.loding = false;
        state.isAdmin = false;
        state.error = action.payload;
    },
    getAllUsersRequest:(state)=>{
        state.loading=true;
    },
    getAllUsersSuccess:(state,action)=>{
        state.loding=false;
        state.users=action.payload.users;
    },
    getAllUsersFail:(state,action)=>{
        state.loding = false;
        state.error = action.payload;
    },
    
});