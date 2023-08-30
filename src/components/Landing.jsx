import React from 'react'
import { styled } from 'styled-components'
import MyIntro from './MyIntro'
import AboutMe from './AboutMe'
import Services from './Services'
import Skills from './Skills'
const Landing = () => {
  return (
    <>
      <MyIntro/>
      <AboutMe/>
      <Services/>
      <Skills/>
    </>
  );
}

export default Landing

