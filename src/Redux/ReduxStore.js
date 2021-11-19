import { createStore, combineReducers, applyMiddleware } from 'redux';
import ProfileReducer from './ProfileReduce';
import DialogReducer from './DialogsReduce';
import UsersReducer from './UsersReduce';
import SideBarReducer from './SideBarReduce';
import AuthReducer from './AuthReducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogReducer,
    usersPage: UsersReducer,
    sidebar: SideBarReducer,
    auth: AuthReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
