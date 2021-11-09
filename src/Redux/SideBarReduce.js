let _img =
    'https://i.pinimg.com/236x/04/c7/8a/04c78a3bec46babab4a23e3e13091552--cover-picture-facebook-profile.jpg';

let initialState = {
    friends: [
        { id: 0, friendimg: _img, friendname: 'Ivanko' },
        { id: 1, friendimg: _img, friendname: 'Tuxo' },
        { id: 2, friendimg: _img, friendname: 'Roman' },
    ],
};

const SideBarReducer = (state = initialState, action) => {
    return state;
};
export default SideBarReducer;
