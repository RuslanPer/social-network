import {ActionsType} from "./redux-store";


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export type PostType = {
    id: number
    message: string
    likesCount: number
}

const initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 0},
        {id: 2, message: "It's my first post", likesCount: 5},
    ] as Array<PostType>,
    newPostText: ''
}

export type initialStateType = typeof initialState

const profileReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: new Date().getTime(),
                message: action.postMessage,
                likesCount: 2
            }
            return {...state, posts: [newPost, ...state.posts], newPostText: ''}
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText}
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