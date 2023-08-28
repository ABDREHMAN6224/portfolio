import React from 'react'
import { styled } from 'styled-components';


const Card = ({image,head,desc}) => {
  return (
    <Wrapper className="card">
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
  padding: 20px;
  grid-template-rows: 150px 100px 1fr;
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
    padding-bottom: 0rem;
    color: white;
  }
  .detail {
    padding: 1rem;
    padding-top: 0;
    color: #908b8b;
  }
`;