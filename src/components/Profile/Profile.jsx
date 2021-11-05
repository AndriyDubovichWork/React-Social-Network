import React from 'react';
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import s from './Profile.module.css';

const Profile = (props) => {
    
    return (
        <div className={s.profile}>

            <ProfileInfo/>
            <MyPosts posts={props.state.posts} addPost={props.addPost}InputPostsOnChange={props.InputPostsOnChange}/>
        </div>
    );
};

export default Profile;
