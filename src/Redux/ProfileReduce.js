const ADD_POST = 'ADD-POST';
const INPUT_POST_ON_CHANGE = 'INPUT-POST-ON-CHANGE';

let initialState = {
    posts: [
        { id: 1, message: 'Hi holywood', likeCount: 20 },
        { id: 2, message: 'mega post', likeCount: 15 },
    ],
    newPost: '',
};

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            if (state.newPost !== '') {
                let newPost = {
                    id: 5,
                    message: state.newPost,
                    likeCount: 0,
                };
                state.posts.push(newPost);
                state.newPost = '';
                return state;
            }
            break;
        case INPUT_POST_ON_CHANGE:
            state.newPost = action.PostText;
            return state;

        default:
            return state;
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const OnPostChangeActionCreator = (text) => ({
    type: INPUT_POST_ON_CHANGE,
    PostText: text,
});

export default ProfileReducer;
