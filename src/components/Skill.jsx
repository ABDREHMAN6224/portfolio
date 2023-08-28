import React from 'react'
import { styled } from 'styled-components'

const Skill = ({head,ic,desc}) => {
  return (
    
      <Wrapper className="card">
        <div className="image">
          {ic}
        </div>
        <h3 className="head">{head}</h3>
      </Wrapper>

  );
}

export default Skill
const Wrapper = styled.div`
  display: grid;
  padding-top: 20px;
  grid-template-rows: 70px 1fr;
  background: #404243;
  border-radius: 8%;
  border-top-left-radius: 0;
  border-bottom-right-radius: 0;
  line-height: 1.5;
  box-shadow: 3px 2px 3px rgba(0, 0, 0, 0.4), -2px -1px 3px rgba(0, 0, 0, 0.4);
  svg {
    width: 100%;
    height: 100%;
    color: #f4d499;
  }
  .head {
    padding: 1rem;
    padding-bottom: 0rem;
    color: white;
    text-align: center;
    margin-bottom: 1.5rem;
  }
`;