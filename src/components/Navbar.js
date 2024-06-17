import React from "react";
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <nav>
            <ul>
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/impact">Impact</Link></li>
                <li><Link to="/get-involved">Get Involved</Link></li>
                <li><Link to="/news-and-events">News and Events</Link></li>
                <li><Link to="/resources">Resources</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar