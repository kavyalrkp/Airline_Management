import React from "react";
import { Container, Row, Col} from 'reactstrap';
import food from "../assets/Images/food.jpg"
import baggage from "../assets/Images/baggage.jpg"
import service from "../assets/Images/service.jpg"

const Home = () => {
        const handleClick = () => {
          
          //window.location.href = 'https://example.com';
        }
      

    return <>
    
    <section>
        <Container>
            <Row>
            
                <Col>
                <div className="food">
                <img src={food} alt ="Food and Beverages" onClick={handleClick} />
                <h4>Food and Beverages</h4>
                </div>
                </Col>
                <Col>
                <div className="baggage">
                <img src={baggage} alt ="Baggage" onClick={handleClick}/>
                <h4>Baggage</h4>
                </div>
                </Col>
                <Col>
                <div className="service">
                <img src={service} alt ="Airport services" onClick={handleClick}/>
                <h4>Airport services</h4>
                </div>
                </Col>
            
            </Row>
        </Container>
    </section>

    
    </>

};
export default Home;