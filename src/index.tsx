import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RootStateType, store} from './redux/redux-store';


const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <App store={store}/>,
        document.getElementById('root')
    );
};

rerenderEntireTree(store.getState());

store.subscribe(()=>{
    const state = store.getState();
    rerenderEntireTree(state);
});