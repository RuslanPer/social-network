import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    ActionsType,
    DialogsPageType
} from "../../redux/state";
import {
    sendMessageActionCreator,
    updateNewMessageTextActionCreator
} from "../../redux/dialogsReducer";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionsType) => void
}

const Dialogs: React.FC<DialogsPropsType> = ({dialogsPage, dispatch}) => {

    let dialogsElements = dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    let messagesElements = dialogsPage.messages.map( m => <Message key={m.id} message={m.message}/>);

    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    const onClickSendMessageHandler = () => {
        if (newMessageElement.current) {
            dispatch(sendMessageActionCreator())
            dispatch(updateNewMessageTextActionCreator(''))
        }
    }
    const onChangeNewMessageHandler = () => {
        if (newMessageElement.current) {
            let text = newMessageElement.current.value
            dispatch(updateNewMessageTextActionCreator(text))
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
                          onChange={onChangeNewMessageHandler}
                          ref={newMessageElement}></textarea>
                <button onClick={onClickSendMessageHandler}>send</button>
            </div>
        </div>
    );
}

export default Dialogs;