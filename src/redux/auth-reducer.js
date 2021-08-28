import {authAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isLoggedIn: false
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
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

export const authUser = () => {
    return async (dispatch) => {
        let response = await authAPI.getAuth()
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data;
            dispatch(setUserData(id, login, email, true));
        }
    }
}

export const login = (email, password, rememberMe) => {
    return async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe)
        if (response.data.resultCode === 0) {
            dispatch(authUser());
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Email or password is wrong";
            dispatch(stopSubmit("login", {_error: message}));
        }
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