import {combineReducers, createStore} from "redux";
import profileReducer, {
    ProfilePageType,
    addPostActionCreator,
    updateNewPostTextActionCreator
} from "./profileReducer";
import dialogsReducer, {
    DialogsPageType,
    sendMessageActionCreator,
    updateNewMessageTextActionCreator
} from "./dialogsReducer";


export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type ActionsType = ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof updateNewPostTextActionCreator> |
    ReturnType<typeof sendMessageActionCreator> |
    ReturnType<typeof updateNewMessageTextActionCreator>



const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

export const store = createStore(reducers);