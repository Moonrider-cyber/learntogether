import { createReducer } from "@reduxjs/toolkit";

export const coursesReducer = createReducer({},{


    getAllCoursesRequest:(state)=>{
        state.courseLoding=true;
    },
    getAllCoursesSuccess:(state,action)=>{
        state.courseLoding=false;
        state.courses=action.payload.courses;
    },
    getAllCoursesFail:(state,action)=>{
        state.courseLoding = false;
        state.error = action.payload;
    },
    deleteCourseRequest:(state)=>{
        state.courseLoding=true;
    },
    deleteCourseSuccess:(state,action)=>{
        state.courseLoding=false;
        state.message=action.payload;
        // state.error = action.payload.error;
    },
    deleteCourseFail:(state,action)=>{
        state.courseLoding = false;
        state.message=action.payload;
        // state.error = action.payload;
    },
    adcourseRequest:(state)=>{
        state.courseLoding=true;
        state.message=null;
    },
    adcourseSuccess:(state,action)=>{
        state.courseLoding=false;
        state.message=action.payload;
        // state.error = action.payload;
    },
    adcourseFail:(state,action)=>{
        state.courseLoding = false;
        // state.message=action.payload.message;
        state.error = action.payload;
    },
    
});