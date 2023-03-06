import { createReducer } from "@reduxjs/toolkit";

export const coursesReducer = createReducer({},{


    getAllCoursesRequest:(state)=>{
        state.loading=true;
    },
    getAllCoursesSuccess:(state,action)=>{
        state.loding=false;
        state.courses=action.payload.courses;
    },
    getAllCoursesFail:(state,action)=>{
        state.loding = false;
        state.error = action.payload;
    },

    
});