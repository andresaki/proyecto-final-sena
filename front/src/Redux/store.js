import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk';
import { productosReducer } from './reducer/productoReducer';
import { authReducer, userReducer } from './reducer/userReducer';


let reducer = combineReducers({
    products: productosReducer,
    auth: authReducer, 
    user: userReducer
});

let initialState = {}

const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    preloadedState: initialState,
})

export default store; 