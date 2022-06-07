import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import contador from './contador/contador.js';
import modal from './modal/modal.js'
import login from './login/login.js';

const reducer = combineReducers({ contador, modal, login });
const middleware = [...getDefaultMiddleware()]
const store = configureStore({ reducer, middleware });

export default store;