import { createStore, combineReducers } from 'redux';
import ProfileReducer from './ProfileReduce';
import DialogReducer from './DialogsReduce';
import SideBarReducer from './SideBarReduce';

let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogReducer,
    sidebar: SideBarReducer,
});

let store = createStore(reducers);

export default store;
