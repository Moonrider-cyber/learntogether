import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer({},{
    loginRequest:(state)=>{
        state.loading=true;
    },
    loginSucess:(state,action)=>{
        state.loding=false;
        state.isAuthenicated=true;
        state.user=action.payload;
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
    clearmessage:(state)=>{
        state.message=null;
    }

})