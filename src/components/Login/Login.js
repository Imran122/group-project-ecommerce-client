import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';
import './Login.css'

const Login = () => {
    return (
        <div className='login-container'>
        <Header></Header>
            <div className='m-4'>
                <div className="login-form-container container">
                    <h1>Please Login</h1>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        {/* <p style={{color: 'red'}}>{error}</p> */}
                        <p>
                            {/* { isLoading && <Spinner animation="border" variant="primary" /> } */}
                        </p>
                        <Button className="login-btn" type="submit">
                            Log In
                        </Button>
                        <p className="m-0 pt-3">Not Register Yet? <Link to="/register">Please Register Here</Link></p>
                        <div>
                            <p className="m-0 pt-3 pb-3">or</p>
                            <button className="btn btn-warning"><i className="fab fa-google"></i>oogle Sign In</button>
                        </div>
                    </Form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;