import { createReducer } from "@reduxjs/toolkit";

export const adminReducer = createReducer({
    isAdmin: false
},{
    AdminLoginRequest:(state)=>{
        state.adminLoding=true;
    },
    AdminLoginSuccess:(state,action)=>{
        state.adminLoding=false;
        state.isAdmin=true;
        state.admin=action.payload.user;
        state.message=action.payload.message;
    },
    AdminLoginFail:(state,action)=>{
        state.adminLoding = false;
        state.isAdmin = false;
        state.error = action.payload;
    },

    AdminlogoutRequest:(state)=>{
        state.adminLoding=true;
    },
    AdminlogoutSuccess:(state,action)=>{
        state.adminLoding=false;
        state.isAdmin=false;
        state.admin=null;
        state.message=action.payload.message;
    },
    logoutFail:(state,action)=>{
        state.adminLoding = false;
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
        state.adminLoding=true;
    },
    loadAdminSuccess:(state,action)=>{
        state.adminLoding=false;
        state.isAdmin=true;
        state.admin=action.payload;
    },
    loadAdminFail:(state,action)=>{
        state.adminLoding = false;
        state.isAdmin = false;
        state.error = action.payload;
    },
    getAllUsersRequest:(state)=>{
        state.adminLoding=true;
    },
    getAllUsersSuccess:(state,action)=>{
        state.adminLoding=false;
        state.users=action.payload;
    },
    getAllUsersFail:(state,action)=>{
        state.adminLoding = false;
        state.error = action.payload;
    },
    deleteUserRequest:(state)=>{
        state.adminLoding=true;
    },
    deleteUserSuccess:(state,action)=>{
        state.adminLoding=false;
        state.message=action.payload;
        // state.error = action.payload.error;
    },
    deleteUserFail:(state,action)=>{
        state.adminLoding = false;
        state.message=action.payload;
        // state.error = action.payload;
    },
    adUserRequest:(state)=>{
        state.adminLoding=true;
    },
    adUserSuccess:(state,action)=>{
        state.adminLoding=false;
        state.message=action.payload;
        // state.error = action.payload;
    },
    adUserFail:(state,action)=>{
        state.adminLoding = false;
        // state.message=action.payload.message;
        state.error = action.payload;
    },
    addUserRequest:(state)=>{
        state.adminLoding=true;
        state.isadduser=false;
    },
    addUsersuccess:(state,action)=>{
        state.adminLoding=false;
        state.isadduser=true;
        state.message=action.payload.message;
    },
    addUserFail:(state,action)=>{
        state.adminLoding = false;
        state.isadduser=false;
        state.error = action.payload;
    },
});