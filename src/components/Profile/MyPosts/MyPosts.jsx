import React from 'react';
import Post from './Post/Post'
import s from './MyPosts.module.css';

const MyPosts = (props) => {
    
    const posts = props.posts
    let PostsItems = posts.map( post=><Post key={post.id}message={post.message} likeCount={post.likeCount}/>) 
    return (

            <div className={s.posts}>
                <h2>My Posts</h2>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add Post</button>
                    </div>
                </div>
                
                {PostsItems}

            </div>
        
    );
};

export default MyPosts;
