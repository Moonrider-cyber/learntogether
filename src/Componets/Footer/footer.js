import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

function Footer() {
    return(
        <footer>
            <div className="footer-logo">
                <h1>Busilearn</h1>
            </div>
            <div className="footer-links">
                <div className="footer-links-c1">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Contact Us</Link></li>
                        <li><Link to="/">About Us</Link></li>
                    </ul>
                </div>
                <div className="footer-links-c2">
                    <li><Link to="/">Teach with us</Link></li>
                    <li><Link to="/"></Link></li>
                </div>
            </div>
            <div className="footer-copyright">
                <p>© 2023 Udemy, Inc.</p>
            </div>
        </footer>
    )
}

export default Footer;
