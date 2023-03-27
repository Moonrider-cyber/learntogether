import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer({
    isAuthenticated : false
},{
    loginRequest:(state)=>{
        state.loading=true;
    },
    loginsuccess:(state,action)=>{
        state.loading=false;
        state.isAuthenticated=true;
        state.user=action.payload.user;
        state.message=action.payload.message;
    },
    loginFail:(state,action)=>{
        state.loading = false;
        state.isAuthenticated = false;
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
    loadUserSuccess:(state,action)=>{
        state.loading=false;
        state.isAuthenticated=true;
        state.user=action.payload;
    },
    loadUserFail:(state,action)=>{
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
    },
    
    
    logoutRequest:(state)=>{
        state.loading=true;
    },
    logoutSuccess:(state,action)=>{
        state.loading=false;
        state.isAuthenticated=false;
        state.user=null;
        state.message=action.payload.message;
    },
    logoutFail:(state,action)=>{
        state.loading = false;
        state.isAuthenticated = true;
        state.message=action.payload.message;
        state.error = action.payload.message;
    },
    
    signupRequest:(state)=>{
        state.loading=true;
    },
    signupsuccess:(state,action)=>{
        state.loading=false;
        state.isAuthenticated=true;
        state.user=action.payload.user;
        state.message=action.payload.message;
    },
    signupFail:(state,action)=>{
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
    },
    forgetpwdRequest:(state)=>{
        state.loading=true;
    },
    forgetpwdSuccess:(state,action)=>{
        state.loading=false;
        state.message=action.payload.message;
    },
    forgetpwdFail:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    resetpwdRequest:(state)=>{
        state.loading=true;
    },
    resetpwdSuccess:(state,action)=>{
        state.loading=false;
        state.message=action.payload.message;
    },
    resetpwdFail:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    updateprofileRequest:(state)=>{
        state.loading=true;
    },
    updateprofileSuccess:(state,action)=>{
        state.loading=false;
        state.message=action.payload.message;
    },
    updateprofileFail:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    addtocartRequest:(state)=>{
        state.loading=true;
    },
    addtocartSuccess:(state,action)=>{
        state.loading=false;
        state.message=action.payload;
    },
    addtocartFail:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    removefromcartRequest:(state)=>{
        state.loading=true;
    },
    removefromcartSuccess:(state,action)=>{
        state.loading=false;
        state.message=action.payload;
    },
    removefromcartFail:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },

})