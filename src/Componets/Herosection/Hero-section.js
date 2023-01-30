import React from "react";
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
            <button>Join for Free</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
