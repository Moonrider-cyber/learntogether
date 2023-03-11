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