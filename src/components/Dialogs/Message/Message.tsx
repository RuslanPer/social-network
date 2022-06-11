import React from 'react';
import style from './Message.module.css';

type MessagePropsType = {
    message: string
}

const Message: React.FC<MessagePropsType> = ({message}) => {
    return (
        <div className={style.message}>{message}</div>
    );
}

export default Message;