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
    deleteCourseRequest:(state)=>{
        state.loading=true;
    },
    deleteCourseSuccess:(state,action)=>{
        state.loding=false;
        state.message=action.payload;
        // state.error = action.payload.error;
    },
    deleteCourseFail:(state,action)=>{
        state.loding = false;
        state.message=action.payload;
        // state.error = action.payload;
    },

    
});