import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/Login/Login";
import Duties from "./pages/Duties/DutiesPage";



function App() {
  return <Router>

    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/duties" element={<Duties />} />
    </Routes>

  </Router>;
}

export default App;
