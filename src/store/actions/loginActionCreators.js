import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';
import {reactLocalStorage} from 'reactjs-localstorage';

// START clickLoginAction
export const clickLoginAction = (email, password) => {
    return {
        type: actionTypes.CLICK_LOGIN_ACTION,
        email: email,
        password: password
    }
}

export const clickLoginAsyncAction = (email, password) => {
    return async (dispatch) => {
        try {
            const data = {email, password}
            const response = await axios.post('/users/login', data)
            
            return response
        } catch (error) {
            return undefined
        }
    }
}
// END clickLoginAction

// START clickLogoutAction
export const clickLogoutAction = (email, password) => {
    return {
        type: actionTypes.CLICK_LOGOUT_ACTION
    }
}

export const clickLogoutAsyncAction = () => {
    return async (dispatch) => {
        try {
            const token = reactLocalStorage.get('token');
            
            var config = {
                // headers: {'Authorization': "Bearer " + token}
            };

            const data = {}
            const response = await axios.post('/users/logout', data, config)
            return response            
        } catch (e) {
            return undefined
        }
    }
}
// END clickLogoutAction

// START clickLoginAction
export const clickSignUpAction = (signUpData) => {
    return {
        type: actionTypes.CLICK_SIGNUP_ACTION,
        signUpData: signUpData
    }
}

export const clickSignUpAsyncAction = (signUpData) => {
    return async (dispatch) => {
        try {
            const data = signUpData
            const response = await axios.post('/users', signUpData)
            
            return response
        } catch (error) {
            return error
        }
    }
}
// END clickLoginAction
