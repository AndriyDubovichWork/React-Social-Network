import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import ProfileReducer from './ProfileReduce';
import DialogReducer from './DialogsReduce';
import UsersReducer from './UsersReduce';
import SideBarReducer from './SideBarReduce';
import AuthReducer from './AuthReducer';
import AppReducer from './AppReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
  profilePage: ProfileReducer,
  dialogsPage: DialogReducer,
  usersPage: UsersReducer,
  sidebar: SideBarReducer,
  auth: AuthReducer,
  app: AppReducer,
  form: formReducer,
});
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
