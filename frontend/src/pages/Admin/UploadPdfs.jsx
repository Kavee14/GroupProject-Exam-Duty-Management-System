import React, { useState } from 'react';
import { Container, Row, Card, Button, Form } from 'react-bootstrap';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';  
import './UploadPdfs.css';
import logo from './images/image.png'; 

function UploadPdfs() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const activePage = "ADMIN DASHBOARD";

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
            {/* Exam Duty Schedule Section */}
            <Card className="exam-duty-pdfs mb-4">
              <Card.Body>
                <div className="pl-3">
                  <img src={logo} alt="EMS Logo" className="logo" /> 
                </div>
                <h1 className="section-title">Upload Exam Duty Pdfs</h1>
                <Form onSubmit={handleSubmit}>
                  
                  {/* Exam Duty Schedule Upload */}
                  <Form.Group as={Row} controlId="formExamDutySchedule" className="upload-container">
                   <Form.Label column sm={3} className="label-container">
                     <div className="label-text">Exam Duty Schedule</div>
                      <span className="colon">:</span>
                   </Form.Label>
                   <Button variant="primary" className="btn-upload">Upload</Button>
                  </Form.Group>
                  {/* Voucher Upload */}
                  <Form.Group as={Row} controlId="formVoucherUpload" className="upload-container">
                  <Form.Label column sm={3} className="label-container">
                      <div className="label-text">Voucher</div>
                      <span className="colon">:</span>
                    </Form.Label>
                    
                    <Button variant="primary" className="btn-upload">Upload</Button>
                  </Form.Group>

                  {/* Report Upload */}
                  <Form.Group as={Row} controlId="formReportUpload" className="upload-container">
                  <Form.Label column sm={3} className="label-container">
                      <div className="label-text">Report</div>
                      <span className="colon">:</span>
                    </Form.Label>
                    <Button variant="primary" className="btn-upload">Upload</Button>
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
