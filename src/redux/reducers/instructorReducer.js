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
        state.isaddcourse = false;
        state.isaddlecture = false;
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
    loadInstructorRequest:(state)=>{
        state.instructorLoading=true;
    },
    loadInstructorSuccess:(state,action)=>{
        state.instructorLoading=false;
        state.isinstructor=true;
        state.instructor=action.payload;
    },
    loadInstructorFail:(state,action)=>{
        state.instructorLoading = false;
        state.isinstructor = false;
        state.error = action.payload;
    },
    addCourseRequest:(state)=>{
        state.instructorLoading=true;
        state.isaddcourse=false;
    },
    addCoursesuccess:(state,action)=>{
        state.instructorLoading=false;
        state.isaddcourse=true;
        state.message=action.payload;
    },
    addCourseFail:(state,action)=>{
        state.instructorLoading = false;
        state.isaddcourse=false;
        state.error = action.payload;
    },
    getInstructorPaymentRequest:(state)=>{
        state.instructorLoading=true;
    },
    getInstructorPaymentSuccess:(state,action)=>{
        state.instructorLoading=false;
        state.mypayments=action.payload.mypayments;
    },
    getInstructorPaymentFail:(state,action)=>{
        state.instructorLoading = false;
        state.error = action.payload;
    },
    addLectureRequest:(state)=>{
        state.instructorLoading=true;
        state.isaddlecture=false;
    },
    addLecturesuccess:(state,action)=>{
        state.instructorLoading=false;
        state.isaddlecture=true;
        state.message=action.payload;
    },
    addLectureFail:(state,action)=>{
        state.instructorLoading = false;
        state.isaddlecture=false;
        state.error = action.payload;
    },
    InstructorlogoutRequest:(state)=>{
        state.instructorLoading=true;
    },
    InstructorlogoutSuccess:(state,action)=>{
        state.instructorLoading=false;
        state.isinstructor=false;
        state.message=action.payload.message;
    },
    InstructorlogoutFail:(state,action)=>{
        state.instructorLoading = false;
        state.isinstructor = true;
    },
});