import React from 'react';
import style from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType} from "../../redux/redux-store";
import {ProfilePageType} from "../../redux/profileReducer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {EmptyObject, Store} from "redux";
import {DialogsPageType} from "../../redux/dialogsReducer";

type ProfilePropsType = {
    store: Store<EmptyObject & { profilePage: ProfilePageType; dialogsPage: DialogsPageType; }, ActionsType>
}

const Profile: React.FC<ProfilePropsType> = ({store}) => {
    return (
        <div className={style.content}>
            <ProfileInfo/>
            <MyPostsContainer store={store}/>
        </div>
    );
}

export default Profile;