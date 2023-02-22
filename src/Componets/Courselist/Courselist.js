import React from "react";
import "./Courselist.scss";
import CourseCard from "./CourseCard";

function Navbar() {
  return (
    <div className="container courselist">
      <h1>Learn in-demand professional skills</h1>
      <p>Choose from courses in English and many other languages</p>
      <div className="courses-cards">

      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      </div>
    </div>
  );
}

export default Navbar;
