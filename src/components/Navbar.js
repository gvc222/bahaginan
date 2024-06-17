import React from "react";
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <nav>
            <ul>
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/">Projects</Link></li>
                <li><Link to="/">Impact</Link></li>
                <li><Link to="/">Get Involved</Link></li>
                <li><Link to="/">News and Events</Link></li>
                <li><Link to="/">Resources</Link></li>
                <li><Link to="/">About Us</Link></li>
                <li><Link to="/">Contact Us</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar