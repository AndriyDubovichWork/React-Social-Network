import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (

    <div className={s.item}>
        <img className={s.img}alt='' src='https://i.pinimg.com/236x/04/c7/8a/04c78a3bec46babab4a23e3e13091552--cover-picture-facebook-profile.jpg'/>
        <strong>{props.message}</strong>
        <div>
            <span>
                like{props.likeCount}
            </span>
        </div>
        </div>
          
    );
};

export default Post;
