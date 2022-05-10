import React from 'react';
import s from './Post.module.css';

type PostMessageType = {
    message: string
}

function Post(props: PostMessageType) {
    return (
        <div className={s.item}>
            <img src="https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png" alt=""/>
            {props.message}
            <div>
                <span>like</span>
            </div>
        </div>
    );
}

export default Post;