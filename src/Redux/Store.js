import DialogReducer from './DialogsReduce';
import ProfileReducer from './ProfileReduce';
import SideBarReducer from './SideBarReduce';

let _img =
    'https://i.pinimg.com/236x/04/c7/8a/04c78a3bec46babab4a23e3e13091552--cover-picture-facebook-profile.jpg';

let store = {
    RerenderEntierTree() {},

    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi holywood', likeCount: 20 },
                { id: 2, message: 'mega post', likeCount: 15 },
            ],
            newPost: '',
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Andriy', img: _img },
                { id: 2, name: 'Ivanko', img: _img },
                { id: 3, name: 'Olexandr', img: _img },
                { id: 4, name: 'Roman', img: _img },
                { id: 5, name: 'Ura', img: _img },
            ],
            messages: [
                { id: 1, message: 'hi' },
                { id: 2, message: 'I' },
                { id: 3, message: 'know' },
                { id: 4, message: 'you dumb' },
                { id: 5, message: 'Lol' },
            ],
            newMessage: '',
        },
        sidebar: {
            friends: [
                { id: 0, friendimg: _img, friendname: 'Ivanko' },
                { id: 1, friendimg: _img, friendname: 'Tuxo' },
                { id: 2, friendimg: _img, friendname: 'Roman' },
            ],
        },
    },

    getState() {
        return this._state;
    },
    subdscribe(observer) {
        this.RerenderEntierTree = observer;
    },

    dispatch(action) {
        this._state.profilePage = ProfileReducer(
            this._state.profilePage,
            action
        );
        this._state.dialogsPage = DialogReducer(
            this._state.dialogsPage,
            action
        );
        this._state.sidebar = SideBarReducer(this._state.sidebar, action);

        this.RerenderEntierTree(this._state);
    },
};

export default store;
