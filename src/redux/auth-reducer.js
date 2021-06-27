import {userAPI} from "../api/api";
import {toggleIsFetching} from "./users-reducer";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL';



let initialState = {

    userId: null,
    email: null,
    login: null,
    isFetching: true,
    isAuth: false,
    captchaUrl: null
};


const authReducer = (state = initialState,action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case GET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.data
            }

            default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, data: {userId, email, login, isAuth}});
export const getCaptchaUrlSuccess = (captchaUrl) => ({type: GET_CAPTCHA_URL, captchaUrl});
export const getAuthUserData = () =>
    async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let data = await userAPI.getMe();
            dispatch(toggleIsFetching(false));
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch( setAuthUserData(id, email, login, true));
            }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let data = await userAPI.login(email, password, rememberMe);
    if (data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        if (data.resultCode === 0) {
            dispatch(getCaptchaUrl());
        }
        let errorMessage = data.messages.length > 0 ? data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', {_error: errorMessage}));
    }
}
export const getCaptchaUrl = () => async (dispatch) => {
    const data = await userAPI.getCaptcha();
    const captchaUrl = data.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export const logout = () => async (dispatch) => {
        let data = await userAPI.logout();
            if (data.resultCode === 0) {
                dispatch( setAuthUserData(null, null, null, false));
            }
}







export default authReducer;