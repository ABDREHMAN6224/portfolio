import React, { useState } from 'react'
import { styled } from 'styled-components'
import SingleProject from './SingleProject'
const Projects = () => {
  return (
    <Wrapper >
        <div className="container">
        <div className="btn-container">
            <button type="button">Frontend</button>
            <button type="button">backend</button>
            <button type="button">Full stack</button>
        </div>
        <div className="projects-container">
            <SingleProject/>
            <SingleProject/>
            <SingleProject/>
            <SingleProject/>
            <SingleProject/>
            <SingleProject/>
            <SingleProject/>
        </div>

        </div>
    </Wrapper>
  )
}

export default Projects
const Wrapper = styled.div`
  background-color: #404243;
  min-height: 100vh;
  padding-bottom: 5rem;
  padding-top: 1rem;
  .container {
    padding: 1rem 4rem;
  }
  .btn-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    button {
      /* color: wheat; */
      /* background-color: #212223; */
      font-weight: bold;
      font-size: 1.15rem;
      letter-spacing: 2px;
      transition: all 0.3s ease-in-out;
      color: #f8d696;
      border: 2px solid #f8d696;
      background: #212223;
      cursor: pointer;
      &:hover {
        border: none;
        background: #f8d696;
        color: #212223;
      }
    }
  }
  .projects-container {
    padding-top: 3rem;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
  }

  @media (max-width: 990px) {
    .projects-container {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  
  @media (max-width: 768px) {
    .projects-container {
      grid-template-columns: 1fr 1fr ;
    }
    .container{
      padding: 1rem;
    }
  }
  @media (max-width: 576px) {
    .projects-container {
      grid-template-columns: 1fr;
    }
  }
`;