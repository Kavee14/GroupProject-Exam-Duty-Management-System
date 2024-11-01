import React, { useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import {Container,Row,Col} from "react-bootstrap";
import Sidebar from "../../components/main components/Sidebar";
import Header from "../../components/main components/Header";
import Footer from "../../components/main components/Footer";
import "./Profile.css";

function ProfileSection({ name, setName, email, setEmail, phone, setPhone, address, setAddress }) {
    const [isEditingPersonalInfo, setIsEditingPersonalInfo] = useState(false);
    const [isEditingAcademicInfo, setIsEditingAcademicInfo] = useState(false);
    const [profileImage, setProfileImage] = useState("profile-picture.png"); // Default image

    // Academic info state
    const [position, setPosition] = useState("Lecturer (probationary)");
    const [department, setDepartment] = useState("Computer Science");

    const handleEditClick = (setEditMode) => {
        setEditMode(true);
    };

    const handleSaveClick = (setEditMode) => {
        setEditMode(false);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <section className="profile pt-5 ">
            <div className="profile-card">
                <div className="profile-image-container ">
                    <img src={profileImage} alt="Profile" className="profile-pic" />
                        <label htmlFor="imageUpload" className="edit-icon"><FaUserEdit /></label>
                            <input
                                type="file"
                                id="imageUpload"
                                style={{ display: "none" }}
                                onChange={handleImageChange}
                              />
                            </div>
                        <h3>{name}</h3>
                            <p className="designation">{position}</p>
                         </div>

                    <div className="details px-5">
                        <div className="info-block">
                            <p className="text-title" style={{fontWeight:"400" , fontSize:"20px"}}>Personal Information</p>
                            <div className="info-content px-3 ">
                                {isEditingPersonalInfo ? (
                                    <>
                                        <Row className="mb-2">
                                            <Col sm="3">Name:</Col>
                                            <Col sm="9">
                                                <input
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                            </Col>
                                        </Row>

                                        <p><strong>Email:</strong>
                                            <input
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </p>
                                        <p><strong>Phone No:</strong>
                                            <input
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                            />
                                        </p>
                                        <p><strong>Address:</strong>
                                            <input
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                            />
                                        </p>
                                        <button className="edit-btn" onClick={() => handleSaveClick(setIsEditingPersonalInfo)}>Save</button>
                                    </>
                                ) : (
                                    <>
                                        <p><strong>Name:</strong> <span onClick={() => handleEditClick(setIsEditingPersonalInfo)}>{name}</span></p>
                                        <p><strong>Email:</strong> <span>{email}</span></p>
                                        <p><strong>Phone No:</strong> <span>{phone}</span></p>
                                        <p><strong>Address:</strong> <span>{address}</span></p>
                                        <button className="edit-btn" onClick={() => handleEditClick(setIsEditingPersonalInfo)}>Edit</button>
                                    </>
                                )}
                            </div>
                        </div>

                    <div className="info-block">
                        <div className="info-content">
                            <p className="text-title" style={{fontWeight: "400", fontSize: "20px"}}>Academic Information</p>
                            <div className="info-content px-3">                            {isEditingAcademicInfo ? (
                                <>
                                    <p><strong>Position:</strong>
                                        <input
                                            value={position}
                                            onChange={(e) => setPosition(e.target.value)}
                                        />
                                    </p>
                                    <p><strong>Department:</strong>
                                        <input
                                            value={department}
                                            onChange={(e) => setDepartment(e.target.value)}
                                        />
                                    </p>
                                    <button className="edit-btn"
                                            onClick={() => handleSaveClick(setIsEditingAcademicInfo)}>Save
                                    </button>
                                </>
                            ) : (
                                <>
                                    <p><strong>Position:</strong> <span
                                        onClick={() => handleEditClick(setIsEditingAcademicInfo)}>{position}</span></p>
                                    <p><strong>Department:</strong> <span>{department}</span></p>
                                    <button className="edit-btn"
                                            onClick={() => handleEditClick(setIsEditingAcademicInfo)}>Edit
                                    </button>
                                </>
                            )}
</div>                  </div>
                    </div>
                    </div>
        </section>
    );
}

function Profile() {
    const [name, setName] = useState("Ayesha Samarasinghe");
    const [email, setEmail] = useState("samarasinghe@gmail.com");
    const [phone, setPhone] = useState("0771345679");
    const [address, setAddress] = useState("Matara");

    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

    const activePage = "My Profile";

    return (
        <Container fluid className="main-container ">
            <Sidebar isOpen={isSidebarOpen} />
            <Row>
                <div className={`main-content ${isSidebarOpen ? 'shifted' : ''}`}>
                    <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} activePage={activePage}/>

                    <Container fluid className="content-container pt-0 pb-5">
                        <ProfileSection
                            name={name}
                            setName={setName}
                            email={email}
                            setEmail={setEmail}
                            phone={phone}
                            setPhone={setPhone}
                            address={address}
                            setAddress={setAddress}
                        />
                    </Container>
                <Footer/>
            </div>
        </Row>
</Container>
    );
}

export default Profile;
