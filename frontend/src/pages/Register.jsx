import React, { useState } from "react";
import { Container, Row , Col, Form, FormGroup, Button} from "reactstrap";
import axios from "axios";


const Register = () => {

    const [credentials, setCredentials]=useState({
        username:'',
        email:'',
        password:''

    });
    const handleChange = e =>{
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
        };

    const handleClick = async (e) => {
        e.preventDefault();

        try{
            const response = await axios.post("http://localhost:4000/api/auth/register", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(credentials)})

            const data = await response.json();
           
            if (response.ok) {
                alert(data.message);
                setCredentials({
                    username: '',
                    email: '',
                    password: ''
                  });
                } else {
                    alert(data.message);
                  }

            console.log('Response:', response.data);
        }catch (err) {
            console.error('Error:', err.response ? err.response.data : err.message);
        }
         //Register logic
         if (!credentials.username || !credentials.email || !credentials.password) {
            alert("All fields are required!");
            return;
          }   

        console.log('Credentials:', credentials);
        };
    return <section>
        <Container>
           <Row>
             <Col lg='6' className="m-auto">
               <div className="register_container">
                <div className="register_form">
                    
                        <h2>Register</h2>

                        <Form>
                            <div className="username">
                            <FormGroup>
                                <input type="name" placeholder="Username" required id="username"
                                 onChange={handleChange}/>
                            </FormGroup>
                            </div>
                            <div className="email">
                            <FormGroup>
                                <input type="email" placeholder="Email" required id="email"
                                 onChange={handleChange}/>
                            </FormGroup>
                            </div>
                            <div className="password">
                            <FormGroup>
                                <input type="password" placeholder="Password" required id="password"
                                 onChange={handleChange}/>
                            </FormGroup>
                            </div>
                           
                            <Button className="btn primary_btn auth_btn"
                            type="submit" onClick={handleClick}>Register</Button>
                          


                        </Form>
                        
                    
                </div>
               
               </div>
             </Col>

            </Row> 
        </Container>
    </section>
  

};
export default Register;