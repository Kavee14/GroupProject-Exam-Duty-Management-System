// App.js
import React, { useState } from "react";
import "./styles.css";
import { FaBars, FaUserEdit } from "react-icons/fa";

function Sidebar({ isOpen }) {
    return (
        <nav className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <div className="logo">
                <img src="ems-logo.png" alt="EMS Logo" />
            </div>
            <ul>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#" className="active">Profile</a></li>
                <li><a href="#">Duties</a></li>
                <li><a href="#">Reports</a></li>
            </ul>
        </nav>
    );
}

function Header({ name, onToggleSidebar }) {
    return (
        <header className="profile-header">
            <span className="menu-icon" onClick={onToggleSidebar}><FaBars /></span>
            <div className="user-info">{name}</div>
        </header>
    );
}

function Profile({ name, setName, email, setEmail, phone, setPhone, address, setAddress }) {
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
        <section className="profile">
            <div className="profile-card">
                <div className="profile-image-container">
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

            <div className="details">
                <div className="info-block">
                    <div className="info-content">
                        {isEditingPersonalInfo ? (
                            <>
                                <p><strong>Name:</strong>
                                    <input
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </p>
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
                        {isEditingAcademicInfo ? (
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
                                <button className="edit-btn" onClick={() => handleSaveClick(setIsEditingAcademicInfo)}>Save</button>
                            </>
                        ) : (
                            <>
                                <p><strong>Position:</strong> <span onClick={() => handleEditClick(setIsEditingAcademicInfo)}>{position}</span></p>
                                <p><strong>Department:</strong> <span>{department}</span></p>
                                <button className="edit-btn" onClick={() => handleEditClick(setIsEditingAcademicInfo)}>Edit</button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-white">
                <div className="footer-left">
                    <img src="logo.png" alt="EMS Logo" />
                    <div className="please-text">
                        <p>Please obtain an email and password from</p>
                        <p>the EMS administrator in Science Faculty of</p>
                        <p>University of Ruhuna</p>
                    </div>
                </div>
                <div className="contact-details">
                    <h3>Contact Us</h3>
                    <p>Department of Computer Science, Faculty of Science, University of Ruhuna</p>
                    <p>Phone: 041 2222681</p>
                    <p>Email: ems@cs.ruh.ac.lk</p>
                </div>
            </div>
            <div className="footer-blue">
                <div className="footer-content">
                    <p>Department of Computer Science</p>
                </div>
            </div>
        </footer>
    );
}

function App() {
    const [name, setName] = useState("A.B.C.D. Samarasinghe");
    const [email, setEmail] = useState("samarasinghe@gmail.com");
    const [phone, setPhone] = useState("0771345679");
    const [address, setAddress] = useState("Matara");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen((prevState) => !prevState);
    };

    return (
        <div className="app-container">
            <Sidebar isOpen={isSidebarOpen} />
            <div className={`main-content ${isSidebarOpen ? 'shifted' : ''}`}>
                <Header name={name} onToggleSidebar={toggleSidebar} />
                <h2 className="voucher-report-text">MY PROFILE</h2>
                <Profile
                    name={name}
                    setName={setName}
                    email={email}
                    setEmail={setEmail}
                    phone={phone}
                    setPhone={setPhone}
                    address={address}
                    setAddress={setAddress}
                />
            </div>
            <Footer />
        </div>
    );
}

export default App;
