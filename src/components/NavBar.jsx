import React from 'react';
import { Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavBar = () => {
    return (
        <Navbar>
            <NavbarBrand></NavbarBrand>
            <Nav>
                <LinkContainer to="/"><NavLink>Home</NavLink></LinkContainer>
                <LinkContainer to="/projects"><NavLink>Projects</NavLink></LinkContainer>
                <LinkContainer to="about"><NavLink>About</NavLink></LinkContainer>
                <LinkContainer to="contact"><NavLink>Contact</NavLink></LinkContainer>
                <LinkContainer to="blog"><NavLink>Contact</NavLink></LinkContainer>

            </Nav>

        </Navbar>
    );
};

export default NavBar;