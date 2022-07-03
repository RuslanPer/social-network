import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    DialogsPageType
} from "../../redux/dialogsReducer";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    updateNewMessageText: (text: string) => void
    sendMessage: () => void
}

const Dialogs: React.FC<DialogsPropsType> = ({dialogsPage, updateNewMessageText, sendMessage}) => {

    const dialogsElements = dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    const messagesElements = dialogsPage.messages.map( m => <Message key={m.id} message={m.message}/>);

    const newMessageElement = React.createRef<HTMLTextAreaElement>()

    const onClickSendMessage = () => {
        if (newMessageElement.current) {
            sendMessage()
            updateNewMessageText('')
        }
    }
    const onChangeNewMessage = () => {
        if (newMessageElement.current) {
            let text = newMessageElement.current.value
            updateNewMessageText(text)
        }
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <textarea placeholder={'Enter your message'}
                          value={dialogsPage.newMessageText}
                          onChange={onChangeNewMessage}
                          ref={newMessageElement}></textarea>
                <button onClick={onClickSendMessage}>send</button>
            </div>
        </div>
    );
}

export default Dialogs;