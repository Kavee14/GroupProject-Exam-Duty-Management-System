import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form} from 'react-bootstrap';
import logo from '../../assets/logo.png';
import Sidebar from '../../components/admin components/AdminSidebar';
import Header from '../../components/main components/Header';
import Footer from '../../components/main components/Footer';
import './UploadPdfs.css';
function UploadPdfs() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
    const activePage = "ADMIN DASHBOARD";
    const handleUpload = (label) => {
            alert(`${label} uploaded!`);
        };
    const handleView =()=>{

    };



        return (
        <Container fluid className="main-container">
            <Row>
                <Sidebar isOpen={isSidebarOpen} />
                <div className={`main-content ${isSidebarOpen ? 'shifted' : ''}`}>
                    <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} activePage={activePage} />

                    <Container fluid className="d-flex justify-content-center align-items-center min-vh-100 bg-light mt-md-5">
                        <Card style={{ width: '728px', height: '573px' }} className="shadow">
                            <Card.Body className="d-flex flex-column align-items-center">
                                <img src={logo} alt="EMS Logo" className="mb-4" style={{ width: '100px' }} />
                                <h2 className="text-title pb-5">Upload Exam Duty Pdfs</h2>

                                <Form className="w-100 px-5">
                                    {/* Exam Duty Schedule Upload */}
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm={5} className="text-start pe-3">
                                            Exam Duty Schedule:
                                        </Form.Label>
                                        <Col sm={5} className="text-start">
                                            <Button variant="primary btn-sm" onClick={() => handleUpload('Exam Duty Schedule')}>Upload</Button>
                                        </Col>
                                    </Form.Group>

                                    {/* Voucher Upload */}
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm={4} className="text-start pe-3">
                                            Voucher:
                                        </Form.Label>
                                        <Col sm={7} className="text-end">
                                            <Button variant="primary btn-sm " onClick={() => handleUpload('Voucher')}>Upload</Button>
                                        </Col>
                                    </Form.Group>

                                    {/* Report Upload */}
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm={4} className="text-start pe-3">
                                            Report:
                                        </Form.Label>
                                        <Col sm={7} className="text-start">
                                            <Button variant="primary btn-sm" onClick={() => handleUpload('Report')}>Upload</Button>
                                            <Button variant="primary btn-sm" onClick={() => handleView('Report')}>View</Button>
                                        </Col>
                                    </Form.Group>
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

export default UploadPdfs;