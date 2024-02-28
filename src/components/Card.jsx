import React from 'react'
import { styled } from 'styled-components';
import {useInView} from "react-intersection-observer"

const Card = ({image,head,desc}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <Wrapper
    ref={ref}
    className={`card ${inView ? "animate_from_bottom" : "hide"}`}
    >
      <div className="image">
        <img src={image} alt="" />
      </div>
      <h3 className="head">{head}</h3>
      <p className="detail">
        {desc}</p>
    </Wrapper>
  );
}

export default Card
const Wrapper = styled.div`
  display: grid;
  padding: 25px;
  grid-template-rows: 150px auto 1fr;
  background: #2d2c2c;
  border-radius: 8%;
  border-top-left-radius: 0;
  border-bottom-right-radius: 0;
  line-height: 1.5;
  img {
    width: 100%;
    height: 100%;
  }
  .head {
    padding: 1rem;
    padding-bottom: 1rem;
    color: white;
  }
  .detail {
    padding: 1rem;
    padding-top: 0;
    color: #908b8b;
  }
  @media (min-width: 1550px) {
    gap: 20px;
    h3.head {
      font-size: 1.75rem;
    }
    p{
      font-size: 1.25rem;
    }
  }
`;