import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import Sidebar from '../../components/admin components/AdminSidebar';
import Header from '../../components/main components/Header';
import Footer from '../../components/main components/Footer';
import './AddLecturers.css';
import logo from '../../assets/logo.png';

function AddLecturers() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
    const activePage = "ADMIN DASHBOARD";

    // Sample data for dropdown lists
    const positions = ["Professor", "Associate Professor", "Lecturer", "Assistant Lecturer"];
    const departments = ["Computer Science", "Mathematics", "Physics", "Chemistry"];

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form Submitted!');
    };

    return (
        <Container fluid className="main-container">
            <Row>
                <Sidebar isOpen={isSidebarOpen} />
                <div className={`main-content ${isSidebarOpen ? 'shifted' : ''}`}>
                    <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} activePage={activePage} />

                    <Container fluid className="content-container">
                        <Card className="lecturer-details mb-4 px-5">
                            <Card.Body>
                                <div className="pl-3">
                                    <img src={logo} alt="EMS Logo" className="logo"/>
                                </div>
                                <h3 className="text-title pb-3 mt-3" style={{fontWeight: 'bold', textAlign:'center'}}>Lecturer Details</h3>
                                <br/>
                                <Form onSubmit={handleSubmit}>
                                    {/* Name */}
                                    <Form.Group as={Row} controlId="formName" className="mb-3">
                                        <Form.Label column sm={3} className="label-container">
                                            <div className="label-text">Name</div>
                                            <span className="colon">:</span>
                                        </Form.Label>
                                        <Col sm={9}>
                                            <Form.Control type="name" placeholder="Enter Full Name"/>
                                        </Col>
                                    </Form.Group>

                                    {/* Email */}
                                    <Form.Group as={Row} controlId="formEmail" className="mb-3">
                                        <Form.Label column sm={3} className="label-container">
                                            <div className="label-text">Email</div>
                                            <span className="colon">:</span>
                                        </Form.Label>
                                        <Col sm={9}>
                                            <Form.Control type="email" placeholder="Enter Email"/>
                                        </Col>
                                    </Form.Group>

                                    {/* Phone Number */}
                                    <Form.Group as={Row} controlId="formPhone" className="mb-3">
                                        <Form.Label column sm={3} className="label-container">
                                            <div className="label-text">Phone Number</div>
                                            <span className="colon">:</span>
                                        </Form.Label>
                                        <Col sm={9}>
                                            <Form.Control type="text" placeholder="Enter Phone Number"/>
                                        </Col>
                                    </Form.Group>

                                    {/* Address */}
                                    <Form.Group as={Row} controlId="formAddress" className="mb-3">
                                        <Form.Label column sm={3} className="label-container">
                                            <div className="label-text">Address</div>
                                            <span className="colon">:</span>
                                        </Form.Label>
                                        <Col sm={9}>
                                            <Form.Control type="text" placeholder="Enter Address"/>
                                        </Col>
                                    </Form.Group>

                                    {/* Position */}
                                    <Form.Group as={Row} controlId="formPosition" className="mb-3">
                                        <Form.Label column sm={3} className="label-container">
                                            <div className="label-text">Position</div>
                                            <span className="colon">:</span>
                                        </Form.Label>
                                        <Col sm={9}>
                                            <Form.Select>
                                                {positions.map((position, idx) => (
                                                    <option key={idx} value={position}>{position}</option>
                                                ))}
                                            </Form.Select>
                                        </Col>
                                    </Form.Group>

                                    {/* Department */}
                                    <Form.Group as={Row} controlId="formDepartment" className="mb-3">
                                        <Form.Label column sm={3} className="label-container">
                                            <div className="label-text">Department</div>
                                            <span className="colon">:</span>
                                        </Form.Label>
                                        <Col sm={9}>
                                            <Form.Select>
                                                {departments.map((department, idx) => (
                                                    <option key={idx} value={department}>{department}</option>
                                                ))}
                                            </Form.Select>
                                        </Col>
                                    </Form.Group>

                                    <Button variant="primary" type="submit" className="btn-sm mt-5">
                                        Submit
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Container>
                    <Footer />
                </div>
            </Row>
        </Container>
    );
}

export default AddLecturers;
