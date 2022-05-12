import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

type AppPropsType = {
    state: {
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
    },

    addPost: (postMessage: string) => void,
}

function App(props: AppPropsType) {
    console.log(props)
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path='/profile'
                           render={ () => <Profile state={props.state.profilePage} addPost={props.addPost}/>}/>
                    <Route path='/dialogs'
                           render={ () => <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path='/news' render={ () => <News />}/>
                    <Route path='/music' render={ () => <Music />}/>
                    <Route path='/settings' render={ () => <Settings />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
