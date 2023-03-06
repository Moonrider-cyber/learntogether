import {configureStore} from '@reduxjs/toolkit';
import { userReducer } from './reducers/userReducer';
import { adminReducer } from './reducers/adminReducer';
import { coursesReducer } from './reducers/coursesReducer';

export const server = "http://localhost:8000/api/v1";

const store = configureStore({
    reducer:{
        user:userReducer,
        admin:adminReducer,
        courses:coursesReducer
    },
});

export default store