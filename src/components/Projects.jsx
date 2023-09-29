import React, { useState } from 'react'
import { styled } from 'styled-components'
import SingleProject from './SingleProject'
import { projects } from '../data'

const Projects = () => {
  return (
    <Wrapper >
        <div className="container">
        <div className="projects-container">
          {
            projects.map((p,i)=>{
              return <SingleProject key={i} {...p}/>
            })
          }
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