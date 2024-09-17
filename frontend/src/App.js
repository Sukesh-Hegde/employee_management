import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Signup from "./components/Signup";
import Login from "./components/Login";
import EmployeeState from "./context/emplyeeState";
import Create from "./components/Create";
import Update from "./components/Update";
import Alert from "./components/Alert";

function App() {
  return (
    <>
      <EmployeeState>
        <Router>
          <Navbar />
          <Alert/>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route exact path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route exact path="/create" element={<Create />} />
              <Route exact path="/edit/:id" element={<Update />} />
            </Routes>
          </div>
        </Router>
      </EmployeeState>
    </>
  );
}

export default App;
