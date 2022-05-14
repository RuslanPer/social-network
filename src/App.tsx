import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

type AppPropsType = {
    state: {
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
    },

    addPost: () => void,
    updateNewPostText: (postMessage: string) => void,

}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path='/profile'
                           render={ () => <Profile profilePage={props.state.profilePage}
                                                   addPost={props.addPost}
                                                   updateNewPostText={props.updateNewPostText}/>}/>
                    <Route path='/dialogs'
                           render={ () => <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path='/news' />
                    <Route path='/music' />
                    <Route path='/settings' />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
