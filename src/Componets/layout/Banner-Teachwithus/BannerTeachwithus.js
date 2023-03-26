import React from "react";
import "./Teachwithus.scss";
const instructor = require("./asset/instructor.jpg");
const joinfree = require("./asset/joinus.jpg");
import { Link } from "react-router-dom";

function BannerTeachwithus({onlytext=false}) {
  return (
    <div>
      {onlytext ? (
        <section className="teach-with-us">
        <div className="container">
          <div className="teach-with-us-context" style={{width:"100%",textAlign:"center"}}>
            <div className="context-title">
              <h1>Become an instructor</h1>
            </div>
            <div className="context-main">
              Instructors from around the world teach millions of students on
              Udemy. We provide the tools and skills to teach what you love.
            </div>
            <div className="context-btn">
              <Link to={"/instructor"}><button>Start teaching today</button></Link>
            </div>
          </div>
        </div>
      </section>
      ) : (<>
      <section className="teach-with-us">
        <div className="container">
          <div className="teach-with-us-img">
            <img src={instructor}></img>
          </div>
          <div className="teach-with-us-context">
            <div className="context-title">
              <h1>Become an instructor</h1>
            </div>
            <div className="context-main">
              Instructors from around the world teach millions of students on
              Udemy. We provide the tools and skills to teach what you love.
            </div>
            <div className="context-btn">
            <Link to={"/instructor"}> <button>Start teaching today</button></Link>
            </div>
          </div>
        </div>
      </section>
      <section className="join-us">
        <div className="container">
          <div className="join-us-context">
            <div className="join-context-title">
              <h1>
                Take the next step toward your personal and professional goals
                with Busilearn.
              </h1>
            </div>
            <div className="join-context-main">
              Join now to receive personalized recommendations from the full
              Busilearn catalog.
            </div>
            <div className="join-context-btn">
              <Link to={"/signup"}><button>Join for Free</button></Link>
            </div>
          </div>
          <div className="join-us-img">
            <img src={joinfree}></img>
          </div>
        </div>
      </section>
      </>
      )}
     
    </div>
  );
}

export default BannerTeachwithus;
