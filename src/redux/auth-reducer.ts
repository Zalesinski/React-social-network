import {authAPI, securityAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";
const SET_CAPTCHA = "SET_CAPTCHA";


type InitialStateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isLoggedIn: boolean,
    captcha: string | null
}

let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isLoggedIn: false,
    captcha: null
}
const authReducer = (state = initialState, action: any): InitialStateType => {
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

type SetUserDataActionDataType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isLoggedIn: boolean
}

type SetUserDataActionType = {
    type: typeof SET_USER_DATA,
    data: SetUserDataActionDataType
};

export const setUserData = (userId: number | null, email: string  | null, login: string  | null, isLoggedIn: boolean): SetUserDataActionType => ({
    type: SET_USER_DATA,
    data: {userId, email, login, isLoggedIn}
});

type SetCaptchaActionType = {
    type: typeof SET_CAPTCHA,
    url: string
}

export const setCaptcha = (url: string): SetCaptchaActionType => ({type: SET_CAPTCHA, url});

export const authUser = () => {
    return async (dispatch: any) => {
        let response = await authAPI.getAuth()
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data;
            dispatch(setUserData(id, login, email, true));
        }
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => {
    return async (dispatch: any) => {
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
    return async (dispatch: any) => {
        const response = await securityAPI.getCaptcha()
        const url = response.data.url;
        dispatch(setCaptcha(url));
    }
}

export const logout = () => {
    return async (dispatch: any) => {
        let response = await authAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false))
        }
    }
}