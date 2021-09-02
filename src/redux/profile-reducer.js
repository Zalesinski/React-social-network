import {profileAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SET_AVA = 'SET_AVA';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    profile: null,
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 3},
        {id: 2, message: "It's my first post", likesCount: 5},
        {id: 3, message: "Does some one want to hang out?", likesCount: 1}
    ],
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {
                    id: 5,
                    message: action.newPost,
                    likesCount: 0
                }]
            }
            break;
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
            break;
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
            break;
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id != action.postId)
            }
            break;
        case SET_AVA:
            return {
                ...state,
                profile: {...state.profile, photos: action.file}
            }
            break;
        default:
            return state;
    }

    return state;
}

export default profileReducer;

export const addPostActionCreator = (newPost) => ({type: ADD_POST, newPost});

export const setProfile = (profile) =>
    ({type: SET_PROFILE, profile});

export const setStatus = (status) =>
    ({type: SET_STATUS, status});

export const deletePost = (postId) =>
    ({type: DELETE_POST, postId});

export const setAva = (file) =>
    ({type: SET_AVA, file})

export const getProfile = (userId) => {
    return async (dispatch) => {
        if (!userId) {
            userId = 2;
        }
        let data = await profileAPI.getProfile(userId)
        dispatch(setProfile(data));
    }
}

export const getStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data));
    }
}

export const updateStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
}

export const saveAva = (file) => {
    return async (dispatch) => {
        let response = await profileAPI.saveAva(file)
        if (response.data.resultCode === 0) {
            dispatch(setAva(response.data.data.photos))
        }
    }
}

export const saveProfile = (profile) => {
    return async (dispatch, getState) => {
        const userId = getState().auth.userId;
        const response = await profileAPI.saveProfile(profile);
        if (response.data.resultCode === 0) {
            dispatch(getProfile(userId));
        } else {
            if (response.data.messages[0].match(/>\w+/gm)) {
                let field = response.data.messages[0].match(/>\w+/gm)[0].slice(1).toLowerCase();
                dispatch(stopSubmit("editProfile", {"contacts": {[field]: response.data.messages[0]}}));
            }

            return Promise.reject();
        }
    }
}
