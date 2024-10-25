import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import LoginButton from '../login components/LoginButton';
import './NavBar1Styles.css';
import UniLogo from '../../assets/UniLogo.png'

const CustomNavbar = () => {
    return (
        <Navbar bg="light" expand="lg" className="shadow-sm">
            <Container>
                {/* Logo on the left side */}
                <Navbar.Brand href="/">
                    <img
                        src={UniLogo}
                        className="navbar-brand-logo"
                        alt="UOR Logo"
                    />
                </Navbar.Brand>

                {/* Responsive toggle button (hamburger icon) */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                {/* Collapsible navbar */}
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="align-items-center">
                        <Nav.Item className="me-3">
                            <span >You are not logged in</span>
                        </Nav.Item>

                        <LoginButton />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;
