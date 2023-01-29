import React from 'react';
import NavBar from './NavBar';
import '../styles/Header.scss';

const Header = () => {
    return (
        <header>
            <div className="header_div ">
                <h1 className="header_h1">Anna Petelin</h1>
            </div>
            <NavBar />
        </header>
    );
};

export default Header;