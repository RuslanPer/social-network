import React from 'react';
import style from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile: React.FC = () => {
    return (
        <div className={style.content}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;