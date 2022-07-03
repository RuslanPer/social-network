import React from 'react';
import {
    DialogsPageType,
    sendMessageActionCreator,
    updateNewMessageTextActionCreator
} from "../../redux/dialogsReducer";
import {ActionsType, RootStateType} from "../../redux/redux-store";
import {EmptyObject, Store} from "redux";
import {ProfilePageType} from "../../redux/profileReducer";
import Dialogs from "./Dialogs";


type DialogsPropsType = {
    store: Store<EmptyObject & { profilePage: ProfilePageType; dialogsPage: DialogsPageType; }, ActionsType>
}


const DialogsContainer: React.FC<DialogsPropsType> = ({store}) => {

    const state: RootStateType = store.getState()
    const onClickSendMessage = () => {
        store.dispatch(sendMessageActionCreator())
    }
    const onChangeNewMessage = (text: string) => {
        store.dispatch(updateNewMessageTextActionCreator(text))
    }

    return <Dialogs dialogsPage={state.dialogsPage}
                    updateNewMessageText={onChangeNewMessage}
                    sendMessage={onClickSendMessage}/>
}

export default DialogsContainer;