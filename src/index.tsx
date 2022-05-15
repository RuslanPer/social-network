import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import './styles/reset.css';
import './styles/common.css';

type rerenderEntireTreePropsType = {
    profilePage: {
        posts: {
            id: number,
            message: string,
            likesCount: number
        }[],

        newPostText: string,
    },
    dialogsPage: {
        dialogs: {
            id: number,
            name: string
        }[],
        messages: {
            id: number,
            message: string
        }[]
    }
}

let rerenderEntireTree = (state: rerenderEntireTreePropsType) => {

    ReactDOM.render(
        <App state={state} dispatch={store.dispatch.bind(store)} />,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

