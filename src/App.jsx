import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./assets/components/Login";
import Register from "./assets/components/Register";
import Nav from "./assets/components/Nav";
import Landing from "./assets/components/Landing";
import About from "./assets/components/About";
import Dashboard from "./assets/components/Dashboard";
import Quries from "./assets/components/Quries";
import Contact from "./assets/components/Contact";

function App() {
  return (  
      <Routes>
        <Route path="/" element={<Landing />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
  );
}

export default App;
