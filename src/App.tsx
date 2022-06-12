import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {RootStateType} from "./redux/state";

type AppPropsType = {
    state: RootStateType
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
}

const App: React.FC<AppPropsType> = ({state, addPost, updateNewPostText}) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path='/profile'
                           render={ () => <Profile profilePage={state.profilePage}
                                                   addPost={addPost}
                                                   updateNewPostText={updateNewPostText}/>}/>
                    <Route path='/dialogs'
                           render={ () => <Dialogs dialogsPage={state.dialogsPage}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
