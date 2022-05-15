import React from 'react';
import s from './ProfileInfo.module.css';

function ProfileInfo() {
    return (
        <div className={s.content}>
            <div className={s.banner}>
                <img src="http://demo.foxthemes.net/socialitev2.2/assets/images/avatars/profile-cover.jpg" alt="poster"/>
            </div>
            <div className={s.descriptionBlock}>
                <div className={s.avatar}>
                    <img src="http://demo.foxthemes.net/socialitev2.2/assets/images/avatars/avatar-8.jpg" alt="avatar"/>
                </div>
                <div className={s.info}>
                    <h1>Josephine Williams</h1>
                    <p>Family , Food , Fashion , Fourever Edit</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;