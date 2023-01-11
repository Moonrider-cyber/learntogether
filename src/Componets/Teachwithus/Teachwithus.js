import React from 'react';
import './Teachwithus.scss';
const instructor = require('./asset/instructor.jpg'); 

function Teachwithus() {
    return(
        <div>
            <section className='teach-with-us'>
                <div className='container'>
                    <div className='teach-with-us-img'>
                        <img src={instructor}></img>
                    </div>
                    <div className='teach-with-us-context'>
                        <div className='context-title'><h1>Become an instructor</h1></div>
                        <div className='context-main'>Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.</div>
                        <div className='context-btn'><button>Start teaching today</button></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Teachwithus;