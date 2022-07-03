import {ActionsType} from "./redux-store";


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}

const initialState:ProfilePageType = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 0},
        {id: 2, message: "It's my first post", likesCount: 5},
    ],
    newPostText: ''
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: new Date().getTime(),
                message: action.postMessage,
                likesCount: 2
            }
            state.posts.unshift(newPost)
            state.newPostText = ''
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = (text: string) => {
    return {
        type: ADD_POST,
        postMessage: text
    } as const
}
export const updateNewPostTextActionCreator = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}

export default profileReducer;