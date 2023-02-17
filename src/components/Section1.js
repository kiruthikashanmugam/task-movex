import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import banner from "../images/banner1.png";

function Section1() {
  return (
    <div>
        <Container>
            <Row>
                <Col lg={8} className="section1" >
                <h1 className='banner-content'>Intelligent Transportation & Booking Software for Taxi Dispatch</h1>
                <p className="section1-content" >Just few seconds to set up your business on Amazon powered Cloud</p>
                <a href='###' className='button-larger'>Get free trial</a>
                <p className='section1-content'>Try free for 7 days. No risk and no credit card required.</p>
                
                </Col>
                <Col lg={4}>
                <img className='banner-image' src={banner} alt="banner"/>
                
                </Col>
            </Row>
        </Container>
      
    </div>
  )
}

export default Section1

