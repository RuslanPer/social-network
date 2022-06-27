import {ActionsType, PostType, ProfilePageType} from "./state";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state: ProfilePageType, action: ActionsType) => {
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