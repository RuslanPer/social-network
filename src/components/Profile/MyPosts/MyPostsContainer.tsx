import React from 'react';
import {
    addPostActionCreator,
    ProfilePageType,
    updateNewPostTextActionCreator
} from "../../../redux/profileReducer";
import {ActionsType, RootStateType} from "../../../redux/redux-store";
import MyPosts from "./MyPosts";
import {EmptyObject, Store} from "redux";
import {DialogsPageType} from "../../../redux/dialogsReducer";

type MyPostsPropsType = {
    store: Store<EmptyObject & { profilePage: ProfilePageType; dialogsPage: DialogsPageType; }, ActionsType>
}

const MyPostsContainer: React.FC<MyPostsPropsType> = ({store}) => {

    const state: RootStateType = store.getState();

    const addPostHandler = (text: string) => {
        store.dispatch(addPostActionCreator(text))
    };

    const onPostChange = (text: string) => {
        store.dispatch(updateNewPostTextActionCreator(text))
    }

    return <MyPosts addPost={addPostHandler}
                    updateNewPostText={onPostChange}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}/>
}


export default MyPostsContainer;