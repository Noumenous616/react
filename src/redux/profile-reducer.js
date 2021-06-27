
import {userAPI} from "../api/api";
import {stopSubmit} from "redux-form";


const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'



let initialState = {

        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 12},
            {id: 2, message: "It's my first post", likesCount: 25},
            {id: 2, message: "It's my first post", likesCount: 25},
            {id: 2, message: "It's my first post", likesCount: 25},
            {id: 2, message: "It's my first post", likesCount: 25}
        ],
        profile: null,
        status: ""

};


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {

            return {
                ...state,
                posts: [...state.posts, {id: 5, message: action.newPostBody, likesCount: 0}],
                newPostText: ''
            }

            /*let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;*/
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos }
            }
        }



        default:
            return state;
    }
}

export const addPostActionCreator = (newPostBody) => ({type: ADD_POST, newPostBody});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});


export const getUserProfile = (userId) => async (dispatch) => {
    let data = await userAPI.getProfile(userId);
    dispatch(setUserProfile(data.data));
}
export const getStatus = (userId) => async (dispatch) => {
    let data = await userAPI.getStatus(userId);
    dispatch(setStatus(data.data));
}
export const updateStatus = (status) => async (dispatch) => {
    let data = await userAPI.updateStatus(status);
    if (data.data.resultCode === 0) {
        dispatch(setStatus(status));
    }

}
export const savePhoto = (file) => async (dispatch) => {
    let data = await userAPI.savePhoto(file);
    if (data.data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.data.photos));
    }

}

export const saveProfile = (profile) => async (dispatch, getState) => {
    let userId = getState().auth.userId
    let data = await userAPI.saveProfile(profile);
    if (data.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit('editProfile', {_error: data.data.messages[0]}));
        return Promise.reject(data.data.messages[0]);
    }


}







export default profileReducer;