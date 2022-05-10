import React from 'react';
import s from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}><a href="#"></a>Profile</div>
            <div className={s.item}><a href="#"></a>Messages</div>
            <div className={s.item}><a href="#"></a>News</div>
            <div className={s.item}><a href="#"></a>Music</div>
            <div className={s.item}><a href="#"></a>Settings</div>
        </nav>
    );
}

export default Navbar;