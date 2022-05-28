import React from 'react';
import s from './Post.module.css';

type PostMessagePropsType = {
    message: string,
    likesCount: number
}

const Post: React.FC<PostMessagePropsType> = (props) => {
    return (
        <div className={s.item}>
            <div className={s.header}>
                <div className={s.avatar}>
                    <img src="http://demo.foxthemes.net/socialitev2.2/assets/images/avatars/avatar-8.jpg" alt="avatar"/>
                </div>
                <h3 className={s.name}>Josephine Williams</h3>
            </div>
            <div className={s.text}>
                {props.message}
            </div>
            <div className={s.footer}>
                <span className={s.liked}>
                    Liked <span className={s.likes}>{props.likesCount}</span> users
                </span>
            </div>
        </div>
    );
}

export default Post;