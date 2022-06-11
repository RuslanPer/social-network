import React from 'react';
import style from './Header.module.css';

const Header: React.FC = () => {
    return (
        <header className={style.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png" alt="logo"/>
        </header>
    );
}

export default Header;