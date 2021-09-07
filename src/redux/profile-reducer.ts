import {profileAPI} from "../API/api";
import {stopSubmit} from "redux-form";


const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SET_AVA = 'SET_AVA';
const DELETE_POST = 'DELETE_POST';

type PostType = {
    id: number
    message: string
    likesCount: number
}

type ProfileType = {
    userId: number | null
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type PhotosType = {
    small: string | null
    large: string | null
}

let initialState = {
    profile: null as ProfileType | null,
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 3},
        {id: 2, message: "It's my first post", likesCount: 5},
        {id: 3, message: "Does some one want to hang out?", likesCount: 1}
    ] as Array<PostType>,
    status: ""
}

type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): InitialStateType => {
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
                profile: {...state.profile, photos: action.file} as ProfileType
            }
            break;
        default:
            return state;
    }

    return state;
}

export default profileReducer;

type AddPostActionType = {
    type: typeof ADD_POST
    newPost: string
}
export const addPostActionCreator = (newPost: string): AddPostActionType => ({type: ADD_POST, newPost});

type SetProfileActionType = {
    type: typeof SET_PROFILE
    profile: InitialStateType
}
export const setProfile = (profile: InitialStateType): SetProfileActionType =>
    ({type: SET_PROFILE, profile});

type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string
}
export const setStatus = (status: string): SetStatusActionType =>
    ({type: SET_STATUS, status});

type DeletePostActionType = {
    type: typeof DELETE_POST
    postId: number
}
export const deletePost = (postId: number): DeletePostActionType =>
    ({type: DELETE_POST, postId});

type SetAvaActionType = {
    type: typeof SET_AVA
    file: PhotosType
}
export const setAva = (file: PhotosType): SetAvaActionType =>
    ({type: SET_AVA, file})

export const getProfile = (userId: number) => {
    return async (dispatch: any) => {
        if (!userId) {
            userId = 2;
        }
        let data = await profileAPI.getProfile(userId)
        dispatch(setProfile(data));
    }
}

export const getStatus = (userId: number) => {
    return async (dispatch: any) => {
        let response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data));
    }
}

export const updateStatus = (status: string) => {
    return async (dispatch: any) => {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
}

export const saveAva = (file: PhotosType) => {
    return async (dispatch: any) => {
        let response = await profileAPI.saveAva(file)
        if (response.data.resultCode === 0) {
            dispatch(setAva(response.data.data.photos))
        }
    }
}

export const saveProfile = (profile: ProfileType) => {
    return async (dispatch: any, getState: any) => {
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
