const { default: ProfileReducer, addPost, deletePost } = require("./ProfileReduce");
let state = {
    posts: [
        { id: 1, message: 'Hi holywood', likeCount: 20 },
        { id: 2, message: 'mega post', likeCount: 15 }
    ],

};
it('length of posts should be incremented',()=>{
    // 1 test(start) data
    const action = addPost('hello world')

    // 2 action
    let newState = ProfileReducer(state,action)
    // 3 expected results
    expect (newState.posts.length).toBe(3)
})



it('message of newposts should be correct',()=>{
    // 1 test(start) data
    const action = addPost('hello world')

    // 2 action
    let newState = ProfileReducer(state,action)
    // 3 expected results
    
    expect (newState.posts[2].message).toBe('hello world')
})


it('after deleting length of posts should be decremented',()=>{
    // 1 test(start) data
    const action = deletePost(1)

    // 2 action
    let newState = ProfileReducer(state,action)
    // 3 expected results
    expect (newState.posts.length).toBe(1)
})
it('after incorrect deleting length of posts should be sam',()=>{
    // 1 test(start) data
    const action = deletePost(100)

    // 2 action
    let newState = ProfileReducer(state,action)
    // 3 expected results
    expect (newState.posts.length).toBe(2)
})