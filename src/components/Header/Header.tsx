import React from 'react';
import style from './Header.module.css';

const Header: React.FC = () => {
    return (
        <header className={style.header}>
            <div className={style.logo}>
                <img src="http://demo.foxthemes.net/socialitev2.2/assets/images/logo.png" alt="logo"/>
            </div>
        </header>
    );
}

export default Header;