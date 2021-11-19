import { ProfileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const INPUT_POST_ON_CHANGE = 'INPUT-POST-ON-CHANGE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        { id: 1, message: 'Hi holywood', likeCount: 20 },
        { id: 2, message: 'mega post', likeCount: 15 },
    ],
    newPost: '',
    profile: null,
};

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            if (state.newPost !== '') {
                let newPost = {
                    id: 5,
                    message: state.newPost,
                    likeCount: 0,
                };
                return {
                    ...state,
                    posts: [...state.posts, newPost],
                    newPost: '',
                };
            }

            break;
        case INPUT_POST_ON_CHANGE:
            return { ...state, newPost: action.PostText };
            break;
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile };
            break;
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const OnPostChangeActionCreator = (text) => ({
    type: INPUT_POST_ON_CHANGE,
    PostText: text,
});
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile,
});
export const GetProfileData = (userId) => {
    return (dispatch) => {
        ProfileAPI.getUserProfile(userId).then((data) => {
            dispatch(setUserProfile(data));
        });
    };
};

export default ProfileReducer;
