import React from 'react'
import './SingleCourse.scss'
import { Link, Navigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllCourses } from '../../redux/actions/courses';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addtocart, checkenrolled, loadUser } from '../../redux/actions/user';

export function SingleCourseComp () {

  
  const id = useParams().id;

  const {courses} = useSelector(state => state.courses);
  const { isAuthenticated,isenroll } = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkenrolled(id))  
  }, [dispatch])

  function addcartbtnhandler() {
    if(isAuthenticated){
      dispatch(addtocart(id));
    }
  }
  

  const course = courses && courses.find(course => course._id === id);

  let isAdded = false;
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    var cardheader = document.querySelector(".course_landing");
    if(cardheader){

      if (scrollPosition > 300 && !isAdded) {
        cardheader.classList.add("skicky");
        isAdded = true;
      } else if (scrollPosition <= 300 && isAdded) {
        cardheader.classList.remove("skicky");
        isAdded = false;
      }
    }
  });
  return (
    <>
      <div style={{paddingTop:70}}>
        <div className='course_landing'>
          <div className='course_landing_bg'>
            <div className='container top-container'>
              <div className='course_landing_details'>
                <div className='course_landing_title'>
                  <h1>{course && course.title}</h1>
                </div>
                <div className='course_landing_desc'>
                  {/* <p>{course && course.description}</p> */}
                </div>
                <div className='course_landing_instructor'>
                  <p>Created by <a href='/'>{course && course.createBy[0].name}</a></p>
                </div>
                <div className='course_landing_meta'>
                  <div className='course_landing_meta_date'>
                    <i className="fa-solid fa-calendar-days"></i>
                    <p>Last updated {course && course.createAt }</p>
                  </div>
                  <div className='course_landing_meta_lang'>
                    <i className="fa-solid fa-globe"></i>
                    <p>English</p>
                  </div>
                </div>
            </div>


            <div className='course_landing_card'>
              <div className='course_landing_card_video'>
                <img src={course && course.poster[0].url}/>
              </div>
              <div className='course_landing_card_price'>
                <p>₹ {course && course.price}</p>
              </div>
              <div className='course_landing_card_btn'>
                
                {
                  isenroll ? (<Link to={"/profile"}><button className='add_cart'>Explore</button></Link>) : 
                  <button className='add_cart' onClick={addcartbtnhandler} >Add To Cart</button>

                }
                <button className='wishlist'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="butt" strokeLinejoin="bevel"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></button>
              </div>
              <div className='course_landing_card_moneyreturn'>
                <p>30-Day Money-Back Guarantee</p>
              </div>
              <div className='course_landing_card_lifetime'>
                <p>Full Lifetime Access</p>
              </div>
            </div>
            </div>
          </div>

          <div className='course_landing_body'>
            <div className='course_landing_body_card'>
              <div className='course_landing_body_card_title'>
                <h6>What you'll learn</h6>
              </div>
              <div className='course_landing_body_card_items'>
                <ul>
                  <li className='course_landing_body_card_item'>
                    <i className="fa-solid fa-check"></i>
                    <p>Learn how to build big full stack app from scratch</p>
                  </li>
                  <li className='course_landing_body_card_item'>
                    <i className="fa-solid fa-check"></i>
                    <p>Learn how to implement React Hooks, Async/Await, React Router 6, Axios</p>
                  </li>
                  <li className='course_landing_body_card_item'>
                    <i className="fa-solid fa-check"></i>
                    <p>Learn how to implement React Hooks, Async/Await, React Router 6, Axios</p>
                  </li>
                  <li className='course_landing_body_card_item'>
                    <i className="fa-solid fa-check"></i>
                    <p>Learn how to implement React Hooks, Async/Await, React Router 6, Axios</p>
                  </li>
                </ul>
              </div>
            </div>

          </div>
          <div className='course_landing_body_desc'>
            <div className='course_landing_body_desc_title'>
              <h6>Description</h6>
            </div>
            <div className='course_landing_body_desc_body'>
              <p>{course && course.description}</p>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}
