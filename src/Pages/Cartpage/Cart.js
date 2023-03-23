import React from 'react'
import Cartcomp from '../../Componets/cart/Cartcomp'
import Footer from '../../Componets/layout/Footer/footer'
import Navbar from '../../Componets/layout/Navbar/Navbar'
import NavOnlyLogo from '../../Componets/layout/Navbar/NavOnlyLogo'

export const Cart = () => {
  return (
    <>
        <Navbar whitenav={false} />
        <Cartcomp/>
        <Footer/>
    </>
  )
}
