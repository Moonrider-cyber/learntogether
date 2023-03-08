import { createReducer } from "@reduxjs/toolkit";

export const adminReducer = createReducer({
    isAdmin: false
},{
    AdminLoginRequest:(state)=>{
        state.loading=true;
    },
    AdminLoginSuccess:(state,action)=>{
        state.loading=false;
        state.isAdmin=true;
        state.admin=action.payload.user;
        state.message=action.payload.message;
    },
    AdminLoginFail:(state,action)=>{
        state.loading = false;
        state.isAdmin = false;
        state.error = action.payload;
    },

    AdminlogoutRequest:(state)=>{
        state.loading=true;
    },
    AdminlogoutSuccess:(state,action)=>{
        state.loading=false;
        state.isAdmin=false;
        state.admin=null;
        state.message=action.payload.message;
    },
    logoutFail:(state,action)=>{
        state.loading = false;
        state.isAdmin = true;
        state.message=action.payload.message;
        state.error = action.payload.message;
    },

    clearError:(state)=>{
        state.error=null;
    },
    clearMessage:(state)=>{
        state.isadduser=false;
        state.message=null;
    },
    loadAdminRequest:(state)=>{
        state.loading=true;
    },
    loadAdminSuccess:(state,action)=>{
        state.loading=false;
        state.isAdmin=true;
        state.admin=action.payload;
    },
    loadAdminFail:(state,action)=>{
        state.loading = false;
        state.isAdmin = false;
        state.error = action.payload;
    },
    getAllUsersRequest:(state)=>{
        state.loading=true;
    },
    getAllUsersSuccess:(state,action)=>{
        state.loading=false;
        state.users=action.payload;
    },
    getAllUsersFail:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    deleteUserRequest:(state)=>{
        state.loading=true;
    },
    deleteUserSuccess:(state,action)=>{
        state.loading=false;
        state.message=action.payload;
        // state.error = action.payload.error;
    },
    deleteUserFail:(state,action)=>{
        state.loading = false;
        state.message=action.payload;
        // state.error = action.payload;
    },
    adUserRequest:(state)=>{
        state.loading=true;
    },
    adUserSuccess:(state,action)=>{
        state.loading=false;
        state.message=action.payload;
        // state.error = action.payload;
    },
    adUserFail:(state,action)=>{
        state.loading = false;
        // state.message=action.payload.message;
        state.error = action.payload;
    },
    addUserRequest:(state)=>{
        state.loading=true;
        state.isadduser=false;
    },
    addUsersuccess:(state,action)=>{
        state.loading=false;
        state.isadduser=true;
        state.message=action.payload.message;
    },
    addUserFail:(state,action)=>{
        state.loading = false;
        state.isadduser=false;
        state.error = action.payload;
    },
});