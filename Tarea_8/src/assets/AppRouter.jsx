import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Characters from "./Pages/Characters";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import "../assets/components_Styles/Navbar.css"

const AppRouter = () => {
    return (
        <Router>
            <nav className="navbar">
                <div className="nav-left">
                 <Link to="/" >Home</Link>
                 <Link to="/characters" >Characters</Link>
                 <Link to="/about" >Episodes</Link>
                </div>
                <div className="nav-right">
                 <Link to="/contact">Contact</Link>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/characters" element={<Characters />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;