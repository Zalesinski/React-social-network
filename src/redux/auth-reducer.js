import {authAPI, securityAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";
const SET_CAPTCHA = "SET_CAPTCHA";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isLoggedIn: false,
    captcha: null
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }

            break;
        case SET_CAPTCHA:
            return {
                ...state,
                captcha: action.url
            }

            break;
        default:
            return state;
    }
    return state;
}


export default authReducer;

export const setUserData = (userId, email, login, isLoggedIn) => ({
    type: SET_USER_DATA,
    data: {userId, email, login, isLoggedIn}
});

export const setCapthca = (url) => ({type: SET_CAPTCHA, url});

export const authUser = () => {
    return async (dispatch) => {
        let response = await authAPI.getAuth()
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data;
            dispatch(setUserData(id, login, email, true));
        }
    }
}

export const login = (email, password, rememberMe, captcha) => {
    return async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe, captcha);
        if (response.data.resultCode === 0) {
            dispatch(authUser());
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Email or password is wrong";
            if (response.data.resultCode === 10) {
                dispatch(getCaptcha());
            }
            dispatch(stopSubmit("login", {_error: message}));
        }
    }
}

export const getCaptcha = () => {
    return async (dispatch) => {
        const response = await securityAPI.getCaptcha()
        const url = response.data.url;
        dispatch(setCapthca(url));
    }
}

export const logout = () => {
    return async (dispatch) => {
        let response = await authAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false))
        }
    }
}