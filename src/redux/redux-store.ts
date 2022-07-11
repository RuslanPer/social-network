import {combineReducers, createStore} from "redux";
import profileReducer, {addPostActionCreator, updateNewPostTextActionCreator} from "./profileReducer";
import dialogsReducer, {sendMessageActionCreator, updateNewMessageTextActionCreator} from "./dialogsReducer";
import usersReducer, {followActionCreator, setUsersActionCreator, unfollowActionCreator} from "./usersReducer";

export type ActionsType = ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof updateNewPostTextActionCreator> |
    ReturnType<typeof sendMessageActionCreator> |
    ReturnType<typeof updateNewMessageTextActionCreator> |
    ReturnType<typeof followActionCreator> |
    ReturnType<typeof unfollowActionCreator> |
    ReturnType<typeof setUsersActionCreator>

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);