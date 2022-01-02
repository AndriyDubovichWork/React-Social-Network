import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';
import Preloader from '../common/preloader/preloader';

const Profile = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className={s.profile}>
      <ProfileInfo
        isOvner={props.isOvner}
        profile={props.profile}
        status={props.status}
        UpdateStatus={props.UpdateStatus}
        UpdateMainPhoto={props.UpdateMainPhoto}
      />
      <MyPosts store={props.store} />
    </div>
  );
};

export default Profile;
