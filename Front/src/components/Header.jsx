import {Navbar, Nav, Container} from 'react-bootstrap';

function Header() {
    return (
        // <div className="Header" id="myhd">
        //     <div className="menu-ul">
        //         <ul>
        //             <li><h1 className="hdr-logo">Demarqui.</h1></li>
        //             <li><a href="?">Software</a></li>
        //             <li><a href="?">Contact</a></li>
        //             <li><a href="?">About Me</a></li>
        //         </ul>
        //     </div>  
        // </div>
        <div className="Header">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Demarqui</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#pricing">About-Me</Nav.Link>
                <Nav.Link href="#pricing">Projects</Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
        
    )
}

export default Header;