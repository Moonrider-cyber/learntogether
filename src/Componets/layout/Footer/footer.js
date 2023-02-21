import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

function Footer() {
    let today = new Date();
    return(
        <footer>
            {/* <div className="footer-logo">
                <h1>Busilearn</h1>
            </div> */}
            <div className="footer-sections">
                <div className="footer-section-c1">
                    <h5>Links</h5>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Contact Us</Link></li>
                        <li><Link to="/">About Us</Link></li>
                    </ul>
                </div>
                <div className="footer-section-c2">
                    <h1>BUSILEARN</h1>
                    <input type={"email"} placeholder="Your Email Adress" />
                    <button>Subscribe Now</button>
                </div>
                <div className="footer-section-c3">
                    <h5>Contact</h5>
                    <p>125, Busilearn Adajan</p>
                    <p>Surat , Gujarat , IN</p>
                    <div className="footer-social">
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-youtube"></i>
                    </div>
                </div>
            </div>
            {/* <div className="footer-copyright">
                <p>© <span>{today.getFullYear()}</span> Busilearn, Inc.</p>
            </div> */}
        </footer>
    )
}

export default Footer;
