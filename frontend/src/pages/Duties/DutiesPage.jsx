import React, {useState} from 'react';
import { Container, Row, Col, Card, Button, Form, InputGroup, Image } from 'react-bootstrap';
import { FaChevronDown, FaSearch, FaTimes } from 'react-icons/fa';
import Sidebar from "../../components/Main components/Sidebar";
import Header from "../../components/Main components/Header";
import Footer from "../../components/Main components/Footer.jsx";
import pdf from '../../assets/pdf.png'
import './DutiesPage.css';

function DutiesPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const requests = [
    { id: 1, name: 'W.A.B.C.D.Ranasinghe' },
    { id: 2, name: 'D.M.K.N.Dissanayake' },
    { id: 3, name: 'A.N.B.C.Senanayake' },
  ];

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const activePage = "Duties";
  const handleDownloadSchedule = () => alert('Downloading schedule...');
  const handleAccept = (id) => alert(`Accepted request from ID ${id}`);

  return (
      <Container fluid className="main-container">
        <Row>
          <Sidebar isOpen={isSidebarOpen} />
          <div className={`main-content ${isSidebarOpen ? 'shifted' : ''}`}>
            <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} activePage={activePage} />


            <Container fluid className="content-container">
              {/* Exam Duty Schedule Section */}
              <Card className="exam-duty-schedule mb-4">
                <Card.Body>
                  <h1 className="section-title">Exam Duty Schedule</h1>
                  <br/>
                    <Row className="align-items-center">
                      <Col md={2}>
                      <Image src={pdf} rounded fluid />
                    </Col>
                    <Col md={10}>
                      <Row className="align-items-center">
                        <Col md={6}>
                          <p style={{ display: 'inline' }}>Do you want to see the schedule?</p>
                        </Col>
                        <Col md={4}>
                          <Button variant="primary" className="ViewButton" onClick={handleDownloadSchedule} style={{ marginLeft: '10px' }}>
                            View
                          </Button>
                        </Col>
                      </Row>
                      <Row className="align-items-center">
                        <Col>
                          <p style={{ display: 'inline' }}>Do you want to download the schedule?</p>
                        </Col>
                        <Col className="d-flex align-items-center">
                          <Button variant="primary" onClick={handleDownloadSchedule} style={{ marginLeft: '10px' }}>
                            Download
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>

              {/* Add Substitutes Section */}
              <Card className="add-substitute mb-4">
                <Card.Body>
                  <h2 className="section-title">Add Substitutes</h2>
                <br/>
                  <p className="center-text" >
                    If you have any personal issues regarding examination duty dates, you can exchange your duty date with a colleague.
                  </p>
                  <Form>
                    <InputGroup className="search-input-group">
                      <InputGroup.Text>
                        <FaChevronDown />
                      </InputGroup.Text>
                      <Form.Control type="text" placeholder="Search" />
                      <InputGroup.Text className="trailing-icon-1">
                        <FaSearch />
                      </InputGroup.Text>
                      <InputGroup.Text className="trailing-icon-2">
                        <FaTimes />
                      </InputGroup.Text>
                    </InputGroup>
                  </Form>
                </Card.Body>
              </Card>

              {/* Pending Requests Section */}
              <Card className="pending-requests mb-4">
                <Card.Body>
                  <h2 className="section-title">Pending Requests</h2>
                  <Card className="requests mt-3">
                    <Card.Body>
                      {requests.map(request => (
                          <Row key={request.id} className="align-items-center">
                            <Col md={8}>
                              {request.id}. {request.name} has sent a request
                            </Col>
                            <Col className="d-flex justify-content-end">
                              <Button
                                  variant="success"
                                  onClick={() => handleAccept(request.id)}
                                  style={{ marginLeft: '10px' }}
                              >
                                Accept
                              </Button>
                            </Col>
                          </Row>
                      ))}
                    </Card.Body>
                  </Card>
                </Card.Body>
              </Card>
            </Container>
         <Footer /> </div>
        </Row>
      </Container>
  );
}

export default DutiesPage;
