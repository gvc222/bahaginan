import React from "react";
import Footer from "../components/Footer";
const About = () => {
    return(
        <div className="page">
            <h1>About Us</h1>
            <h3>Our Story</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h3>Mission, Vision, and Values</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h3>Team</h3>
                <ul className="team">
                    <li><div className="profile">Corazon Calderon</div></li>
                    <li><div className="profile">Vittorio</div></li>
                    <li><div className="profile">Gianna</div></li>
                </ul>
            <h3>Partners and Sponsors</h3>
            <ul>
                <li><div className="profile">Roxas Isabela</div></li>
            </ul>
            
            <Footer />
        </div>
    )
}

export default About