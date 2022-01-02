import React, { useState } from 'react';
import ProfileStatusWithHooks from './ProfileStatus';
import s from './ProfileInfo.module.css';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = (props) => {
  const [EditMode, setEditMode] = useState(false);
  if (!props.profile.photos.small) {
    props.profile.photos.small =
      'https://i.pinimg.com/236x/04/c7/8a/04c78a3bec46babab4a23e3e13091552--cover-picture-facebook-profile.jpg';
  }

  const mainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.UpdateMainPhoto(e.target.files[0]);
    }
  };

  return (
    <div className={s.profileInfo}>
      <div className={s.profileDescription}>
        <img
          className={s.profileLogo}
          alt=''
          src={props.profile.photos.small}
        />
        {props.isOvner ? (
          <input type={'file'} onChange={mainPhotoSelected} />
        ) : (
          ''
        )}
        {props.isOvner && EditMode ? (
          <ProfileDataForm profile={props.profile} />
        ) : (
          <ProfileData
            profile={props.profile}
            isOvner={props.isOvner}
            setEditMode={() => {
              setEditMode(true);
            }}
          />
        )}

        <h2>Status:</h2>
        <ProfileStatusWithHooks
          status={props.status}
          UpdateStatus={props.UpdateStatus}
        />
      </div>
    </div>
  );
};

const ProfileData = (props) => {
  return (
    <div>
      {props.isOvner && <button onClick={props.setEditMode}>edit</button>}
      <h2>Full name:</h2>
      <h2>{props.profile.fullName}</h2>
      <span>
        <h2>About me:</h2>
        {props.profile.aboutMe}
      </span>
      <br />

      <span>
        <h2>Loking for a job:</h2>
        {props.profile.lookingForAJob ? 'yes' : 'no'}
      </span>
      <br />

      <span>
        {props.profile.lookingForAJob ? <h2>My proffesional skills:</h2> : ''}

        {props.profile.lookingForAJobDescription}
      </span>
      <span>
        <h2>Contacts:</h2>
        {Object.keys(props.profile.contacts).map((key) => {
          if (props.profile.contacts[key]) {
            return (
              <Contact
                key={key}
                ContactTitle={key}
                ContactValue={props.profile.contacts[key]}
              />
            );
          }
          return '';
        })}
      </span>
    </div>
  );
};

const Contact = ({ ContactTitle, ContactValue }) => {
  return (
    <div>
      <b>
        <h3>{ContactTitle}:</h3>
        <a className={s.contacts}>{ContactValue}</a>
      </b>
    </div>
  );
};

export default ProfileInfo;
