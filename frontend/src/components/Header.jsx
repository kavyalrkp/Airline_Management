import React from "react";
import plane from'../assets/Images/flight.jpg'
import {Link} from 'react-router-dom'
import { Container, Row, Button} from 'reactstrap'
import SearchBar from "../shared/SearchBar";

const Header = () => {

    return (
          <>  
          
          <header className="header">
            <Container>
                <Row>
                      <div className="nav_right d-flex align-items-center gap-4">
                      <div className="nav_btns d-flex align-items-center gap-4">
                      <div className="nav_btns d-flex align-items-center gap-4">
                           <Button className="btn home"><Link to='/'>Home</Link></Button>
                           <Button className="btn primary_btn"><Link to='/register'>Register</Link></Button>
                           <Button className="btn secondary_btn"><Link to='/login'>Login</Link></Button>
                      </div>
                      </div>
                      </div>
                </Row>
            </Container> 

        </header> 
             
          <div className="plane">
          <img src={plane} alt="" />
          </div>
          <SearchBar />  
          </>
    )
};
export default Header;