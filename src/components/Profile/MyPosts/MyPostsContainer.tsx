import React from 'react';
import {
    addPostActionCreator,
    updateNewPostTextActionCreator
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from '../../../StoreContext';
import {RootStateType} from "../../../redux/store";



type MyPostsPropsType = {}

const MyPostsContainer: React.FC<MyPostsPropsType> = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state: RootStateType = store.getState();
                    const addPostHandler = (text: string) => {
                        store.dispatch(addPostActionCreator(text))
                    };
                    const onPostChange = (text: string) => {
                        store.dispatch(updateNewPostTextActionCreator(text))
                    }
                    return (
                        <MyPosts addPost={addPostHandler}
                                 updateNewPostText={onPostChange}
                                 posts={state.profilePage.posts}
                                 newPostText={state.profilePage.newPostText}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )
}


export default MyPostsContainer;