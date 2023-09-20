import React from 'react'
import { styled } from 'styled-components';
import profile from "../images/profile.jpeg";


const MyIntro = () => {
  
  return (
    <Wrapper profile={profile} className="page">
      <div className="main-container ">
        <div className="info-container">
          <div className="heading">
            <h1>
              hi, I'm <br />
              <span> Abdul Rehman</span>
              <br />
            </h1>
            <p>
              I am a Full Stack Web developer studying Computer Science at NUST
              , and I have a strong passion for creating professional websites.
            </p>
            <div className="btn-container">
              {/* <button>Projects</button> */}
              <button className="contact">
                <a href="cv.pdf" target='_blank' download={"cv.pdf"}>
                  Download My cv
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={profile} alt="" srcset="" />
            <div className="image-cover"></div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default MyIntro
const Wrapper = styled.div`
  a{
    text-decoration: none;
    color: inherit;
  }
  .main-container {
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    /* padding: 3rem 2rem; */
    gap: 1rem;
    padding-top: 5rem;
  }
  .info-container {
    padding-top: 0.5rem;
    padding-bottom: 1rem;
    .heading {
      position: relative;
      /* margin-bottom: 2.5rem; */
      line-height: 1.4;
    }
    p {
      max-width: 450px;
      color: #888f96;
      letter-spacing: 1px;
      line-height: 1.7;
    }
    
    button {
      margin-top: 2rem;
      letter-spacing: 2px;
      font-weight: bold;
      font-size: 1rem;
      margin-right: 1.5rem;
      transition: all 0.15s ease-in;
      cursor: pointer;
    }
    button:hover {
      background-color: #212223;
      color: wheat;
    }
    .contact {
      color: #212223;
      /* background: wheat; */
    }
    .heading h1 {
      color: white;
      font-weight: 700;
      font-size: 4rem;
      letter-spacing: 3px;
      margin: 0;
      padding: 0;
      margin-bottom: 0.7rem;
      h3 {
        color: #212223;
        color: #888f96;
      }
      span {
        font-size: 4rem;
        color: #f4c876;
      }
    }
  }
  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .image {
    border-radius: 100%;
    width: 370px;
    height: 370px;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    
    img{
      width: 100%;
      height: 100%;
    }
  }
  .image-cover {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    
  }
  
  @media (max-width: 990px) {
    .main-container{
      grid-template-columns: 1fr;
      place-items: center;
    }
    .image-container{
      order: 0;
    }
    .info-container{
      order: 1;
      p{
        width: auto;
      }
    }
  }
  
  @media (max-width: 576px) {
      .main-container{
        justify-content: center;
        padding: 1rem;
      }
      
      .info-container{
        
        p{
          width: auto;
        }
      }
      .image-container{
        .image{
          width: 200px;
          height: 200px;
        }
      }
    }
    @media (max-width:330px){
      .info-container .heading h1{
        font-size: 3.5rem;
      }
      .info-container .heading h1 span {
    font-size: 3.5rem;
    color: #f4c876;
    }
      .info-container{
      
        p{
          width: 250px;
        }
      }
      
    }
  `;
  