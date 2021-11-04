import React from 'react';

import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (       

        <div className={s.profileInfo}>
            <div className={s.bigpic}>
                <img
                    alt=''
                    src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
                />
                
            </div>
            <div className={s.profileDescription}>
                <img
                    className={s.profileLogo}
                    alt=''
                    src='https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg'
                />  
                
                <div>description</div>
            </div>
        
         </div>
        
    );
};

export default ProfileInfo;
