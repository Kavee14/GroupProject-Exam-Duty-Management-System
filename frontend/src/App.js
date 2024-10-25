import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/Login.jsx";
//import Dashboard from "./Pages/Dashboard.jsx";



function App() {
  return <Router>

    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>

  </Router>;
}

export default App;
