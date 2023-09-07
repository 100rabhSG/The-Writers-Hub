import { AUTH } from '../constants/actionTypes';
import * as api from '../api';

export const signin = (formData, history) => async (dispatch) => {
    try {
        // log in the user
        const { data } = await api.signin(formData);
// console.log(data);
        dispatch({ type: AUTH, data });
        
        history.push('/');
        
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const signup = (formData, history) => async (dispatch) => {
    try {
        // sign up  the user
        const { data } = await api.signup(formData);

        dispatch({ type: AUTH, data });

        history.push('/');
    } catch (error) {
        console.log(error);
    }
}