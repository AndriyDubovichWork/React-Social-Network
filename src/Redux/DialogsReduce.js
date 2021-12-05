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
    ],
    messages: [
        { id: 1, message: 'hi' },
        { id: 2, message: 'I' },
        { id: 3, message: 'know' },
        { id: 4, message: 'you dumb' },
        { id: 5, message: 'Lol' },
    ],
};

const DialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:

            if (action.MessageText !== '') {
                let newMessage = {
                    id: 6,
                    message: action.MessageText,
                };
                return {
                    ...state,
                    messages: [...state.messages, newMessage],
                    newMessage: '',
                };
            }
            break;

        default:
            return state;
    }
};

export const SendMessageActionCreator = (text) => ({
    type: ADD_MESSAGE,
    MessageText: text,
});

export default DialogReducer;
