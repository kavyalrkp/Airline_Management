import React, { useState } from "react";
import { Container, Row , Col, Form, FormGroup, Button} from "reactstrap";
import { Link } from "react-router-dom";



const Login = () => {

    const [credentials, setCredentials]= useState({
        email:'',
        password:''

    });
    const handleChange = e =>{
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
        };
    const handleClick = (e) => {
        e.preventDefault();
         //login logic

        console.log('Credentials:', credentials);
    };

    return (
    <section>
        <Container>
           <Row>
             <Col lg='6' className="m-auto">
              <div className="login_container">
                <div className="login_form">
                    <div className="user">
                        <h2>Login</h2>
                        <Form onSubmit={handleClick}>
                            <FormGroup>
                                <input type="email" placeholder="Email" required id="email"
                                 onChange={handleChange}/>
                            </FormGroup>                          
                            <FormGroup>
                                <input type="password" placeholder="Password" required id="password"
                                 onChange={handleChange}/>
                            </FormGroup>
                           <Button className="btn secondary_btn auth_btn"
                            type="submit" onClick={handleClick}>Login</Button>
                        </Form>
                        <p className="s">Don't have an account? <Link to='/register'>Register</Link></p>
                    </div>
                </div>
              </div>
             </Col>
            </Row> 
        </Container>
    </section>
    );
};
export default Login;