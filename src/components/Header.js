import React from 'react';
import "../App.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png';


function Header() {
    return (
        <div>
            <Container fluid className='header-nav' >
                <Row>
                    <Col lg={5}>
                        <Navbar >
                            <Container>
                                <Navbar.Brand href="#home">
                                    <img
                                        alt=""
                                        src={logo}
                                        max-width="100%"
                                       
                                        width="130px"

                                        className="nav-image"
                                    />

                                </Navbar.Brand>
                            </Container>
                        </Navbar>

                    </Col>
                    <Col lg={5}>
                        <Navbar collapseOnSelect  style={{ color: "#f4ede4" }}  >
                            <Container>
                               

                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link href="#features">product</Nav.Link>
                                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                                        <Nav.Link href="#pricing">Solutions</Nav.Link>
                                        <Nav.Link href="#pricing">Customers</Nav.Link>
                                        <Nav.Link href="#pricing">Resources</Nav.Link>
                                        

                                       
                                    </Nav>
                                    
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>

                    </Col>
                    <Col lg={2}>
                    <div><a href='###' className='btn-button'>Get stated</a></div>
                    </Col>
                </Row>
            </Container>



        </div>
    )
}

export default Header
