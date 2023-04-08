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
    getFilterCoursesRequest:(state)=>{
        state.courseLoading=true;
    },
    getFilterCoursesSuccess:(state,action)=>{
        state.courseLoading=false;
        state.filtercourses=action.payload.courses;
    },
    getFilterCoursesFail:(state,action)=>{
        state.courseLoading = false;
        state.error = action.payload;
    },



    getAllLecturesRequest:(state)=>{
        state.courseLoading=true;
    },
    getAllLecturesSuccess:(state,action)=>{
        state.courseLoading=false;
        state.Lectures=action.payload;
    },
    getAllLecturesFail:(state,action)=>{
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
    getAllReviewRequest:(state)=>{
        state.courseLoading=true;
    },
    getAllReviewSuccess:(state,action)=>{
        state.courseLoading=false;
        state.reviews=action.payload;
    },
    getAllReviewFail:(state,action)=>{
        state.courseLoading = false;
    },

    
    
});