import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from './redux/state';

type rerenderEntireTreePropsType = {
    profilePage: {
        posts: {
            id: number,
            message: string,
            likesCount: number
        }[],
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

export let rerenderEntireTree = (state: rerenderEntireTreePropsType) => {

    ReactDOM.render(
        <App state={state} addPost={addPost}/>,
                document.getElementById('root')
    );
}