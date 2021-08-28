import {authAPI} from "../API/api";
import {stopSubmit} from "redux-form";
import {authUser} from "./auth-reducer";

const SET_INITIALIZED = "SET_INITIALIZED";

let initialState = {
    initialized: false
}
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
            break;
        default:
            return state;
    }
    return state;
}


export default appReducer;

export const initializingSuccess = () => ({type: SET_INITIALIZED});

export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(authUser());
        promise.then(() => dispatch(initializingSuccess()));
    }
}