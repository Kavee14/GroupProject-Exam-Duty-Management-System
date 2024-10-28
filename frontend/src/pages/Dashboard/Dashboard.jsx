import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Sidebar from "../../components/main components/Sidebar";
import Header from "../../components/main components/Header";
import UpcomingDuties from '../../components/dashboard components/UpcomingDuties';
import Updates from '../../components/dashboard components/Updates';
import Calendar from '../../components/dashboard components/Calendar';
import RequestButton from '../../components/dashboard components/RequestButton';
import Footer from '../../components/main components/Footer';
import './Dashboard.css';


const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  const activePage = "Dashboard";
    return (
        <Container fluid className="main-container">
            <Sidebar isOpen={isSidebarOpen} />
            <Row>
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
