import {configureStore} from '@reduxjs/toolkit';
import { userReducer } from './reducers/userReducer';

export const server = "";

const store = configureStore({
    reducer:{
        user:userReducer
    },
});

export default store