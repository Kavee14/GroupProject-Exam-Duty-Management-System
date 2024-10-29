import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import Sidebar from '../../components/admin components/AdminSidebar';
import Header from '../../components/main components/Header';
import Footer from '../../components/main components/Footer';
import logo from '../../assets/logo.png';
import './AdminDashboard.css';

function AdminDashboard() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
    const activePage = "AssignDuties";

    const names = ["W.A.B.C.D.Ranasinghe", "D.M.K.N.Dissanayake", "A.N.B.C.Senanayake"];
    const courseNames = ["Computer Science", "Mathematics", "Chemistry","Physics","Zoology","Botany"];
    const courseCodes = ["COM1123", "COM1123", "COM1213","COM1223","MAT1232","MAT1212","MAT1321","PHY2112","PHY222"];
    const venues = ["Alawattagoda Premadasa Auditorium", "Science Library","MLT1","MLT2","PLT1","PLT2","Botany Hall"];

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
                        <Card className="exam-duty-assign mb-4">
                            <Card.Body>
                                <div className="pl-3">
                                    <img src={logo} alt="EMS Logo" className="logo" />
                                </div>
                                <h1 className="section-title">Exam Duty Assign</h1>
                                <Form onSubmit={handleSubmit}>
                                    {/* Name */}
                                    <Form.Group as={Row} controlId="formName" className="mb-3">
                                        <Form.Label column sm={3} className="label-container">
                                            <div className="label-text">Name</div>
                                            <span className="colon">:</span>
                                        </Form.Label>
                                        <Col sm={9}>
                                            <Form.Select>
                                                {names.map((name, idx) => (
                                                    <option key={idx} value={name}>{name}</option>
                                                ))}
                                            </Form.Select>
                                        </Col>
                                    </Form.Group>

                                    {/* Course Name */}
                                    <Form.Group as={Row} controlId="formSubject" className="mb-3">
                                        <Form.Label column sm={3} className="label-container">
                                            <div className="label-text">Course Name</div>
                                            <span className="colon">:</span>
                                        </Form.Label>
                                        <Col sm={9}>
                                            <Form.Select>
                                                {courseNames.map((courseName, idx) => (
                                                    <option key={idx} value={courseName}>{courseName}</option>
                                                ))}
                                            </Form.Select>
                                        </Col>
                                    </Form.Group>

                                    {/* Course Code */}
                                    <Form.Group as={Row} controlId="formSubjectCode" className="mb-3">
                                        <Form.Label column sm={3} className="label-container">
                                            <div className="label-text">Course Code</div>
                                            <span className="colon">:</span>
                                        </Form.Label>
                                        <Col sm={9}>
                                            <Form.Select>
                                                {courseCodes.map((courseCode, idx) => (
                                                    <option key={idx} value={courseCode}>{courseCode}</option>
                                                ))}
                                            </Form.Select>
                                        </Col>
                                    </Form.Group>

                                    {/* Date */}
                                    <Form.Group as={Row} controlId="formDate" className="mb-3">
                                        <Form.Label column sm={3} className="label-container">
                                            <div className="label-text">Date</div>
                                            <span className="colon">:</span>
                                        </Form.Label>
                                        <Col sm={9}>
                                            <Form.Control type="date" />
                                        </Col>
                                    </Form.Group>

                                    {/* Start Time */}
                                    <Form.Group as={Row} controlId="formStartTime" className="mb-3">
                                        <Form.Label column sm={3} className="label-container">
                                            <div className="label-text">Start Time</div>
                                            <span className="colon">:</span>
                                        </Form.Label>
                                        <Col sm={9}>
                                            <Form.Control type="time" />
                                        </Col>
                                    </Form.Group>

                                    {/* End Time */}
                                    <Form.Group as={Row} controlId="formEndTime" className="mb-3">
                                        <Form.Label column sm={3} className="label-container">
                                            <div className="label-text">End Time</div>
                                            <span className="colon">:</span>
                                        </Form.Label>
                                        <Col sm={9}>
                                            <Form.Control type="time" />
                                        </Col>
                                    </Form.Group>

                                    {/* Venue */}
                                    <Form.Group as={Row} controlId="formVenue" className="mb-3">
                                        <Form.Label column sm={3} className="label-container">
                                            <div className="label-text">Venue</div>
                                            <span className="colon">:</span>
                                        </Form.Label>
                                        <Col sm={9}>
                                            <Form.Select>
                                                {venues.map((venue, idx) => (
                                                    <option key={idx} value={venue}>{venue}</option>
                                                ))}
                                            </Form.Select>
                                        </Col>
                                    </Form.Group>

                                    <Button variant="primary" type="submit" className="mt-3">
                                        Assign
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

export default AdminDashboard;