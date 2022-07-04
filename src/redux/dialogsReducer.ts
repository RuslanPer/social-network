import {ActionsType} from "./store";


const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}
export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageText: string
}

const initialState: DialogsPageType = {
    dialogs: [
        {id: 1, name: 'Victor'},
        {id: 2, name: 'Igor'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
    ],
    newMessageText: ''
}

const dialogsReducer = (state: DialogsPageType = initialState , action: ActionsType) => {
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