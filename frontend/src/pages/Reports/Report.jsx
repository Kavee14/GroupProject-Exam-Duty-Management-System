import React, {useEffect, useState} from 'react';
import "./Report.css";
import Footer from '../../components/main components/Footer';
import {Card, Container, Row} from 'react-bootstrap';
import Sidebar from "../../components/main components/Sidebar";
import Header from '../../components/main components/Header';
import api from '../../axiosConfig';
import ShowDuties from "./ShowDuties";
import DownloadDutiesReport from "./DownloadDutiesReport";

const Report = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [duties, setDuties] = useState([]);
    const [dutiesData, setDutiesData] = useState([]);
    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
    const [userId, setUserId] = useState(null)
    const [downloadDuties, setDownloadDuties] = useState(false)

    const activePage = "Voucher & Report";

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user-info'))
        console.log(user)
        setUserId(user.id)
    }, []);

    const fetchReport = async (reportType) => {
        try {
            const response = await api.get(`/v1/show/${reportType}/${userId}`)
                .then((response) => {
                        setDuties(response.data.data);
                        console.log(response.data.data)
                    }
                )

        } catch (error) {
            if (error.response) {
                alert(`Failed to fetch report: ${error.response.data.message || 'Unknown error'}`);
            } else {
                alert('Failed to fetch report: ' + error.message);
            }
        }
    };

    const handleDownload = async (reportType) => {
        try {
            const response = await api.get(`/v1/show/${reportType}/${userId}`)
                .then((response) => {
                        setDutiesData(response.data.data);
                        console.log(response.data.data)
                    }
                )

        } catch (error) {
            if (error.response) {
                alert(`Failed to fetch report: ${error.response.data.message || 'Unknown error'}`);
            } else {
                alert('Failed to fetch report: ' + error.message);
            }
        }

        setDownloadDuties(true)
    };

    return (
        <Container fluid className="main-container">
            <Row>
                <Sidebar isOpen={isSidebarOpen}/>
                <div className={`main-content ${isSidebarOpen ? 'shifted' : ''}`}>
                    <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} activePage={activePage}/>

                    {
                        !duties.length > 0
                            ?
                            <Container fluid className="content-container">
                                <Card className="voucher mb-4">
                                    <Card.Body>
                                        <h2 className="blue-text">Voucher</h2>
                                        <div className="thick-line"></div>
                                        <div className="actions">
                                            <div className="action-items">
                                                <p><i className="fas fa-file-pdf"></i> View the voucher</p>
                                                <p><i className="fas fa-download"></i> Download the voucher</p>
                                            </div>
                                            <div className="buttons">
                                                <button onClick={() => fetchReport('voucher')}>See More</button>
                                                <button onClick={handleDownload}>Download</button>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>

                                <Card className="report mb-4">
                                    <Card.Body>
                                        <h2 className="blue-text">Report</h2>
                                        <div className="thick-line"></div>
                                        <div className="actions">
                                            <div className="action-items">
                                                <p><i className="fas fa-file-pdf"></i> View the Report</p>
                                                <p><i className="fas fa-download"></i> Download the Report</p>
                                            </div>
                                            <div className="buttons">
                                                <button onClick={() => fetchReport('duties')}>See More</button>
                                                <button onClick={() => handleDownload('duties')}>Download</button>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>

                            </Container>
                            :
                            <ShowDuties duties={duties}/>
                    }

                    <DownloadDutiesReport duties={dutiesData} downloadDuties={downloadDuties} setDownloadDuties={setDownloadDuties}/>
                    <Footer/>
                </div>
            </Row>
        </Container>
    );
};

export default Report;
