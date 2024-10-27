import React, { useState } from 'react';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/main components/Footer';
import NavBar1 from "../../components/main components/NavBar1";
import logo from "../../assets/logo.png"
import './Login.css';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate(); // Hook to redirect

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

    async function handleLogin() {
        try {
            let item = { email, password };
            let result = await fetch('http://127.0.0.1:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(item),
            });
            result = await result.json();

            if (String(result.status) === 'success') {
                localStorage.setItem('user-info', JSON.stringify(result.user));

                // Check usertype and navigate accordingly
                if (result.user.usertype === 'admin') {
                    navigate('/admin');
                } else {
                    navigate('/dashboard');
                }
            } else {
                setErrors({ credentials: 'Invalid email or password' });
            }
        } catch (error) {
            console.error("Login failed:", error);
            setErrors({ credentials: 'Something went wrong. Please try again.' });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            handleLogin();
        }
    };

    return (
        <div className="login-page">
            <NavBar1 />
            <Container className="mt-5 col-sm-8">
                <div className="login-container">
                    <Row className="justify-content-center">
                        <Col md={8} lg={8} className="login-box">
                            <div className="login-header text-center mb-4">
                                <img src={logo} alt="EMS Logo" className="ems-logo" />
                            </div>

                            <div className="text-center mb-4">
                                <h4 className="login-title1">Welcome To</h4>
                                <h2 className="login-title">Exam Duty Management System</h2>
                                <p className="login-subtitle">Please log into your account.</p>
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

                                <Row className="clear-section">
                                    <Col md={7}>
                                        <Form.Group controlId="formRememberMe">
                                            <Form.Check type="checkbox" label="Remember me" />
                                        </Form.Group>
                                    </Col>

                                    <Col md={5} className="text-right">
                                        <a href="/" className="clear-link">Do you want to clear?</a>
                                    </Col>
                                </Row>
                                <div className="d-grid gap-2">
                                    <Button variant="primary" type="submit" className="login-btn">
                                        Log In
                                    </Button>
                                </div>
                                <br />
                            </Form>
                            <div className="login-footer mt-3 text-center">
                                <p className="mt-2">
                                    New member here?{' '}
                                    <a href="/" className="register-link">
                                        Register Now
                                    </a>
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <br /><br />
                </div>
            </Container>
            <br /><br />
            <Footer />
        </div>
    );
}

export default LoginPage;
