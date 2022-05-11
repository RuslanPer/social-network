import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
    state: {
        posts: {
            id: number,
            message: string,
            likesCount: number
        }[]
    }
}

function Profile(props: ProfilePropsType) {
    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts posts={props.state.posts}/>
        </div>
    );
}

export default Profile;