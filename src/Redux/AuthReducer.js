import { authMe, ProfileAPI } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';

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
                isAuth: true,
            };
            break;

        default:
            return state;
    }
}

export const SetAuthUserData = (id, email, login) => {
    return {
        type: SET_USER_DATA,
        data: { id, email, login },
    };
};

export const AuthMe = () => {
    return (dispatch) => {
        authMe().then((data) => {
            if (data.resultCode === 0) {
                let { id, email, login } = data.data;
                dispatch(SetAuthUserData(id, email, login));
            }
        });
    };
};
export const LoginMe = (email, password, rememberMe) => {
    return (dispatch) => {
        ProfileAPI.LogIn(email, password, rememberMe).then((data) => {
            if (data.resultCode === 0) {
                dispatch(AuthMe());
            }
        });
    };
};
export default AuthReducer;
