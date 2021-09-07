import {authAPI, usersAPI} from "../API/api";
import {PhotosType} from "./profile-reducer";

const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';
const SELECT_PAGE = 'SELECT_PAGE';
const SET_TOTAL = 'SET_TOTAL';
const TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING";
const TOGGLE_IS_IN_PROGRESS = "TOGGLE_IS_IN_PROGRESS"

type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}
type StateType = {
    users: Array<UserType>,
    pageSize: number
    totalUsersCount: number
    selectedPage: number
    isLoading: boolean
    isInProgress: Array<number>
}
let initialState: StateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    selectedPage: 1,
    isLoading: false,
    isInProgress: []
}

const usersReducer = (state = initialState, action: any) => {
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

type FollowAcceptActionType = {
    type: typeof FOLLOW
    userId: number
}
export const followAccept = (userId: number): FollowAcceptActionType => ({type: FOLLOW, userId});

type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({type: SET_USERS, users});

type SelectPageActionType = {
    type: typeof SELECT_PAGE
    selectedPage: number
}
export const selectPage = (selectedPage: number): SelectPageActionType => ({type: SELECT_PAGE, selectedPage});

type SetTotalActionType = {
    type: typeof SET_TOTAL
    totalUsersCount: number
}
export const setTotal = (totalUsersCount: number): SetTotalActionType => ({type: SET_TOTAL, totalUsersCount});

type ToggleIsLoadingActionType = {
    type: typeof TOGGLE_IS_LOADING
}
export const toggleIsLoading = (): ToggleIsLoadingActionType => ({type: TOGGLE_IS_LOADING});

type ToggleIsInProgressActionType = {
    type: typeof TOGGLE_IS_IN_PROGRESS
    userId: number
    isFetching: boolean
}
export const toggleIsInProgress = (userId: number, isFetching: boolean): ToggleIsInProgressActionType => ({type: TOGGLE_IS_IN_PROGRESS, userId, isFetching});

export const getUsers = (selectedPage: number, pageSize: number) => {
    return async (dispatch: any) => {
        dispatch(selectPage(selectedPage));
        dispatch(toggleIsLoading());
        let data = await usersAPI.getUsers(selectedPage, pageSize)
        dispatch(toggleIsLoading());
        dispatch(setUsers(data.items));
        dispatch(setTotal(data.totalCount));
    }
}



export const follow = (user: UserType) => {
    return async (dispatch: any) => {
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

