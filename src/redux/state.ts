const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export type PostType = {
    id: number
    message: string
    likesCount: number
}
type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}
export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}
export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    getState: () => RootStateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}

export type ActionsType = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator>


export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 0},
                {id: 2, message: "It's my first post", likesCount: 5},
            ],
            newPostText: ''
        },

        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Victor'},
                {id: 2, name: 'Igor'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
            ],
        }
    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state
    },
    subscribe (observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if(action.type === ADD_POST) {
            let newPost: PostType = {
                id: new Date().getTime(),
                message: action.postMessage,
                likesCount: 2
            }
            this._state.profilePage.posts.unshift(newPost)
            this._callSubscriber()
        } else if(action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber()
        }
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