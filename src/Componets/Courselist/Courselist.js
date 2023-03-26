import React from "react";
import "./Courselist.scss";
import CourseCard from "./CourseCard";
import { useSelector } from "react-redux";
const img = require('../../asset/test1.jpg');
const img1 = require('../../asset/test2.jpg');
const img2 = require('../../asset/test3.jpg');
const img3 = require('../../asset/test4.jpg');


function Courselist() {

  const { courses } = useSelector((state) => state.courses);

  return (
    <div className="container courselist">
      <h1>Learn in-demand professional skills</h1>
      <p>Choose from courses in English and many other languages</p>
      <div className="courses-cards">

      {courses && courses.map((course,index) => (
        
        <CourseCard key={index} id={course._id} title={course.title} price={course.price} author={course.createBy[0].name} courseimg={course.poster[0].url}  />
        
      ))}
{/*       
      <CourseCard courseimg={img3}  />
      <CourseCard courseimg={img1} />
      <CourseCard courseimg={img} />
      <CourseCard courseimg={img2} />
      <CourseCard courseimg={img1} />
      <CourseCard courseimg={img2} />
      <CourseCard courseimg={img3} />
      <CourseCard courseimg={img1} /> */}
      </div>
    </div>
  );
}

export default Courselist;
