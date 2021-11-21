import React from 'react';
import ProfileStatus from './ProfileStatus'
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    
        
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
