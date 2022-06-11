import React from 'react';
import style from './Post.module.css';

type PostMessagePropsType = {
    message: string,
    likesCount: number
}

const Post: React.FC<PostMessagePropsType> = ({message, likesCount}) => {
    return (
        <div className={style.item}>
            <img src="http://demo.foxthemes.net/socialitev2.2/assets/images/avatars/avatar-8.jpg" alt="avatar"/>
            {message}
            <div>
                <span>like</span> {likesCount}
            </div>
        </div>
    );
}

export default Post;