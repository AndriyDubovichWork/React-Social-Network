import { ProfileAPI } from '../api/api';

const ADD_POST = 'profile/ADD-POST';
const DELETE_POST = 'profile/DELETE_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const SET_PHOTO_SUCSESS = 'profile/SET_PHOTO_SUCSESS';

let initialState = {
  posts: [
    { id: 1, message: 'Hi holywood', likeCount: 20 },
    { id: 2, message: 'mega post', likeCount: 15 },
  ],
  profile: null,
  status: '',
};

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      if (state.PostText !== '') {
        let newPost = {
          id: 5,
          message: action.PostText,
          likeCount: 0,
        };
        return {
          ...state,
          posts: [...state.posts, newPost],
          newPost: '',
        };
      }

      break;

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
      break;

    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
      break;
    case SET_STATUS:
      return { ...state, status: action.status };
      break;
    case SET_PHOTO_SUCSESS:
      return { ...state, profile: { ...state.profile, photos: action.photos } };
      break;
    default:
      return state;
  }
};

export const addPost = (text) => ({ type: ADD_POST, PostText: text });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status,
  };
};
export const setPhotoSucsess = (photos) => {
  return {
    type: SET_PHOTO_SUCSESS,
    photos,
  };
};

export const GetStatus = (userId) => async (dispatch) => {
  const data = await ProfileAPI.getStatus(userId);
  dispatch(setStatus(data));
};

export const UpdateStatus = (status) => async (dispatch) => {
  const response = await ProfileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};
export const UpdateMainPhoto = (photo) => async (dispatch) => {
  const response = await ProfileAPI.UpdatePhoto(photo);
  if (response.data.resultCode === 0) {
    dispatch(setPhotoSucsess(response.data.data.photos));
  }
};
export const GetProfileData = (userId) => async (dispatch) => {
  const data = await ProfileAPI.getUserProfile(userId);
  dispatch(setUserProfile(data));
};

export default ProfileReducer;
