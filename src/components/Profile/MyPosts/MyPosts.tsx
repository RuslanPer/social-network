import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";
import {PostType} from '../../../redux/state';

type MyPostsPropsType = {
    posts: Array<PostType>
    dispatch: any
    newPostText: string
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    let postElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        if (newPostElement.current) {
            props.dispatch(addPostActionCreator());
        }
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            props.dispatch(updateNewPostTextActionCreator(text));
        }
    }

    return (
        <div className={s.postsWrap}>
            <div className={s.postsBlock}>
                <div className={s.newPost}>
                    <textarea placeholder={'What\'s Your Mind ? Hamse!'}
                              onChange={ onPostChange }
                              ref={ newPostElement }
                              value={ props.newPostText }/>
                    <button onClick={ addPost }>Add post</button>
                </div>
                <div className={s.posts}>
                    {postElements}
                </div>
            </div>
        </div>
    );
}



export default MyPosts;