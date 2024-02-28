import React from 'react'
import { styled } from 'styled-components'
import {useInView} from "react-intersection-observer"


const Title = ({text}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <Wrapper
    ref={ref}
    className={`heading ${inView ? "animate_from_bottom" : "hide"}`}
    >
        <h1>{text}</h1>
        <div className="underline"></div>
    </Wrapper>
  );
}

export default Title
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;
  position: relative;

  h1 {
    color: white;
    color: wheat;
    text-align: center;
  }
  .underline {
    width: 100px;
    height: 4px;
    border-radius: 3px;
    background: wheat;
    position: absolute;
    bottom: -15px;
  }
`;