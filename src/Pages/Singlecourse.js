
import React from 'react'
import Footer from '../Componets/layout/Footer/footer'
import Navbar from '../Componets/layout/Navbar/Navbar'
const {SingleCourseComp} = require('../Componets/SingleCourse/SingleCourseComp')

export const Singlecourse = () => {
  return (
    <>
        <Navbar whitenav={false} />
        <SingleCourseComp/>
        <Footer/>
    </>
  )
}
