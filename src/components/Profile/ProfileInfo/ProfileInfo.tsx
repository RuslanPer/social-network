import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo: React.FC = () => {
    return (
        <div>
            <div className={style.banner}>
                <img src="http://demo.foxthemes.net/socialitev2.2/assets/images/avatars/profile-cover.jpg" alt="poster"/>
            </div>
            <div className={style.content}>
                avatar + description
            </div>
        </div>
    );
}

export default ProfileInfo;