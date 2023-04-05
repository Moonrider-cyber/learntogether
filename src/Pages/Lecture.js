import React from 'react'
import {Lecturecomp} from '../Componets/Lectures/Lecturecomp.jsx'
import Footer from '../Componets/layout/Footer/footer'
import NavOnlyLogo from "../Componets/layout/Navbar/NavOnlyLogo";

export const Lecture = () => {
  return (
    <>
        {/* <NavOnlyLogo/> */}
        <Lecturecomp/>
        <Footer/>
    </>
  )
}
