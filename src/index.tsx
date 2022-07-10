import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AppStateType, store} from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";



const rerenderEntireTree = (state: AppStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
};

rerenderEntireTree(store.getState());

store.subscribe(()=>{
    const state = store.getState();
    rerenderEntireTree(state);
});