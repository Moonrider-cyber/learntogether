import { createReducer } from "@reduxjs/toolkit";

export const adminReducer = createReducer({
    isAdmin: false
},{
    AdminLoginRequest:(state)=>{
        state.adminLoading=true;
    },
    AdminLoginSuccess:(state,action)=>{
        state.adminLoading=false;
        state.isAdmin=true;
        state.admin=action.payload.user;
        state.message=action.payload.message;
    },
    AdminLoginFail:(state,action)=>{
        state.adminLoading = false;
        state.isAdmin = false;
        state.error = action.payload;
    },

    AdminlogoutRequest:(state)=>{
        state.adminLoading=true;
    },
    AdminlogoutSuccess:(state,action)=>{
        state.adminLoading=false;
        state.isAdmin=false;
        state.admin=null;
        state.message=action.payload.message;
    },
    logoutFail:(state,action)=>{
        state.adminLoading = false;
        state.isAdmin = true;
        state.message=action.payload.message;
        state.error = action.payload.message;
    },

    clearError:(state)=>{
        state.error=null;
    },
    clearMessage:(state)=>{
        state.isadduser=false;
        state.isaddcategory=false;
        state.isaddcourse = false;
        state.isaddlecture = false;
        state.message=null;
    },
    loadAdminRequest:(state)=>{
        state.adminLoading=true;
    },
    loadAdminSuccess:(state,action)=>{
        state.adminLoading=false;
        state.isAdmin=true;
        state.admin=action.payload;
    },
    loadAdminFail:(state,action)=>{
        state.adminLoading = false;
        state.isAdmin = false;
        state.error = action.payload;
    },
    getAllUsersRequest:(state)=>{
        state.adminLoading=true;
    },
    getAllUsersSuccess:(state,action)=>{
        state.adminLoading=false;
        state.users=action.payload;
    },
    getAllUsersFail:(state,action)=>{
        state.adminLoading = false;
        state.error = action.payload;
    },
    deleteUserRequest:(state)=>{
        state.adminLoading=true;
    },
    deleteUserSuccess:(state,action)=>{
        state.adminLoading=false;
        state.message=action.payload;
        // state.error = action.payload.error;
    },
    deleteUserFail:(state,action)=>{
        state.adminLoading = false;
        state.message=action.payload;
        // state.error = action.payload;
    },
    adUserRequest:(state)=>{
        state.adminLoading=true;
    },
    adUserSuccess:(state,action)=>{
        state.adminLoading=false;
        state.message=action.payload;
        // state.error = action.payload;
    },
    adUserFail:(state,action)=>{
        state.adminLoading = false;
        // state.message=action.payload.message;
        state.error = action.payload;
    },
    addUserRequest:(state)=>{
        state.adminLoading=true;
        state.isadduser=false;
    },
    addUsersuccess:(state,action)=>{
        state.adminLoading=false;
        state.isadduser=true;
        state.message=action.payload.message;
    },
    addUserFail:(state,action)=>{
        state.adminLoading = false;
        state.isadduser=false;
        state.error = action.payload;
    },
    addcategoryRequest:(state)=>{
        state.adminLoading=true;
        state.isaddcategory=false;
    },
    addcategorysuccess:(state,action)=>{
        state.adminLoading=false;
        state.isaddcategory=true;
        state.message=action.payload.message;
    },
    addcategoryFail:(state,action)=>{
        state.adminLoading = false;
        state.isaddcategory=false;
        state.error = action.payload;
    },
    deletecategoryRequest:(state)=>{
        state.adminLoading=true;
    },
    deletecategorySuccess:(state,action)=>{
        state.adminLoading=false;
        state.message=action.payload;
    },
    deletecategoryFail:(state,action)=>{
        state.adminLoading = false;
        state.error = action.payload;
    },
    adcategoryRequest:(state)=>{
        state.adminLoading=true;
    },
    adcategorySuccess:(state,action)=>{
        state.adminLoading=false;
        state.message=action.payload;
    },
    adcategoryFail:(state,action)=>{
        state.adminLoading = false;
        state.error = action.payload;
    },
    addCourseRequest:(state)=>{
        state.adminLoading=true;
        state.isaddcourse=false;
    },
    addCoursesuccess:(state,action)=>{
        state.adminLoading=false;
        state.isaddcourse=true;
        state.message=action.payload;
    },
    addCourseFail:(state,action)=>{
        state.adminLoading = false;
        state.isaddcourse=false;
        state.error = action.payload;
    },
    deleteCourseRequest:(state)=>{
        state.courseLoading=true;
    },
    deleteCourseSuccess:(state,action)=>{
        state.courseLoading=false;
        state.message=action.payload;
    },
    deleteCourseFail:(state,action)=>{
        state.courseLoading = false;
        state.message=action.payload;
    },
    adcourseRequest:(state)=>{
        state.courseLoading=true;
        state.message=null;
    },
    adcourseSuccess:(state,action)=>{
        state.courseLoading=false;
        state.message=action.payload;
    },
    adcourseFail:(state,action)=>{
        state.courseLoading = false;
        state.error = action.payload;
    },
    addLectureRequest:(state)=>{
        state.adminLoading=true;
        state.isaddlecture=false;
    },
    addLecturesuccess:(state,action)=>{
        state.adminLoading=false;
        state.isaddlecture=true;
        state.message=action.payload;
    },
    addLectureFail:(state,action)=>{
        state.adminLoading = false;
        state.isaddlecture=false;
        state.error = action.payload;
    },
    deleteLectureRequest:(state)=>{
        state.adminLoading=true;
    },
    deleteLectureSuccess:(state,action)=>{
        state.adminLoading=false;
        state.message=action.payload;
    },
    deleteLectureFail:(state,action)=>{
        state.adminLoading = false;
        state.message=action.payload;
    },
    getAllPaymentRequest:(state)=>{
        state.adminLoading=true;
    },
    getAllPaymentSuccess:(state,action)=>{
        state.adminLoading=false;
        state.payments=action.payload;
    }  ,
    getAllPaymentFail:(state,action)=>{
        state.adminLoading = false;
        state.error = action.payload;
    },
});