import React from 'react'
import { styled } from 'styled-components'
import {  FaMobileAlt} from "react-icons/fa"
import { BiLogoGmail } from "react-icons/bi";
const Footer = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="contacts">
          <p className="contact-icon">
            <BiLogoGmail />
            <span>memonabdulrehman250@gmail.com</span>
          </p>
          <p className="contact-icon">
            <FaMobileAlt />
            <span>+923160532576</span>
          </p>
        </div>
        <p className='copyright'>@Copyright {new Date().getFullYear()}</p>
      </div>
    </Wrapper>
  );
}

export default Footer
const Wrapper = styled.div`
  background: #272829;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    margin-top: 1rem;
    text-align: center;
  }
  svg{
    color: white;
  }

  .contacts {
    display: flex;
    justify-content: center;
    gap: 4rem;
    align-items: center;
    span {
      font-size: 14px;
      letter-spacing: 1px;
      margin-left: 0.5rem;
      color: #b8b4b4;
    }
    .contact-icon {
      display: flex;
      align-items: center;
    }
  }
  .copyright{
    color: #aba9a9;
  }
  @media (max-width:576px){
    .contacts{
      flex-direction: column;
      gap: 0;
      margin-bottom: 10px;
    }
  }
`;