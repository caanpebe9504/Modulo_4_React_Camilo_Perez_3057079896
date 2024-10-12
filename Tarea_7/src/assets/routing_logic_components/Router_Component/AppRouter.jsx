import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Characters from "../Pages/Characters";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";

const AppRouter = () => {
    return (
        <Router>
            <nav className="bg-gray-800 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="nav-left flex space-x-4">
                        <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
                        <Link to="/characters" className="text-gray-300 hover:text-white">Characters</Link>
                        <Link to="/about" className="text-gray-300 hover:text-white">Episodes</Link>
                    </div>
                    <div className="nav-right">
                        <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
                    </div>
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