import React from 'react';
import './Courselist.scss';
const img = require('./asset/Best-Blockchain-Courses.png');

const CourseCard = () => {
  return (
    <>
        <div className="container courseCard">
            <div className='c-card'>
                <a href='/'>
                <div className='c-card-img'>
                    <img src={img}/>
                </div>
                <div className='c-card-details'>
                    <div className='c-card-title'>
                        <h5><a>Best Blockchain Course - Must Try One Time</a></h5>
                    </div>
                    <div className='c-card-instructor'>
                        <p><a>Jetha Gada</a></p>
                    </div>
                    <div className='c-card-rating'>
                        <i class="fa-solid fa-star"></i>
                        <p>4.9</p>
                        <p>(<span>33</span> reviews)</p>
                    </div>
                    <div className='c-card-price'>
                        <span>₹</span><p>4999</p>
                    </div>
                </div>
                </a>
            </div>
        </div>
    </>
    )
}

export default CourseCard