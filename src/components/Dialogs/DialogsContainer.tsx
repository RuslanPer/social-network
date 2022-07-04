import React from 'react';
import {
    sendMessageActionCreator,
    updateNewMessageTextActionCreator
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from '../../StoreContext';
import {RootStateType} from "../../redux/store";


type DialogsPropsType = {}


const DialogsContainer: React.FC<DialogsPropsType> = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state: RootStateType = store.getState()
                    const onClickSendMessage = () => {
                        store.dispatch(sendMessageActionCreator())
                    }
                    const onChangeNewMessage = (text: string) => {
                        store.dispatch(updateNewMessageTextActionCreator(text))
                    }
                    return (
                        <Dialogs dialogsPage={state.dialogsPage}
                                 updateNewMessageText={onChangeNewMessage}
                                 sendMessage={onClickSendMessage}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;