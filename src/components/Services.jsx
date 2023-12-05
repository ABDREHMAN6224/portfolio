import React from 'react'
import { styled } from 'styled-components'
import Title from './Title'
import Card from './Card'
import team from "../images/undraw_engineering_team_a7n2.svg";
import personal from "../images/undraw_heatmap_uyye.svg";
import programmer from "../images/undraw_programmer_re_owql.svg";
const Services = () => {
  return (
    <Wrapper className="page">
      <Title text="What Services I Provide" />
      <div className="underline"></div>
      <div className="services-container">
        <Card
          image={personal}
          head={"Get a Personal website now!"}
          desc={
            "Hey there! Looking for a killer website? I'm your go-to guy! As a Full Stack Web developer, I'll create a custom website that will blow your mind."
          }
        />
        <Card
          image={team}
          head={"Get Professional website with database!"}
          desc={
            "Hey there! Looking for a Professional website for your business? You are on right place! I'll create a website that will amaze you."
          }
        />
        <Card
          image={programmer}
          head={"Keep Your Website Running Smoothly!"}
          desc={
            "Hey there! Need help keeping your website in tip-top shape? I've got you covered with my top-notch website maintenance services."
          }
        />
      </div>
      <button>
        <a href=" https://www.fiverr.com/abdulrehmanm959" target='_blank'>
          See My Fiverr
          </a>
      </button>
    </Wrapper>
  );
}

export default Services
const Wrapper = styled.div`
a{
  text-decoration: none;
  color: inherit;
}
  /* padding: 2rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  .services-container {
    margin-top: 0rem;
    display: grid;
    gap: 1.75rem;
    grid-template-columns: 1fr 1fr 1fr;
  }
  button {
    background: #efcd8d;
    color: #212223;
    font-weight: bold;
    font-size: 1rem;
    margin: 0 auto;
    margin: 2.5rem auto;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      color: #f0d29a;
      background-color: #212223;
    }
  }

  @media (max-width: 990px) {
    .services-container {
      grid-template-columns: 1fr 1fr;
    }
  }
  
  @media (max-width: 768px) {
    .services-container{
      grid-template-columns: 1fr;

    }
  }
  @media (min-width: 1550px) {
    h1{
      font-size: 3.5rem !important;
    }
    
  }
`;