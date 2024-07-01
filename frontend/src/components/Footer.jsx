import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem, Button} from "reactstrap";
import { Link } from "react-router-dom";


const quick_links = [


    {
        path:"/",
        display:"Home",

    },
    {
        path: "/login",
        display:"Login",

    },
    {
        path: "/register",
        display:"Register",
    },
    {
        path:"/SearchBar",
        display:"Search Flights"
    }
]

const Footer = () => {
    const year = new Date().getFullYear()

    return(
         
         <footer className="footer">
            <hr></hr>
        <Container>
            <Row>
               <Col lg="3">
                 <div className="social_links d-flex align-items-center gap-4">
                    <h6>Follow us :</h6>
                    <span>
                        <Link className="i" to='#'><i class="ri-instagram-line"></i></Link>
                    </span>

                    <span>
                        <Link className="i" to='#'><i class="ri-facebook-circle-line"></i></Link>
                    </span>

                    <span>
                        <Link className="i" to='#'><i class="ri-twitter-line"></i></Link>
                    </span>


                 </div>
                

               </Col> 

               <Col lg='3'>
               <h5 className="footer_link-title">Quick Links</h5>

               <ListGroup className="footer_quick-links">
                {
                    quick_links.map((item, index) => (
                        <ListGroupItem key={index} className="ps-0 border-0">
                            <Link className="ql" to={item.path}>{item.display}</Link>
                        </ListGroupItem>
                    ))
                }
               </ListGroup>
               
               </Col>
              
               <Col lg="3">
               <h5 className="footer_link-title">Contact</h5>

                <ListGroup className="footer_quick-links">
                  
                  
                   <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                     <h7 className="mb-0 d-flex align-items-center gap-2">
                        <span><i className="ri-map-pin-line"></i></span>
                        Address:
                     </h7>

                     <p className="mb-0">Banglore, India</p>
                    </ListGroupItem>
                    
                    <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                     <h7 className="mb-0 d-flex align-items-center gap-2">
                        <span><i className="ri-mail-line"></i></span>
                        Email:
                     </h7>

                     <p className="mb-0">abc@gmail.com</p>
                    </ListGroupItem>
                    
                    <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                     <h7 className="mb-0 d-flex align-items-center gap-2">
                        <span><i className="ri-phone-line"></i></span>
                        Phone:
                     </h7>

                     <p className="mb-0">999-999-9999</p>
                    </ListGroupItem>
                     
                   </ListGroup>
                   

               </Col>
               
               <Col lg="3">
               <h5 className="footer_link-title">FAQ's</h5>
               <ListGroup className="footer_quick_links">

                <ListGroupItem className="ps-1 border-0">
                    <div className="faq">
                        <Col>
                        <Button className="btn q1"><Link to='/q1'>How to book a flight?</Link></Button>
                        <Button className="btn q2"><Link to='/q2'>How do I book a seat in the flight?</Link></Button>
                        <Button className="btn q3"><Link to='/q3'>How to order food in the flight?</Link></Button>
                        <Button className="btn q4"><Link to='/q4'>How to fast check-in in airport?</Link></Button>
                        </Col>
                   </div>
                </ListGroupItem>
               </ListGroup>
               </Col>

               <Col lg="12" className="text-center pt-5">
               <p className="copyright">Copyright {year}, design and developed by Kavya Lekha Bathula, All rights reserved.</p>
               </Col>
            </Row>

        </Container>
    </footer>
)
};
export default Footer;