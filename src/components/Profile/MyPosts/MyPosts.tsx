import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: PostType[]
}

const MyPosts: React.FC<MyPostsPropsType> = ({posts}) => {

    let postElements = posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {postElements}
            </div>
        </div>
    );
}



export default MyPosts;