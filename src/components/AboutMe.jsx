import React from 'react'
import { styled } from 'styled-components'
import hacker from "../images/undraw_hacker_mind_-6-y85.svg"
import Title from './Title';
import { useNavigate } from 'react-router-dom';

const AboutMe = () => {
  const navigate=useNavigate()
  return (
    <Wrapper className="page">
      <div className="container">
        <Title text="about me"/>
        <div className="info-container">
          <div className="info">
            <div className="head-title">
            <h3>
              Passionate Full Stack Web Developer with a Knack for Building
              Professional Websites
            </h3>
              <div className="underline"></div>
            </div>
            <p>
              Hey there! I’m a Full Stack Web developer and I’m currently
              studying Computer Science at NUST. I’ve been in this program
              and I absolutely love it. Building professional websites
              is my jam and I’m super passionate about it. Let’s create
              something awesome together!
            </p>
            <button onClick={()=>navigate("/contact")}>Contact me</button>
          </div>
          <div className="image">
            <img src={hacker} alt="" className="img" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default AboutMe
const Wrapper = styled.div`
  background-color: #212223;
  padding: 2rem;
  .heading {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 4rem;
  }
  h1 {
    color: white;
    color: wheat;
    text-align: center;
  }

  .info-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
  .head-title {
    position: relative;
    margin-bottom: 2.5rem;
  }
  h3 {
    width: 400px;
    color: wheat;
    color: #a8b0b7;
    color: white;
    line-height: 1.75;
  }
  p {
    color: #97a0a8;
    line-height: 1.75;
    max-width: 600px;
  }
  button {
    margin-top: 2rem;
    letter-spacing: 2px;
    color: #212223;
    background-color: #f8d696;
    font-weight: bold;
    font-size: 1rem;
    margin-right: 1.5rem;
    transition: all 0.15s ease-in;
    cursor: pointer;
    &:hover {
      background-color: #f2ca7e;
    }
  }
  .img {
    width: 90%;
    height: 90%;
  }

  @media (max-width: 990px) {
    .info-container {
      place-items: center;
      grid-template-columns: 1fr;
    }
    .image {
      display: none;
      visibility: hidden;
    }
    .info {
      h3,p {
        max-width: 500px;
        width: auto;
      }
    }
  }

  @media (max-width: 576px) {
    p,h3{
      /* color: blue; */
      max-width: 400px;
      width: auto;
    }
  }
`;