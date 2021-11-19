import React from 'react';

import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    
        

    return (       

        <div className={s.profileInfo}>
            <div className={s.bigpic}>
                <img
                    alt=''
                    src={props.profile.photos.large}
                />
                
            </div>
            <div className={s.profileDescription}>
                <img
                    className={s.profileLogo}
                    alt=''
                    src={props.profile.photos.small}
                />  
                
                <div>{props.profile.aboutMe}</div>
            </div>
            <div>
            
                <span>{props.profile.lookingForAJob?'Looking for a job':'Not Looking for a job'}</span><br/>
                <span>{props.profile.lookingForAJob?props.profile.lookingForAJobDescription:''}</span>
            </div>
         </div>
        
    );
};

export default ProfileInfo;
