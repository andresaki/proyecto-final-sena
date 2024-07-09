import axios from "axios";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL,
    REGISTER_USER_REQUEST , REGISTER_USER_SUCCESS , REGISTER_USER_FAIL,
    CLEAR_ERRORS,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_RESET,
    UPDATE_PROFILE_FAIL

 } from "../constants/userConstants";


// Login

export const login = ( email, password ) => async ( dispatch ) => {

    try{
        dispatch({type: LOGIN_REQUEST})

        const config = {
            headers: {
                'Content-Type' : 'application/json'
            }
        }

        const {data} = await axios.post('/api/usuario/login', { email, password } , config)

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data.user
        })

    }
    catch ( error ) {

        dispatch({
            type:LOGIN_FAIL,
            payload : error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}


//REGISTRAR USUARIO
export const register = (userData) => async (dispatch) => {
    try {
        dispatch({ type: REGISTER_USER_REQUEST })


        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        
        const {data} = await axios.post('/api/admin/registro', userData, config)

        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: data.user
        })
    }
    catch (error) { 
        dispatch({
            type: REGISTER_USER_FAIL,
            payload : error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}


// Cargar el usuario (LOAD_USER)
export const loadUser= () => async (dispatch) => {
    try{
        dispatch({type: LOAD_USER_REQUEST})

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const {data} = await axios.get("/api/usuario/profile" , config)


        dispatch ({
            type: LOAD_USER_SUCCESS,
            payload: data.user
        })
    }
    catch (error){
        dispatch({
            type: LOAD_USER_FAIL,
            payload : error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}



//actualizar  USUARIO loageador user
export const updateProfile = (userData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PROFILE_REQUEST })


        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        
        const {data} = await axios.put('/api/usuario/updateProfile', userData, config)

        dispatch({
            type: UPDATE_PROFILE_SUCCESS,
            payload: data.user
        })
    }
    catch (error) { 
        dispatch({
            type: UPDATE_PROFILE_FAIL,
            payload : error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}




// cerrar secion - logut user
export const logout = () => async (dispatch) => {
    try{

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const {data} = await axios.get("/api/usuario/logout", config)
        dispatch({
            type: LOGOUT_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type:LOGOUT_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

// Clear error
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}



