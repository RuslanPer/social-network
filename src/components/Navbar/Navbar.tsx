import React from 'react';
import s from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}><a href="src/components/Navbar/Navbar#"></a>Profile</div>
            <div className={s.item}><a href="src/components/Navbar/Navbar#"></a>Messages</div>
            <div className={s.item}><a href="src/components/Navbar/Navbar#"></a>News</div>
            <div className={s.item}><a href="src/components/Navbar/Navbar#"></a>Music</div>
            <div className={s.item}><a href="src/components/Navbar/Navbar#"></a>Settings</div>
        </nav>
    );
}

export default Navbar;