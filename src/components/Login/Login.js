import React, { useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';
import './Login.css'

const Login = () => {
    // firebase authentication
    const {signInUsingGoogle, processLogin, isLoading , error } = useAuth();

    
    // set user's email and password values for log in
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    

    // get email and password values for log in
    const handleEmailChange = e => {
      setEmail(e.target.value);
    };

    const handlePasswordChange = e => {
      setPassword(e.target.value)
    }


    const handleLogin = e => {
        e.preventDefault();
        processLogin(email,password,navigate, redirect_uri);
      }
  
    // redirect history for returning from log in page to where user came
    const location = useLocation();
    const navigate = useNavigate();
    const redirect_uri = location.state?.from || '/home';


    // google sign in
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
        .then(result => {
          navigate(redirect_uri);
        })
      }
      
    return (
        <div className='login-container'>
        <Header></Header>
            <div className='m-4'>
                <div className="login-form-container container">
                    <h1>Please Login</h1>
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
                        </Form.Group>
                        <p style={{color: 'red'}}>{error}</p>
                        <p>
                            { isLoading && <Spinner animation="border" variant="primary" /> }
                        </p>
                        <Button className="login-btn" type="submit">
                            Log In
                        </Button>
                        <p className="m-0 pt-3">Not Register Yet? <Link to="/register">Please Register Here</Link></p>
                        <div>
                            <p className="m-0 pt-3 pb-3">or</p>
                            <button onClick={handleGoogleSignIn} className="btn btn-warning"><i className="fab fa-google"></i>oogle Sign In</button>
                        </div>
                    </Form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;