import React from "react";
import Footer from "../components/Footer";
const About = () => {
    return(
        <div className="page">
            <h1>About Us</h1>
            <iframe src="https://photos.onedrive.com/share/38B72071DFA2319E!78818?cid=38B72071DFA2319E&resId=38B72071DFA2319E%2178818&authkey=%21AEIMD8r6gXHafhs&ithint=video&e=s4irgz&fbclid=IwAR2pMV71a9oaG7z_Anva9Br4VXbiKE7gT8wXBeshHR7pv_F2bOrWHzrU9FM" 
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
            width="100%"
            height="500rem"
            allowdownloads="false"
            />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Footer />
        </div>
    )
}

export default About