import React from "react";
import Footer from "../components/Footer";

const News = () => {
    return(
        <div className="page">
            <h1>News</h1>
            <h3>Blog</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className="newsletter__signup"><a href="/">Sign up for news!</a></div>
            <Footer />
        </div>
    )
}

export default News