import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {
    ActionsType,
    addPostActionCreator,
    PostType,
    updateNewPostTextActionCreator,
} from "../../../redux/state";

type MyPostsPropsType = {
    posts: PostType[]
    newPostText: string
    dispatch: (action: ActionsType) => void
}

const MyPosts: React.FC<MyPostsPropsType> = ({posts, dispatch, newPostText}) => {

    let postElements = posts.map( p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPostHandler = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            dispatch(addPostActionCreator(text))
            dispatch(updateNewPostTextActionCreator(''))
        }
    };

    const onPostChangeHandler = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            dispatch(updateNewPostTextActionCreator(text))
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