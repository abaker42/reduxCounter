//import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterDux';
import authReducer from './authDux';

const store = configureStore({
	reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
