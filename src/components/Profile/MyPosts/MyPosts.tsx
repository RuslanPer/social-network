import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {AddPostActionType, PostType, UpdateNewPostTextActionType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: PostType[]
    newPostText: string
    dispatch: (action: AddPostActionType | UpdateNewPostTextActionType) => void
}

const MyPosts: React.FC<MyPostsPropsType> = ({posts, dispatch, newPostText}) => {

    let postElements = posts.map( p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPostHandler = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            dispatch({type: 'ADD-POST', postMessage: text})
            dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: ''})
        }
    };

    const onPostChangeHandler = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})
        }
    }

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChangeHandler} ref={newPostElement} value={newPostText}/>
                <button onClick={addPostHandler}>Add post</button>
            </div>
            <div className={style.posts}>
                {postElements}
            </div>
        </div>
    );
}



export default MyPosts;