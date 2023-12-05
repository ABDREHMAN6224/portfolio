import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'
import Link from './Link'
import {BsGithub,BsInstagram,BsLinkedin,BsTwitter} from "react-icons/bs"
import {FaBars} from "react-icons/fa"
import { useAppContext } from '../context/context'
const Navbar = () => {
    
    const {openSideBar}=useAppContext()
  return (
    <Wrapper>
      <div className="log">
        <h1 className="logo">AR</h1>
      </div>
      <div className="social-links-container">
        <a href="https://github.com/ABDREHMAN6224" target='_blank'>
          <BsGithub />
        </a>

        <a href="https://www.instagram.com/abdrehman6224/" target="_blank">
          <BsInstagram />
        </a>
        <a href="https://twitter.com/abdrehman6224" target='_blank'>
          <BsTwitter />
        </a>
        <a href="https://www.linkedin.com/in/abdul-rehman-memon-9a908924b/" target='_blank'>
          <BsLinkedin />
        </a>
      </div>
      <div className="nav-links-container">
        <div className="nav-links">
          <Link path="/" text="Home" />
          <Link path="/projects" text="Projects" />
          <Link path="/contact" text="Contact" />
        </div>
      </div>
      <FaBars className="bar" onClick={openSideBar} />
    </Wrapper>
  );
}

export default Navbar

const Wrapper = styled.div`
z-index: 1;
  height: var(--navbar-height);
  background-color: #272829;
  padding: 1rem 2rem;
  color: #bcb7b7;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    font-size: 4rem;
    color: wheat;
  }
  

  .social-links-container{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  a{
    text-decoration: none;
    color: #bcb7b7;
    display: grid;
    place-items: center;
  }
  .social-links-container svg{
    font-size: 1rem;
    cursor: pointer;
    margin: auto 1rem;
    transition: all 0.3s ease-in-out;
  }
  .social-links-container svg:hover{
    color: white;
  }
  .link {
    text-decoration: none;
    list-style: none;
    font-size: 1.2rem;
    font-family: "Roboto", sans-serif;
    transition: all 0.5s ease-in-out;
    color: inherit;
    position: relative;
    margin: auto 1rem;
  }
  .link:hover {
    transform: translateX(5px);
    color: wheat;
  }
  .active {
    color: white;
  }
  .nav-links-container {
    padding: auto 0rem;
  }
  .nav-links {
    display: flex;
    justify-content: right;
    align-items: center;
  }
  .link {
    /* padding: 5px 10px; */
  }
  .bar{
    font-size: 2rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    display: none;
    visibility: hidden;
    &:hover{
      color: white;
      transform: rotateZ(90deg);
    }
  }
  @media (max-width:992px){
    .social-links-container{
      display: none;
      visibility: hidden;
    }
  }
  @media (max-width:768px){
    .nav-links-container{
      display: none;
      visibility: hidden;
    }
    .bar{
      display: block;
      visibility: visible;
    }
  }
  @media (min-width: 1550px) {
    .link{
      font-size: 1.5rem;
    }
    .nav-links-container{
      padding: auto 1rem;
    }
    .social-links-container{
      padding: auto 1rem;
      svg{

        font-size: 1.5rem;
      }
    }
  }
`;