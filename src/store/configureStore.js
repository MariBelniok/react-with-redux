import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import contador from './contador/contador.js';
import modal from './modal/modal.js'
import logger from './middleware/logger.js'

const reducer = combineReducers({ contador, modal });
const middleware = [...getDefaultMiddleware(), logger]
const store = configureStore({ reducer, middleware });

export default store;