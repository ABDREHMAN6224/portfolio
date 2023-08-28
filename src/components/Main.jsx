import React from 'react'
import { Outlet } from 'react-router-dom'
import { styled } from 'styled-components'
import Navbar from './Navbar'
import Register from './Register'
import Checkout from './Checkout'
import Footer from './Footer'
import SmallScreenNavbar from './SmallScreenNavbar'

const Main = () => {
  return (
    <>
      <Navbar/>
      <SmallScreenNavbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Main

const Wrapper=styled.div`

   

`