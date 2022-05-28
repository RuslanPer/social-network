import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './styles/reset.css';
import './styles/common.css';
import {ProfilePageType, DialogsPageType} from './redux/state'

type rerenderEntireTreePropsType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

let rerenderEntireTree = (state: rerenderEntireTreePropsType) => {
    ReactDOM.render(
        <App state={state} dispatch={store.dispatch.bind(store)} />,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

