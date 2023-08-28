import React from 'react'
import { styled } from 'styled-components'
import Title from './Title'
import Skill from './Skill'
import {
  FaCss3,
  FaReact,
  FaHtml5,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import {
  BiLogoMongodb,
} from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
const Skills = () => {
  const navigate=useNavigate()
  const linkedin="https://www.linkedin.com/in/abdul-rehman-memon-9a908924b/"
  return (
    <Wrapper className="page">
      <Title text="My Expertise" />
      <div className="skills-container">
        <Skill head={"HTML5"} ic={<FaHtml5 />} />
        <Skill head={"CSS3"} ic={<FaCss3 />} />
        <Skill head={"NODE JS"} ic={<FaNodeJs />} />
        <Skill head={"REACT JS"} ic={<FaReact />} />
        <Skill head={"PYTHON"} ic={<FaPython />} />
        <Skill head={"DATABASES"} ic={<BiLogoMongodb />} />
      </div>
      <div className="btn-container">
        <button>
          <a href={linkedin} target='_blank'>
          Go to My Linkedin
          </a>
        </button>
        <button onClick={() => navigate("/projects")}>See My Projects</button>
      </div>
    </Wrapper>
  );
}

export default Skills
const Wrapper = styled.div`
a{
  text-decoration: none;
  color: inherit;
}
  padding: 2rem;
  background-color: #212223;
  .skills-container {
    padding-top: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 1rem;
  }
  .btn-container {
    text-align: center;
    margin-top: 6rem;
    button {
      margin-right: 3rem;
      font-weight: bold;
      font-size: 1rem;
      transition: all 0.3s ease-in-out;
      border: none;
      background: #f8d696;
      color: #212223;
      cursor: pointer;
      &:hover {
        color: #f8d696;
        border: 2px solid #f8d696;
        background: #212223;
      }
    }
  }

  @media (max-width: 990px) {
    .skills-container {
      grid-template-columns: 1fr 1fr 1fr 1fr ;
    }
  }

  @media (max-width: 768px) {
    .skills-container{
      grid-template-columns: 1fr 1fr 1fr;
    }
    button{
      margin-bottom: 15px;
    }
  }
  @media (max-width: 576px) {
    .skills-container{
      grid-template-columns: 1fr 1fr;
      gap: auto;
    }
    button{
      margin-bottom: 15px;
    }
  }
`;