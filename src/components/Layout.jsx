import React from 'react';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';


const Layout = () => {
    return (
        <div className="layout">
            <Header className="header" />
            <Main className="main" />
            <Footer className="footer" />

        </div>
    );
};

export default Layout;