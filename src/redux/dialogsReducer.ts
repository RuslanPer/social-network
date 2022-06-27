import {ActionsType, DialogsPageType} from "./state";

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

const dialogsReducer = (state: DialogsPageType, action: ActionsType) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText
            return state;
        case SEND_MESSAGE:
            let text = state.newMessageText;
            state.newMessageText = '';
            state.messages.push({id: 5, message: text})
            return state;
        default:
            return state;
    }

}

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    } as const
}
export const updateNewMessageTextActionCreator = (newText: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: newText
    } as const
}

export default dialogsReducer;