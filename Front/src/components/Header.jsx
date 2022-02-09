import React, { Component } from 'react';
import {Link} from 'react-scroll';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default class Header extends Component {
    render(){
    return (
        <div className="Header">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand style={{cursor:"pointer"}}><Link to="home" >Demarqui</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link><Link to="about">About-Me</Link></Nav.Link>
                <Nav.Link><Link to='projects'>Projects</Link></Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link><Link to="contact">Contact</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )}
}