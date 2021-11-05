import React from 'react';
import Post from './Post/Post'
import s from './MyPosts.module.css';

const MyPosts = (props) => {
    
    const posts = props.posts
    let PostsItems = posts.map( post=><Post key={post.id}message={post.message} likeCount={post.likeCount}/>) 
    
    let PostNewElement=React.createRef()
    let InputPostsOnChange=() =>{
        let text = PostNewElement.current.value
        
        props.InputPostsOnChange(text)
        

    }
    let AddPost=()=>{
         
        props.addPost()
        PostNewElement.current.value=''
    }

    return (

            <div className={s.posts}>
                <h2>My Posts</h2>
                <div>
                    <div>
                        <textarea placeholder='Enter Post' ref={PostNewElement} className={s.PostArea} onChange={InputPostsOnChange}></textarea>
                    </div>
                    <div>
                        <button onClick={AddPost}>Add Post</button>
                    </div>
                </div>
                
                {PostsItems}

            </div>
        
    );
};

export default MyPosts;
