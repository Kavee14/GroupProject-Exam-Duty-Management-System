import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Sidebar from "../../components/Main components/Sidebar";
import Header from "../../components/Main components/Header";
import UpcomingDuties from '../../components/Dashboard components/UpcomingDuties';
import Updates from '../../components/Dashboard components/Updates';
import Calendar from '../../components/Dashboard components/Calendar';
import RequestButton from '../../components/Dashboard components/RequestButton';
import Footer from '../../components/Main components/Footer';
import './Dashboard.css';


const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  const activePage = "Dashboard";
    return (
        <Container fluid className="main-container">
          <Row>
            <Sidebar isOpen={isSidebarOpen} />
            <div className={`main-content ${isSidebarOpen ? 'shifted' : ''}`}>
              <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} activePage={activePage}/>

              <Container fluid className="content-container">
                <div className="dashboard-content">
                  <div className="main-sections">
                    <div className="left-section">
                      <UpcomingDuties/>
                    </div>
                    <div className="right-section">
                      <Updates/>
                      <Calendar/>
                      <RequestButton/>
                    </div>
                  </div>
               </div>
              </Container>
            <Footer/>
            </div>
          </Row>
        </Container>
    )
};

export default Dashboard;
