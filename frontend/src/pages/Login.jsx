import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/main components/Footer';
import NavBar1 from "../components/main components/NavBar1";
import logo from "../assets/logo.png"
import './Login.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate(); // Hook to redirect

    // Hardcoded credentials (can be replaced with real API authentication)
    const validEmail = 'testuser@example.com';
    const validPassword = 'password321';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Validation logic
    const validateForm = () => {
        let formErrors = {};
        let isValid = true;

        if (!email) {
            isValid = false;
            formErrors.email = "Email is required";
        } else if (!emailRegex.test(email)) {
            isValid = false;
            formErrors.email = "Email address is invalid";
        }

        if (!password) {
            isValid = false;
            formErrors.password = "Password is required";
        } else if (password.length < 6) {
            isValid = false;
            formErrors.password = "Password must be at least 6 characters";
        }

        setErrors(formErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Check hardcoded credentials
            if (email === validEmail && password === validPassword) {
                setSubmitted(true);
                // Redirect to the dashboard page after login
                navigate('/dashboard');
            } else {
                setErrors({ credentials: 'Invalid email or password' });
                setSubmitted(false);
            }
        }
    };

    return (
        <div className="login-page">
            <NavBar1/>
            <Container className="mt-5">
                <div className="login-container">
                    <Row className="justify-content-center">
                        <Col md={8} className="login-box">
                            <div className="login-header text-center mb-4">
                                <img src={logo} alt="EMS Logo" className="ems-logo"/>
                            </div>

                            <div className="text-center mb-4">
                                <h5 className="login-title1">Welcome To</h5>
                                <h4 className="login-title">Exam Duty Management System</h4>
                                <p className="login-subtitle">Please log in to your account.</p>
                            </div>

                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        isInvalid={!!errors.email || !!errors.credentials}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                {/* Password Field */}
                                <Form.Group controlId="formPassword" className="mt-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Enter password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        isInvalid={!!errors.password || !!errors.credentials}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.password || errors.credentials}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <div className="checkbox">
                                <Row>
                                    <Col md={6} >
                                        <Form.Group controlId="formRememberMe">
                                            <Form.Check type="checkbox" label="Remember me"/>
                                        </Form.Group>
                                    </Col>
                                    <Col md={2}></Col>
                                    <Col md={4} className="text-right">
                                        <a href="/" className="clear-link">Do you want to clear?</a>
                                    </Col>
                                </Row>
                                    <br/></div>

                                <div className="d-grid gap-2">
                                    <Button variant="primary" type="submit" className="login-btn">
                                        Log In
                                    </Button>
                                </div>
                                <br/>
                            </Form>
                            <br/>
                            <div className="login-footer mt-3 text-center">
                                <p className="mt-2" color="#545454">
                                    New member here? {' '}
                                    <a href="/" className="register-link">
                                        Register Now
                                    </a>
                                </p>
                            </div>

                            {submitted && (
                                <Alert variant="success" className="mt-3 tesxt-center">
                                    Login successful!
                                </Alert>
                            )}
                        </Col>
                    </Row>
                    <br /><br />
                </div>
            </Container>
            <br /><br />
            <Footer />
        </div>
    );
};

export default LoginPage;