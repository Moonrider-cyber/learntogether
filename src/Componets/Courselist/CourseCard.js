import React from 'react';
import './Courselist.scss';
const img = require('./asset/musk.jpg');
import { Link } from 'react-router-dom';

const CourseCard = () => {
  return (
    <>
        <div className="container courseCard">
            <div className='c-card'>
                <Link to='/'>
                <div className='c-card-img'>
                    <img src={img}/>
                </div>
                <div className='c-card-details'>
                    <div className='c-card-title'>
                        {/* <h5><Link to={"/"}>Best Blockchain Course - Must Try One Time</Link></h5> */}
                        <h5>5 Din me paise doubble</h5>
                    </div>
                    <div className='c-card-instructor'>
                        {/* <p><Link to={"/"}>Jetha Gada</Link></p> */}
                        <p>Jetha Gada</p>
                    </div>
                    <div className='c-card-rating'>
                        <i className="fa-solid fa-star"></i>
                        <p>4.9</p>
                        <p>(<span>33</span> reviews)</p>
                    </div>
                    <div className='c-card-price'>
                        <span>₹</span><p>9999</p>
                    </div>
                </div>
                </Link>
            </div>
        </div>
    </>
    )
}

export default CourseCard