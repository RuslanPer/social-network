import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from '../../redux/state';

type DialogsPropsType = {
    dialogsPage: DialogsPageType
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map( m => <Message message={m.message}/>);

    let sendMessageElement = React.createRef<HTMLTextAreaElement>();

    let sendMessage = () => {
        if (sendMessageElement.current) {
            alert(sendMessageElement.current.value);
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea ref={sendMessageElement}></textarea>
                <button onClick={ sendMessage }>send</button>
            </div>
        </div>
    );
}

export default Dialogs;