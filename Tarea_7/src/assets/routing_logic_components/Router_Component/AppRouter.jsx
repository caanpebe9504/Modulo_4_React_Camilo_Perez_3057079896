import React from "react"
import { BrowserRouter as  Router, Link, Routes,Route } from "react-router-dom"
import Characters from "../Pages/Characters"
import Home from "../Pages/Home"

const AppRouter = () => {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/characters">Characters</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/characters" element={<Characters/>} />
            </Routes>
        </Router>
    )
}

export default AppRouter