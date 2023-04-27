import React from 'react';
import { Link } from 'react-router-dom';
import './Courselist.scss';

const CourseCard = ({id,title,price,rating,author,courseimg}) => {
    
  return (
    <>
        <div className="container courseCard">
            <div className='c-card'>
                <Link to={'/course/' + id}>
                <div className='c-card-img'>
                    <img alt='course img' src={courseimg ? courseimg : "No Img" }/>
                </div>
                <div className='c-card-details'>
                    <div className='c-card-title'>
                        <h5>{title && title}</h5>
                        {/* <h5></h5> */}
                    </div>
                    <div className='c-card-instructor'>
                        {/* <p><Link to={"/"}>Jetha Gada</Link></p> */}
                        <p>{author && author}</p>
                    </div>
                    <div className='c-card-rating'>
                        <i className="fa-solid fa-star"></i>
                        <p>{rating && rating}</p>
                        {/* <p>(<span>33</span> reviews)</p> */}
                    </div>
                    <div className='c-card-price'>
                        <span>$</span><p>{price && price}</p>
                    </div>
                </div>
                </Link>
            </div>
        </div>
    </>
    )
}

export default CourseCard