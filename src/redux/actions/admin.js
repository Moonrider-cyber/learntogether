import {server} from '../store';
import axios from 'axios';

export const Adminlogin = (email,password) => async (dispatch) => {
    try{
        dispatch({type:"AdminLoginRequest"});
 
        const {data} = await axios.post(`${server}/admin/login`,{email,password},{
            
            headers:{
                "Content-Type":"application/json",
            },withCredentials:true,
        });
        dispatch({type:"AdminLoginSuccess",payload: data});
    }catch(error){
        dispatch({type:"AdminLoginFail",payload:error.response.data.message});
    }
}

export const loadAdmin = () => async (dispatch) => {
    try{
        dispatch({type:"loadAdminRequest"});
 
        const {data} = await axios.post(
            `${server}/admin/me`,{},{
                withCredentials:true,
        });

        dispatch({type:"loadAdminSuccess",payload: data.user});
    }catch(error){
        dispatch({type:"loadAdminFail"});
    }
}

export const Adminlogout = () => async (dispatch) => {
    try{
        dispatch({type:"AdminlogoutRequest"});
 
        const {data} = await axios.post(
            `${server}/admin/logout`,{},{
                withCredentials:true,
        }).catch((err)=>console.log(err));
        
        dispatch({type:"AdminlogoutSuccess",payload:data});
    }catch(error){
        dispatch({type:"AdminlogoutFail",payload:"logout failed"});
    }
}

export const getAllUsers = () => async (dispatch) => {
    try{
        dispatch({type:"getAllUsersRequest"});
        const {data} = await axios.post(
            `${server}/admin/users`,{},{
                withCredentials:true,
        });
        dispatch({type:"getAllUsersSuccess",payload: data.users});
    }catch(error){
        dispatch({type:"getAllUsersFail"});
    }
}

export const deleteUser = (id) => async (dispatch) => {
    try{
        dispatch({type:"deleteUserRequest"});
        const {data} = await axios.delete(
            `${server}/admin/users/${id}`,{},{
                withCredentials:true,
        });
        dispatch({type:"deleteUserSuccess",payload: "user deleted"});
    }catch(error){
        dispatch({type:"deleteUserFail",payload:error.response.data.message});
    }
}
export const activeDeactiveUser = (id) => async (dispatch) => {
    try{
        dispatch({type:"adUserRequest"});
 
        const {data} = await axios.post(
            `${server}/admin/controluser/${id}`,{},{
                withCredentials:true,
        });
        dispatch({type:"adUserSuccess",payload: data.message});
    }catch(error){
        dispatch({type:"adUserFail",payload:"somthing went wrong"});
    }
}
export const addWithRole = (formdata) => async (dispatch) => {
    try{
        dispatch({type:"addUserRequest"});
 
        const {data} = await axios.post(`${server}/admin/addwithrole`,
            formdata,{
                headers:{
                    "Content-Type":"multipart/form-data",
                },withCredentials:true,
            }
        );
        dispatch({type:"addUsersuccess",payload: data});
    }catch(error){
        dispatch({type:"addUserFail",payload: error.response.data.message });
    }
}

export const addCategory = (name,description,id,creatorname) => async (dispatch) => {
    try{
        dispatch({type:"addcategoryRequest"});
 
        const {data} = await axios.post(`${server}/admin/category/new`,
        {name,description,
            createBy:[{
                creatorid:id,
                name:creatorname
            }]
        },{
            headers:{
                "Content-Type":"application/json",
            },withCredentials:true,
        });
        dispatch({type:"addcategorysuccess",payload: data});
    }catch(error){
        dispatch({type:"addcategoryFail",payload: error.response.data.message});
    }
}


export const deletecategory = (id) => async (dispatch) => {
    try{
        dispatch({type:"deletecategoryRequest"});
 
        const {data} = await axios.delete(
            `${server}/admin/category/${id}`,{},{
                withCredentials:true,
        });
        dispatch({type:"deletecategorySuccess",payload: "category deleted"});
    }catch(error){
        dispatch({type:"deletecategoryFail",payload:"somthing went wrong"});
    }
}

export const activeDeactivecategory = (id) => async (dispatch) => {
    try{
        dispatch({type:"adcategoryRequest"});
 
        const {data} = await axios.post(
            `${server}/admin/controlcategory/${id}`,{},{
                withCredentials:true,
        });
        dispatch({type:"adcategorySuccess",payload: data.message});
    }catch(error){
        dispatch({type:"adcategoryFail",payload:"somthing went wrong"});
    }
}
// add course
export const addCourse = (formdata) => async (dispatch) => {
    try{
        dispatch({type:"addCourseRequest"});
 
        const {data} = await axios.post(`${server}/course/new`,
            formdata,{
                headers:{
                    "Content-Type":"multipart/form-data",
                },withCredentials:true,
            }
        );
        dispatch({type:"addCoursesuccess",payload: "course added successfully"});
    }catch(error){
        dispatch({type:"addCourseFail",payload: error.response.data.message });
    }
}
// delete course
export const deleteCourse = (id) => async (dispatch) => {
    try{
        dispatch({type:"deleteCourseRequest"});
        const {data} = await axios.delete(
            `${server}/course/${id}`,{},{
                withCredentials:true,
        });
        dispatch({type:"deleteCourseSuccess",payload: "course deleted successfully"});
    }catch(error){
        dispatch({type:"deleteCourseFail",payload:error.response.data.message});
    }
}
export const activeDeactiveCourse = (id) => async (dispatch) => {
    try{
        dispatch({type:"adcourseRequest"});
 
        const {data} = await axios.post(
            `${server}/admin/controlcourse/${id}`,{},{
                withCredentials:true,
        });
        dispatch({type:"adcourseSuccess",payload: data.message});
    }catch(error){
        dispatch({type:"adcourseFail",payload:"somthing went wrong"});
    }
}