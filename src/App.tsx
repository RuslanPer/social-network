import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {StoreType} from "./redux/state";

type AppPropsType = {
    store: StoreType
}

const App: React.FC<AppPropsType> = ({store}) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path='/profile'
                           render={ () => <Profile profilePage={store.getState().profilePage}
                                                   dispatch={store.dispatch.bind(store)}/>}/>
                    <Route path='/dialogs'
                           render={ () => <Dialogs dialogsPage={store.getState().dialogsPage}
                                                   dispatch={store.dispatch.bind(store)}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;