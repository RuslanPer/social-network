import React from 'react';
import style from './Post.module.css';

type PostMessagePropsType = {
    message: string,
    likesCount: number
}

const Post: React.FC<PostMessagePropsType> = ({message, likesCount}) => {
    return (
        <div className={style.item}>
            <div className={style.header}>
                <div className={style.avatar}>
                    <img src="http://demo.foxthemes.net/socialitev2.2/assets/images/avatars/avatar-8.jpg" alt="avatar"/>
                </div>
                <h3 className={style.name}>Josephine Williams</h3>
            </div>
            <div className={style.text}>
                {message}
            </div>
            <div className={style.footer}>
                <span className={style.liked}>
                    Liked <span className={style.likes}>{likesCount}</span> users
                </span>
            </div>
        </div>
    );
}

export default Post;