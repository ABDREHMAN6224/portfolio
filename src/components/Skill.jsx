import React from "react";
import { styled } from "styled-components";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { useInView } from "react-intersection-observer";
const Skill = ({ head, ic, stars }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const generateStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  return (
    <Wrapper
    ref={ref}
    className={`card ${inView ? "animate_from_bottom" : "hide"}`}
    >
      <div className="container">

      <div className="front">
      <div className="image">{ic}</div>
      <h3 className="head">{head}</h3>
      </div>
      <div className="back">
        <p className="star">{generateStars}</p>
        <p>{Math.round(stars*20,0)}%</p>
      </div>
      </div>
    
    </Wrapper>
  );
};

export default Skill;
const Wrapper = styled.div`
  perspective: 1000px;

    .container{
    /* transform-style:preserve-3d ; */
    background: #404243;
    border-radius: 8%;
    border-top-left-radius: 0;
    border-bottom-right-radius: 0;
    line-height: 1.5;
    box-shadow: 3px 2px 3px rgba(0, 0, 0, 0.4), -2px -1px 3px rgba(0, 0, 0, 0.4);
    height:10rem;
    position: relative;
    transition: transform 1000ms;
    transform-style: preserve-3d;
    }
      .container:hover{
        cursor: pointer;
        transform: rotateY(180deg);
      }
    
    .front,.back{
      position: absolute;
      inset: 0;
      backface-visibility: hidden;
    }
    .front{
      display: grid;
      place-items: center;
      padding-top: 20px;
      grid-template-rows: 70px 1fr;
      
    }
    
    .back {
      padding-top: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: inherit;
      transform: rotateY(180deg);
      
    p{
      color: wheat;
      font-weight: bold;
    }
  }
  .star svg {
    font-size: 1rem;
    margin: 5px;
    /* color: red; */
  }
  svg {
    font-size: 3rem;
    /* height: 100%; */
    color: #f4d499;
  }
  .head {
    padding: 1rem;
    padding-bottom: 0rem;
    color: white;
    text-align: center;
    margin-bottom: 1.5rem;
  }
  @media (max-width: 576px) {
    place-items: center;
    .head {
      padding: 5px;
      font-size: 1rem;
    }
  }
`;
