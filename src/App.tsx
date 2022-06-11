import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {StateType} from "./redux/state";

type AppPropsType = {
    state: StateType,
    addPost: (postMessage: string) => void
}

const App: React.FC<AppPropsType> = ({state, addPost}) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path='/profile'
                           render={ () => <Profile profilePage={state.profilePage} addPost={addPost}/>}/>
                    <Route path='/dialogs'
                           render={ () => <Dialogs dialogsPage={state.dialogsPage}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
