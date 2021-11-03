import React from 'react';

import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        

            <div className={s.profileInfo}>
                ava+description
                <img
                    alt=''
                    src='https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg'
                />
            </div>
        
    );
};

export default ProfileInfo;
