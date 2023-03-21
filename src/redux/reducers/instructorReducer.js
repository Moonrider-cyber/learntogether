import { createReducer } from "@reduxjs/toolkit";

export const instructorReducer = createReducer({
    isinstructor: false
},{
    InstructorLoginRequest:(state)=>{
        state.instructorLoading=true;
    },
    InstructorLoginSuccess:(state,action)=>{
        state.instructorLoading=false;
        state.isinstructor=true;
        state.instructor=action.payload.user;
        state.message=action.payload.message;
    },
    InstructorLoginFail:(state,action)=>{
        state.instructorLoading = false;
        state.isinstructor = false;
        state.error = action.payload;
    },
    clearError:(state)=>{
        state.error=null;
    },
    clearMessage:(state)=>{
        state.message=null;
    },
    
    InssignupRequest:(state)=>{
        state.loading=true;
    },
    Inssignupsuccess:(state,action)=>{
        state.loading=false;
        state.isinstructor=true;
        state.instructor=action.payload.user;
        state.message=action.payload.message;
    },
    InssignupFail:(state,action)=>{
        state.loading = false;
        state.isinstructor = false;
        state.error = action.payload;
    },
});