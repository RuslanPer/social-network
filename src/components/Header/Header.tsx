import React from 'react';
import s from './Header.module.css';

function Header() {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img src="http://demo.foxthemes.net/socialitev2.2/assets/images/logo.png" alt="logo"/>
            </div>
        </header>
    );
}

export default Header;