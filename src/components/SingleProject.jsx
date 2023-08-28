import React,{useState} from 'react'
import { styled } from 'styled-components'

import mart from "../images/mart.png";
import master from "../images/master.png";

const SingleProject = () => {
        const [show, setShow] = useState(false);

  return (
    <Wrapper>
      <div
        className="project"
        onMouseOver={() => setShow(true)}
        onMouseOut={() => setShow(false)}
      >
          <img src={master} alt="" />
          <p className="name">AR MART</p>
        <div className={show ? "navigate show" : "navigate"}>
          <button className="github">github</button>
          <button className="website">website</button>
        </div>
      </div>
    </Wrapper>
  );
}

export default SingleProject

const Wrapper = styled.div`
  background-color: #212223;
  width: 280px;
  height: 200px;
  border-radius: 8px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  box-shadow: 2px 2px 2px rgba(159, 155, 155, 0.3),
    -2px -2px 2px rgba(159, 155, 155, 0.3);
  transition: all 0.3s ease-in-out;
  position: relative;
  .project {
    text-decoration: none;
    color: wheat;
    display: grid;
    grid-template-rows: 1fr 40px;
    height: 100%;
  }

  .navigate {
    position: absolute;
    inset: 0;
    visibility: hidden;
    opacity: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #121212a8;
    gap: 1rem;
    button {
      background: wheat;
      letter-spacing: 2px;
      font-size: 1rem;
      text-transform: uppercase;
      cursor: pointer;
      color: #212223;
      font-weight: bold;
      transition: all 0.3s ease-in-out;
      &:hover {
        color: wheat;
        background: #212223;
      }
    }
  }
  .show {
    opacity: 1;
    visibility: visible;
  }

  img {
    width: 100%;
    height: 100%;
  }
  p {
    padding-top: 10px;
    text-align: center;
  }
  &:hover {
    box-shadow: 3px 3px 2px rgba(205, 194, 194, 0.3),
      -3px -3px 2px rgba(205, 194, 194, 0.3);
    scale: 1.05;
  }

  @media (max-width: 990px) {
    width: 280px;
    height: 200px;
  }
`;