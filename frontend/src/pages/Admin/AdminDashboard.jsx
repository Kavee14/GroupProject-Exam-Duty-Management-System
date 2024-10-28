import React, {useState} from "react";
import Sidebar from "../../components/admin components/AdminSidebar";
import Header from "../../components/main components/Header";
import {Container, Row} from "react-bootstrap";

const AdminDashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  const activePage = "Admin Dashboard";
  return (
      <Container fluid className="main-container">
        <Row>
          <Sidebar isOpen={isSidebarOpen} />
          <div className={`main-content ${isSidebarOpen ? 'shifted' : ''}`}>
            <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} activePage={activePage}/>

            <div>Admin</div>
          </div>
        </Row>
      </Container>
    )
}

export default AdminDashboard;