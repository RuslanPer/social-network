import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

type MyPostsPropsType = {
    posts: {
        id: number,
        message: string,
        likesCount: number
    }[],

    dispatch: any,

    newPostText: string,
}

function MyPosts(props: MyPostsPropsType) {

    let postElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        if (newPostElement.current) {
            let action = { type: 'ADD-POST'};
            props.dispatch(action);
        }
    }

    let onPostChange = () => {

        if (newPostElement.current) {
            let text = newPostElement.current.value;
            let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text};
            props.dispatch(action);
        }
    }

    return (
        <div className={s.postsWrap}>
            <div className={s.postsBlock}>
                <div className={s.newPost}>
                    <textarea placeholder={'What\'s Your Mind ? Hamse!'} onChange={ onPostChange } ref={ newPostElement } value={ props.newPostText }/>
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