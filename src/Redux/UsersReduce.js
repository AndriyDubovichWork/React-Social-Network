import { UpdateObjInArray } from 'utils/objectHelpers';
import { UsersAPI } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_COUNT = 'SET_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
  users: [],
  pageSize: 10,
  TotalUserCount: 0,
  currentPage: 1,
  isFetching: false,
  isFollowingProgress: [],
};

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: UpdateObjInArray(state.users, action.userId, 'id', {
          followed: true,
        }),
      };
      break;
    case UNFOLLOW:
      return {
        ...state,
        users: UpdateObjInArray(state.users, action.userId, 'id', {
          followed: false,
        }),
      };

      break;
    case SET_USERS:
      return { ...state, users: action.users };
      break;
    case SET_USERS_COUNT:
      return { ...state, TotalUserCount: action.count };
      break;
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
      break;
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
      break;
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        isFollowingProgress: action.isFetching
          ? [...state.isFollowingProgress, action.userId]
          : state.isFollowingProgress.filter((id) => id != action.userId),
      };
      break;
    default:
      return state;
  }
};

export const FollowSuccess = (userId) => ({ type: FOLLOW, userId });
export const UnfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const SetUsers = (users) => ({ type: SET_USERS, users });
export const setUsersCount = (usersCount) => ({
  type: SET_USERS_COUNT,
  count: usersCount,
});
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const ToggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const ToggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

export const getUsersThunkCreator = (pageNum, pageSize) => async (dispatch) => {
  dispatch(ToggleIsFetching(true));

  const data = await UsersAPI.getUsers(pageNum, pageSize);
  dispatch(SetUsers(data.items));
  dispatch(ToggleIsFetching(false));
  dispatch(setUsersCount(data.totalCount));

  dispatch(setCurrentPage(pageNum));
};

const followUnfollowToogle = async (dispatch, id, apiMethod, actionCreator) => {
  dispatch(ToggleFollowingProgress(true, id));
  const data = await apiMethod;
  if (data.resultCode === 0) {
    dispatch(actionCreator);
  }
  dispatch(ToggleFollowingProgress(false, id));
};

export const Follow = (id) => async (dispatch) => {
  followUnfollowToogle(dispatch, id, UsersAPI.Follow(id), FollowSuccess(id));
};
export const Unfollow = (id) => async (dispatch) => {
  followUnfollowToogle(
    dispatch,
    id,
    UsersAPI.unFollow(id),
    UnfollowSuccess(id)
  );
};

export default UsersReducer;
