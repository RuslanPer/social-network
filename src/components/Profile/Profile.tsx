import React from 'react';
import style from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
}

const Profile: React.FC<ProfilePropsType> = () => {
    return (
        <div className={style.content}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;