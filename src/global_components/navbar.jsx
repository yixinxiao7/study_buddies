import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom';
=
export const renderNavBar = () =>{
    return(
        <Navbar className = "navbar-custom" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink to="/"><h1 className="light-blue header mx-3">Yixin Xiao</h1></NavLink>
                    <NavLink to="/"><p className = "white normal-text pt-3 mx-3">About Me</p></NavLink>
                    <NavLink to="/portfolio"><p className = "white py-auto normal-text pt-3 mx-3">Porfolio</p></NavLink>
                    <NavLink to="/research"><p className = "white py-auto normal-text pt-3 mx-3">Research</p></NavLink>
                    <NavLink to="/contactMe"><p className = "white py-auto normal-text pt-3 mx-3">Contact Me</p></NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
