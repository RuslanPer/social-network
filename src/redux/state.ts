let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 0},
            {id: 2, message: "It's my first post", likesCount: 5},
            {id: 3, message: "Hello world", likesCount: 12},
        ],
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
}

export default state;