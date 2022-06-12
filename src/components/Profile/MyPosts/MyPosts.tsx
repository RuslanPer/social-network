import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: PostType[]
    newPostText: string
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = ({posts, addPost, newPostText, updateNewPostText}) => {

    let postElements = posts.map( p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPostHandler = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            addPost(text)
            updateNewPostText('')
        }
    };

    const onPostChangeHandler = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            updateNewPostText(text)
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