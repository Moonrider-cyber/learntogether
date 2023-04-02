import {configureStore} from '@reduxjs/toolkit';
import { userReducer } from './reducers/userReducer';
import { adminReducer } from './reducers/adminReducer';
import { coursesReducer } from './reducers/coursesReducer';
import { instructorReducer } from './reducers/instructorReducer';
import { PaymentReducer } from './reducers/PaymentReducer';

export const server = "http://localhost:8000/api/v1";

const store = configureStore({
    reducer:{
        user:userReducer,
        admin:adminReducer,
        courses:coursesReducer,
        Instructor:instructorReducer,
        Payment:PaymentReducer
    },
});

export default store