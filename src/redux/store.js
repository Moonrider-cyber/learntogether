import {configureStore} from '@reduxjs/toolkit';
import { userReducer } from './reducers/userReducer';

export const server = "http://localhost:3000/api/v1";

const store = configureStore({
    reducer:{
        user:userReducer
    },
});

export default store