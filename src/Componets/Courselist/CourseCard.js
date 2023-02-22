import React from 'react';
import './Courselist.scss';
const img = require('./asset/Best-Blockchain-Courses.png');

const CourseCard = () => {
  return (
    <>
        <div className="container courseCard">
            <div className='c-card'>
                <div className='c-card-img'>
                    <img src={img}/>
                </div>
                <div className='c-card-details'>
                    <div className='c-card-title'>
                        <h5>Best Blockchain Course - Must Try One Time</h5>
                    </div>
                    <div className='c-card-instructor'>
                        <p>Jetha Gada</p>
                    </div>
                    <div className='c-card-rating'>
                        <i class="fa-solid fa-star"></i>
                        <span>4.9</span>
                        <span>(33 rating)</span>
                    </div>
                    <div className='c-card-price'>
                        <span>₹</span><p>4999</p>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default CourseCard