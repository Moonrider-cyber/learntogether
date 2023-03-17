import React from 'react'
const billboardimg = require('./asset/billboard-desktop-v4.jpg')
import './Teachcomp.scss'

export const Teachcomp = () => {
  return (
    <>
        <div className="billboard" style={{paddingTop:80}}>
        <div className="billboard__content">
                <h1 className="billboard__title">Come teach with us</h1>
                <p className="billboard__text">Become an instructor and change lives — including your own</p>
                <button className='billboard__btn'>Get Started</button>
            </div>
            <div className="billboard__image">
                <img src={billboardimg} alt="billboard" />
            </div>
            
        </div>
    </>
  )
}
