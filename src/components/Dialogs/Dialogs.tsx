import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/state";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
}

const Dialogs: React.FC<DialogsPropsType> = ({dialogsPage}) => {

    let dialogsElements = dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = dialogsPage.messages.map( m => <Message message={m.message}/>);

    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    const sendMessage = () => {
        let text = newMessageElement.current?.value
        alert(text)
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <textarea ref={newMessageElement}></textarea>
                <button onClick={sendMessage}>send</button>
            </div>
        </div>
    );
}

export default Dialogs;