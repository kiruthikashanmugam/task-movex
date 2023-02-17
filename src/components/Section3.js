import React from react;
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ReactDOM from "react-dom";
import Carousel from "flat-carousel";
import testmonial from "../images/testmonial.png";
import testimonials1 from "../images/testimonials1.png";
import testimonials2 from "../images/testimonials2.png";

function Section3() {
     const images = [
    {
      src:
           {testmonial}
    },
    {
      src:
       {testimonials1}
    },
    {
      src:
       {testimonials2}
    }
  ];
    return (
        
        <div>
            <Container>
                <Row>
                <div style={{ textAlign: "center" }}>
                        <h2 style={{ fontWeight: "700",marginTop:"20px" }}>Our Success Stories</h2>

                    </div>  
  
                </Row>

                <Row>
                     <Carousel>
      {images.map((image, index) => (
        <div
          key={index}
          className="demo-item"
          style={{ backgroundImage: "url(" + image.src + ")" }}
        />
      ))}
    </Carousel>
                </Row>
                
                </Container>
        </div>
    )
}

export default Section3
