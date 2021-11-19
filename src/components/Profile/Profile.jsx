import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import s from './Profile.module.css';
import Preloader from '../common/preloader/preloader'
const Profile = (props) => {

    
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div className={s.profile}>

            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer store={props.store}/>
        </div>
    );
};

export default Profile;
