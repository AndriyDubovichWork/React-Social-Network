import React from 'react';
import ProfileStatus from './ProfileStatus'
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    
    if(!props.profile.photos.small){
        props.profile.photos.small='https://i.pinimg.com/236x/04/c7/8a/04c78a3bec46babab4a23e3e13091552--cover-picture-facebook-profile.jpg'
    }
    return (       

        <div className={s.profileInfo}>

            <div className={s.profileDescription}>
                
                <img
                    className={s.profileLogo}
                    alt=''
                    src={props.profile.photos.small}
                />  
                <span>{props.profile.fullName}</span>
                <ProfileStatus status={props.status} UpdateStatus={props.UpdateStatus}/>
            </div>
            <div>
                <span>{props.profile.aboutMe}</span><br/>
                <span>{props.profile.lookingForAJob?'Looking for a job':'Not Looking for a job'}</span><br/>
                <span>{props.profile.lookingForAJob?props.profile.lookingForAJobDescription:''}</span>
            </div>
         </div>
        
    );
};

export default ProfileInfo;
