import React from 'react';
import Post from './Post/Post'
import s from './MyPosts.module.css';

const MyPosts = () => {
    return (

            <div className={s.posts}>
                My Posts
                <div>
                     <textarea></textarea>
                     <button>Add Post</button>
                </div>
                <Post message='Hi holywood' likeCount='15'/>
                <Post message='mega post' likeCount='20'/>

            </div>
        
    );
};

export default MyPosts;
