import React from "react";
import { Link } from "react-router-dom";
import "./Hero-section.scss";
const vid = require("./asset/hero section.mp4");

function Banner() {
  return (
    <div>
      <div className="hero">
        <span className="blayer"></span>

        <video autoPlay loop src={vid} muted></video>

        <div className="hero-text">
          <div className="hero-text-title">
            <h1>Learn without limits</h1>
            <p>
              Start, switch, or advance your career with more than 5,400
              courses, Professional Certificates from world-class top instructor
            </p>
          </div>
          <div className="hero-text-btn">
            <Link to={"/signup"}><button>Join for Free</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
