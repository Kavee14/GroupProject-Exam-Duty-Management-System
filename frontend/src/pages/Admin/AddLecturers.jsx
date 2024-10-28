import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';  
import './AddLecturers.css';
import logo from './images/image.png'; 

function AddLecturers() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const activePage = "ADMIN DASHBOARD";

  // Sample data for dropdown lists
  const positions = ["Professor", "Associate Professor", "Lecturer", "Assistant Lecturer"];
  const departments = ["Mathematics", "Science", "History", "Computer Science"];

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
            {/* Lecturer Details Section */}
            <Card className="lecturer-details mb-4">
              <Card.Body>
                <div className="pl-3">
                  <img src={logo} alt="EMS Logo" className="logo" /> 
                </div>
                <h1 className="section-title">Lecturer Details</h1>
                <Form onSubmit={handleSubmit}>
                  {/* Name */}
                  <Form.Group as={Row} controlId="formName" className="mb-3">
                  <Form.Label column sm={3} className="label-container">
                      <div className="label-text">Name</div>
                      <span className="colon">:</span>
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control type="name" placeholder="Enter Email" />
                    </Col>
                  </Form.Group>

                  {/* Email */}
                  <Form.Group as={Row} controlId="formEmail" className="mb-3">
                  <Form.Label column sm={3} className="label-container">
                      <div className="label-text">Email</div>
                      <span className="colon">:</span>
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control type="email" placeholder="Enter Email" />
                    </Col>
                  </Form.Group>

                  {/* Phone Number */}
                  <Form.Group as={Row} controlId="formPhone" className="mb-3">
                  <Form.Label column sm={3} className="label-container">
                      <div className="label-text">Phone Number</div>
                      <span className="colon">:</span>
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control type="text" placeholder="Enter Phone Number" />
                    </Col>
                  </Form.Group>

                  {/* Address */}
                  <Form.Group as={Row} controlId="formAddress" className="mb-3">
                  <Form.Label column sm={3} className="label-container">
                      <div className="label-text">Address</div>
                      <span className="colon">:</span>
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control type="text" placeholder="Enter Address" />
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

                  <Button variant="primary" type="submit" className="mt-3">
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
