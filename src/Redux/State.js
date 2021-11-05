import { RerenderEntierTree } from './../render';

const img =
    'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg';

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi holywood', likeCount: 20 },
            { id: 2, message: 'mega post', likeCount: 15 },
        ],
        newPost: '',
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Andriy', img: img },
            { id: 2, name: 'Ivanko', img: img },
            { id: 3, name: 'Olexandr', img: img },
            { id: 4, name: 'Roman', img: img },
            { id: 5, name: 'Ura', img: img },
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
            { id: 0, friendimg: img, friendname: 'Ivanko' },
            { id: 1, friendimg: img, friendname: 'Tuxo' },
            { id: 2, friendimg: img, friendname: 'Roman' },
        ],
    },
};

export let InputPostsOnChange = (PostText) => {
    state.profilePage.newPost = PostText;
    RerenderEntierTree(state);
};
export let addPost = () => {
    if (state.profilePage.newPost !== '') {
        let newPost = {
            id: 5,
            message: state.profilePage.newPost,
            likeCount: 0,
        };
        state.profilePage.posts.push(newPost);
        RerenderEntierTree(state);
    }
};

export let MessageOnChange = (MessageText) => {
    state.dialogsPage.newMessage = MessageText;
    RerenderEntierTree(state);
};
export let addMessage = () => {
    if (state.dialogsPage.newMessage !== '') {
        let newMessage = {
            id: 6,
            message: state.dialogsPage.newMessage,
        };
        state.dialogsPage.messages.push(newMessage);
        RerenderEntierTree(state);
    }
};

export default state;
