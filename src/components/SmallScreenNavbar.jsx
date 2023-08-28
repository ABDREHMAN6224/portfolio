import React from 'react'
import { styled } from 'styled-components'
import Link from './Link';
import { FaTimes } from 'react-icons/fa';
import { useAppContext } from '../context/context';

const SmallScreenNavbar = () => {
  const {isSmalSideBarOpen,closeSideBar}=useAppContext()
  return (
    <Wrapper>
      <div
        className={
          isSmalSideBarOpen ? "sidebar-container" : "sidebar-container hide"
        }
      >
        <div className="logo">
          <h1 className="logo">AR</h1>
        </div>
        <div className="links">
          <Link path="/" onClick={closeSideBar} text="Home" />
          <Link path="/projects" text="Projects" onClick={closeSideBar} />
          <Link path="/register" text="Contact" onClick={closeSideBar} />
        </div>
        <FaTimes onClick={closeSideBar} />
      </div>
    </Wrapper>
  );
}

export default SmallScreenNavbar

const Wrapper = styled.div`
  transition: all 0.3s linear;
  .sidebar-container {
    z-index: 1;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #272829;
  }
  .hide {
    display: none;
    opacity: 0;
    visibility: hidden;
  }
  .show {
    display: block;
    opacity: 1;
  }
  @media (min-width: 768px) {
    height: 0;
  }
  .logo {
    font-size: 5rem;
    color: wheat;
    padding: 1rem;
    padding-top: 0;
  }
  .sidebar-container {
    gap: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  svg {
    position: absolute;
    top: 20px;
    right: 20px;
    color: #b81c1c;
    font-size: 2.3rem;
    cursor: pointer;
    transition: all 0.3s ease-in;
    &:hover {
      color: red;
    }
  }
  .links {
    gap: 1.2rem;
    font-size: 1.25rem;
    text-decoration: none;
    color: #aeabab;
    display: flex;
    flex-direction: column;
  }
  .link {
    text-decoration: none;
    list-style: none;
    font-size: 1.75rem;
    font-family: "Roboto", sans-serif;
    transition: all 0.5s ease-in-out;
    color: inherit;
    position: relative;
    margin: auto 1rem;
    font-weight: 700;
    &:hover{
      color: white;
      transform: translateX(3px);
    }
   
  }
`;