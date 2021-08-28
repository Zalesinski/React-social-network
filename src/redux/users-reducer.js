import {authAPI, usersAPI} from "../API/api";

const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';
const SELECT_PAGE = 'SELECT_PAGE';
const SET_TOTAL = 'SET_TOTAL';
const TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING";
const TOGGLE_IS_IN_PROGRESS = "TOGGLE_IS_IN_PROGRESS"

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    selectedPage: 1,
    isLoading: false,
    isInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: !u.followed}
                    } else return u;
                })
            }
            break;
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
            break;
        case SELECT_PAGE:
            return {
                ...state,
                selectedPage: action.selectedPage
            }
            break;
        case SET_TOTAL:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
            break;
        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: !state.isLoading
            }
            break;
        case TOGGLE_IS_IN_PROGRESS:
            console.log(action.isFetching, action.userId, state.isInProgress);
            return {
                ...state,
                isInProgress: action.isFetching
                    ? [...state.isInProgress, action.userId]
                    : state.isInProgress.filter(id => id != action.userId)
            }
            break;
        default:
            return state;
    }
    return state;
}


export default usersReducer;


export const followAccept = (userId) => ({type: FOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const selectPage = (selectedPage) => ({type: SELECT_PAGE, selectedPage});
export const setTotal = (totalUsersCount) => ({type: SET_TOTAL, totalUsersCount});
export const toggleIsLoading = () => ({type: TOGGLE_IS_LOADING});
export const toggleIsInProgress = (userId, isFetching) => ({type: TOGGLE_IS_IN_PROGRESS, userId, isFetching});

export const getUsers = (selectedPage, pageSize) => {
    return async (dispatch) => {
        dispatch(selectPage(selectedPage));
        dispatch(toggleIsLoading());
        let data = await usersAPI.getUsers(selectedPage, pageSize)
        dispatch(toggleIsLoading());
        dispatch(setUsers(data.items));
        dispatch(setTotal(data.totalCount));
    }
}



export const follow = (user) => {
    return async (dispatch) => {
        dispatch(toggleIsInProgress(user.id, true));
        if (user.followed) {
            let data = await usersAPI.unfollowUser(user.id)
            if (data.resultCode === 0) {
                dispatch(followAccept(user.id));
            }
            dispatch(toggleIsInProgress(user.id, false));
        } else {
            let data = await usersAPI.followUser(user.id)
            if (data.resultCode === 0) {
                dispatch(followAccept(user.id));
            }
            dispatch(toggleIsInProgress(user.id, false));
        }
    }
}

