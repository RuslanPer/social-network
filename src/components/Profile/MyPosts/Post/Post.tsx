import React from 'react';
import s from './Post.module.css';

type PostMessagePropsType = {
    message: string,
    likesCount: number
}

const Post: React.FC<PostMessagePropsType> = (props) => {
    return (
        <div className={s.item}>
            <img src="https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png" alt="avatar"/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    );
}

export default Post;