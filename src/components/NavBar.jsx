import React from 'react';
import { Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar>
            <NavbarBrand></NavbarBrand>
            <Nav>
                <NavLink></NavLink>
            </Nav>

        </Navbar>
    );
};

export default NavBar;