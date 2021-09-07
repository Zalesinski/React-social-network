import {authUser} from "./auth-reducer";

const SET_INITIALIZED: string = "SET_INITIALIZED";

type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: false
}

const appReducer = (state = initialState, action: any): InitialStateType => {
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

type InitializingSuccessType = {
    type: typeof SET_INITIALIZED
}

export const initializingSuccess = (): InitializingSuccessType => ({type: SET_INITIALIZED});

export const initializeApp = () => {
    return (dispatch: any) => {
        let promise = dispatch(authUser());
        promise.then(() => dispatch(initializingSuccess()));
    }
}