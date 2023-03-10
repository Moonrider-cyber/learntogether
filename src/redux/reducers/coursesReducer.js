import { createReducer } from "@reduxjs/toolkit";

export const coursesReducer = createReducer({},{


    getAllCoursesRequest:(state)=>{
        state.courseLoading=true;
    },
    getAllCoursesSuccess:(state,action)=>{
        state.courseLoading=false;
        state.courses=action.payload.courses;
    },
    getAllCoursesFail:(state,action)=>{
        state.courseLoading = false;
        state.error = action.payload;
    },
    deleteCourseRequest:(state)=>{
        state.courseLoading=true;
    },
    deleteCourseSuccess:(state,action)=>{
        state.courseLoading=false;
        state.message=action.payload;
        // state.error = action.payload.error;
    },
    deleteCourseFail:(state,action)=>{
        state.courseLoading = false;
        state.message=action.payload;
        // state.error = action.payload;
    },
    adcourseRequest:(state)=>{
        state.courseLoading=true;
        state.message=null;
    },
    adcourseSuccess:(state,action)=>{
        state.courseLoading=false;
        state.message=action.payload;
        // state.error = action.payload;
    },
    adcourseFail:(state,action)=>{
        state.courseLoading = false;
        // state.message=action.payload.message;
        state.error = action.payload;
    },
    


    getAllCategoryRequest:(state)=>{
        state.courseLoading=true;
    },
    getAllCategorySuccess:(state,action)=>{
        state.courseLoading=false;
        state.category=action.payload.category;
    },
    getAllCategoryFail:(state,action)=>{
        state.courseLoading = false;
        state.error = action.payload;
    },
    
});