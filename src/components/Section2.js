
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import pickme from "../images/pickme.png";
import avis from "../images/avis.png";
import disney from "../images/disney4.png";
import oway1 from '../images/oway1.png';

function Section2() {
    return (
        <div>
            <Container>
                <Row>
                    <div style={{ textAlign: "center" }}>
                        <h2 style={{ fontWeight: "700",marginTop:"20px" }}>Our Recent Clients</h2>
                        <span style={{ fontSize: "20px" }}>Our valuable customers across the world</span>
                    </div>
                </Row>
                <Row className="card-details">
                    <Col lg={3} >
                        <Card style={{ width: '16rem', background: "#f6f6f6", padding: "25px" }}>
                            <Card.Body>
                                <Card.Img variant="top" src={pickme} />
                                <h6 style={{marginTop:"10%",textAlign:"center"}}>Pickme</h6>

                                <Card.Text>
                                    <p>
                                        Sri Lanka's number-one ride-hailing platform
                                        </p>
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3}>
                        <Card style={{ width: '16rem', background: "#f6f6f6", padding: "22px" }}>
                            <Card.Body>
                                <Card.Img variant="top" src={avis} width="100%" height="50px" />
                                <h6 style={{marginTop:"10%",textAlign:"center"}}>Avis</h6>

                                <Card.Text>
                                    <p>
                                    Avis Rent a Car is South Africa's leading car rental company</p>
                                </Card.Text>

                            </Card.Body>

                        </Card>

                    </Col>
                    <Col lg={3}>
                        <Card style={{ width: '16rem', background: "#f6f6f6", padding: "22px" }}>
                            <Card.Body>
                                <Card.Img variant="top" src={disney} width="100%" height="100px"  />
 
                                <h6 style={{marginTop:"10%",textAlign:"center"}}>Disneyland</h6>

                                <Card.Text>
                                    <p>
                                    World's largest indoor shuttle operation for tourists</p>
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3}>
                        <Card style={{ width: '16rem', background: "#f6f6f6", padding: "29px" }}>
                            <Card.Body>
                                <Card.Img variant="top" src={oway1} />
                                <h6 style={{marginTop:"10%",textAlign:"center"}}>Oway</h6>
                                <Card.Text>
                                Myanmar's top-rated travel and transportation company
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>

        </div>
    )
}

export default Section2
