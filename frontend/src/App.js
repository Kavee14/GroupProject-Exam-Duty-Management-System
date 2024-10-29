import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Duties from "./pages/Duties/DutiesPage";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AddLecturers  from "./pages/Admin/AddLecturers";
import UploadPdfs from "./pages/Admin/UploadPdfs";
import Protected from "./Protected"


function App() {
  return <Router>

    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Protected Cmp={Dashboard} />} />
      <Route path="/duties" element={<Protected Cmp={Duties} />} />

      <Route path="/admin" element={<Protected Cmp={AdminDashboard} />} />
      <Route path="/add" element={<Protected Cmp={AddLecturers} />} />
      <Route path="/upload" element={<Protected Cmp={UploadPdfs} />} />
    </Routes>

  </Router>;
}

export default App;



