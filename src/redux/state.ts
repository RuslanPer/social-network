type ActionType = {
    type: string,
    newText: string,
}

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 0},
                {id: 2, message: "It's my first post", likesCount: 5},
            ],
            newPostText: 'Hello world'
        },

        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 7, name: 'Ruslan'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yo'},
            ],
        }
    },

    _callSubscriber(state: any) {
        debugger;
        console.log('State changed');
    },

    getState() {
        return this._state;
    },

    subscribe(observer: any) {
        this._callSubscriber = observer;
    },

    dispatch(action: ActionType) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';

            this._callSubscriber(this._state);
        }else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    },


}

export default store;