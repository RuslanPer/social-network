import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../redux/profileReducer";

type MyPostsPropsType = {
    posts: PostType[]
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: (text: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = ({posts, updateNewPostText, addPost, newPostText}) => {

    let postElements = posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const onAddPost = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            addPost(text)
            updateNewPostText('')
        }
    };

    const onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            updateNewPostText(text)
        }
    }

    return (
        <div className={style.postsWrap}>
            <div className={style.postsBlock}>
                <div className={style.newPost}>
                    <textarea placeholder={'What\'s Your Mind ? Hamse!'}
                              onChange={onPostChange}
                              ref={newPostElement}
                              value={newPostText}/>
                    <button onClick={onAddPost}>Share</button>
                </div>
                <div className={style.posts}>
                    {postElements}
                </div>
            </div>
        </div>
    );
}


export default MyPosts;