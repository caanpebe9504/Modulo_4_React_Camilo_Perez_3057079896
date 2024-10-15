import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Characters from "./Pages/Characters/Characters";
import Home from "./Pages/Home_Component/Home";
import Episodes from "./Pages/Episodes/Episodes";
import "../assets/components_Styles/Navbar.css"

const AppRouter = () => {
    return (
        <Router>
            <nav className="navbar">
                <div className="nav-left">
                 <Link to="/" >Home</Link>
                 <Link to="/characters" >Characters</Link>
                 <Link to="/episodes" >Episodes</Link>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/characters" element={<Characters />} />
                <Route path="/episodes" element={<Episodes />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;