import React from 'react';
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.profile}>
            <div className={s.profile__bigImg}>
                <img
                    alt=''
                    src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
                />
            </div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
};

export default Profile;
