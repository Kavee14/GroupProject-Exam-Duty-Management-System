import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, InputGroup } from 'react-bootstrap';
import { FaChevronDown, FaSearch, FaTimes, FaDownload, FaEye, FaUserPlus } from 'react-icons/fa';
import Sidebar from "../../components/main components/Sidebar";
import Header from "../../components/main components/Header";
import Footer from "../../components/main components/Footer";
import './DutiesPage.css';

function DutiesPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const activePage = "Duties";

  const handleDownloadSchedule = () => alert('Downloading schedule...');
  const handleViewSchedule = () => alert('Viewing schedule...');
  const handleRequestSubstitute = () => alert('Requesting a substitute...');

  return (
      <Container fluid className="duties-page-container">
        <Sidebar isOpen={isSidebarOpen} />
        <Row>
          <div className={`main-content ${isSidebarOpen ? 'shifted' : ''}`}>
            <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} activePage={activePage} />
            <Container fluid className="content-container py-4">
            <Container className="content-wrapper">
              <Row className="section-row">
                <Col lg={6} className="section-col">
                  {/* Exam Duty Schedule Section */}
                  <Card className="schedule-card">
                    <Card.Body className="text-center">
                      <h3 className="card-title">Exam Duty Schedule</h3>
                      <p className="text-muted text-center">Quickly access or download your duty schedule.</p>
                      <div className="button-group mt-5">
                        <Button variant="primary" className="action-btn" onClick={handleViewSchedule}>
                          <FaEye className="me-2" /> View
                        </Button>
                        <Button variant="outline-primary" className="action-btn" onClick={handleDownloadSchedule}>
                          <FaDownload className="me-2" /> Download
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                <Col lg={6} className="section-col">
                  {/* Add Substitutes Section */}
                  <Card className="substitute-card">
                    <Card.Body>
                      <h3 className="card-title text-center">Add Substitutes</h3>
                      <p className="text-muted text-center">
                        Need a substitute? Connect with colleagues here.
                      </p>
                      <Form className="mt-3">
                        <InputGroup className="search-input-group mb-5">
                          <InputGroup.Text><FaChevronDown /></InputGroup.Text>
                          <Form.Control type="text" placeholder="Search colleagues" />
                          <InputGroup.Text><FaSearch /></InputGroup.Text>
                          <InputGroup.Text><FaTimes /></InputGroup.Text>
                        </InputGroup>
                        <Button variant="primary" className="w-50 request-btn " onClick={handleRequestSubstitute}>
                          <FaUserPlus className="me-2" /> Request
                        </Button>
                      </Form>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>

           </Container>
            <Footer />
          </div>
        </Row>
      </Container>
  );
}

export default DutiesPage;
