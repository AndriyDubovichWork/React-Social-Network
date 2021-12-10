import { stopSubmit } from 'redux-form';
import { AuthAPI } from '../api/api';

const SET_USER_DATA = 'auth/SET_USER_DATA';

let initialState = {
  id: null,
  email: null,
  login: null,

  isAuth: false,
};

function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
      break;

    default:
      return state;
  }
}

export const SetAuthUserData = (id, email, login, isAuth) => {
  return {
    type: SET_USER_DATA,
    data: { id, email, login, isAuth },
  };
};

export const AuthMe = () => async (dispatch) => {
  const data = await AuthAPI.authMe();
  if (data.resultCode === 0) {
    let { id, email, login } = data.data;
    dispatch(SetAuthUserData(id, email, login, true));
  }
};

export const LoginMe = (email, password, rememberMe) => async (dispatch) => {
  const data = await AuthAPI.LogIn(email, password, rememberMe);
  if (data.data.resultCode === 0) {
    dispatch(AuthMe());
  } else {
    const message =
      data.data.messages.length > 0
        ? data.data.messages[0]
        : 'some error,try to reload page';
    dispatch(stopSubmit('login', { _error: message }));
  }
};

export const LogOutMe = () => async (dispatch) => {
  const data = await AuthAPI.LogOut();
  if (data.data.resultCode === 0) {
    dispatch(SetAuthUserData(null, null, null, false));
  }
};

export default AuthReducer;
