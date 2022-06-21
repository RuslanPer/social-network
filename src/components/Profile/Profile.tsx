import React from 'react';
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsType) => void
}

const Profile: React.FC<ProfilePropsType> = ({profilePage, dispatch}) => {
    return (
        <div className={style.content}>
            <ProfileInfo />
            <MyPosts posts={profilePage.posts}
                     newPostText={profilePage.newPostText}
                     dispatch={dispatch}/>
        </div>
    );
}

export default Profile;