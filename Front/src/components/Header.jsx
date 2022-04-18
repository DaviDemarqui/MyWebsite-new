import React, { Component } from 'react';
import {Link} from 'react-scroll';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Logo from '../img/D.jpg';

export default class Header extends Component {
    render(){
    return (
        <div className="Header">
            <Navbar collapseOnSelect expand="lg" id='nb'>
            <Container>
            <Navbar.Brand style={{cursor:"pointer"}}><Link to="home" ><img src={Logo} alt="Logo" className='d-logo'/><span> Demarqui</span></Link></Navbar.Brand>
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