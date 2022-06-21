import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo: React.FC = () => {
    return (
        <div className={style.content}>
            <div className={style.banner}>
                <img src="http://demo.foxthemes.net/socialitev2.2/assets/images/avatars/profile-cover.jpg" alt="poster"/>
            </div>
            <div className={style.descriptionBlock}>
                <div className={style.avatar}>
                    <img src="http://demo.foxthemes.net/socialitev2.2/assets/images/avatars/avatar-8.jpg" alt="avatar"/>
                </div>
                <div className={style.info}>
                    <h1>Josephine Williams</h1>
                    <p>Family , Food , Fashion , Fourever Edit</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;