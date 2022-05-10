import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div>
            my posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message={"Hi, how are you?"} likesCount={0}/>
                <Post message={"It's my first post"} likesCount={5}/>
            </div>
        </div>
    );
}



export default MyPosts;