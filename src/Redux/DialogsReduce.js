const ADD_MESSAGE = 'ADD-MESSAGE';
const MESSAGE_ON_CHANGE = 'MESSAGE-ON-CHANGE';

let _img =
    'https://i.pinimg.com/236x/04/c7/8a/04c78a3bec46babab4a23e3e13091552--cover-picture-facebook-profile.jpg';

let initialState = {
    dialogs: [
        { id: 1, name: 'Andriy', img: _img },
        { id: 2, name: 'Ivanko', img: _img },
        { id: 3, name: 'Olexandr', img: _img },
        { id: 4, name: 'Roman', img: _img },
        { id: 5, name: 'Ura', img: _img },
        { id: 6, name: 'Mama Olena', img: _img },
    ],
    messages: [
        { id: 1, message: 'hi' },
        { id: 2, message: 'I' },
        { id: 3, message: 'know' },
        { id: 4, message: 'you dumb' },
        { id: 5, message: 'Lol' },
    ],
    newMessage: '',
};

const DialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            if (state.newMessage !== '') {
                let newMessage = {
                    id: 7,
                    message: state.newMessage,
                };
                state.messages.push(newMessage);
                state.newMessage = '';
                return state;
            }
            break;
        case MESSAGE_ON_CHANGE:
            state.newMessage = action.MessageText;
            return state;
        default:
            return state;
    }
};

export const OnMessageChangeActionCreator = (text) => ({
    type: MESSAGE_ON_CHANGE,
    MessageText: text,
});
export const SendMessageActionCreator = () => ({ type: ADD_MESSAGE });

export default DialogReducer;
