import React, { useRef, useState } from 'react'
import { styled } from 'styled-components'
import team_img from "../images/undraw_sharing_knowledge_03vp.svg"
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';

const Register = () => {
  const [disabled,setDisabled]=useState(false)
  const form=useRef(null)
const hanldeSubmit=(e)=>{
  e.preventDefault()
  setDisabled(true)
  emailjs
  .sendForm(
    `${process.env.REACT_APP_SERVICE_KEY}`,
    `${process.env.REACT_APP_TEMPLATE_KEY}`,
    form.current,
    "1eG3EWFjhIJC8myiH"
    )
    .then(
      (result) => {
        console.log("result.text");
        setDisabled(false)
        toast.success("Success")
      },
      (error) => {
        toast.error("Failed")
        console.log(error.text);
      }
    );
}
  return (
    <Wrapper>
      <div className="main-container">
        <div className="img-container">
          <img src={team_img} alt="" />
        </div>
        <div className="container">
          <h1>Message Me</h1>
          <form className="form" ref={form} action="" onSubmit={hanldeSubmit}>
            <div className="form-row">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input type="text" className="form-input" name="name" required />
            </div>
            <div className="form-row">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input type="text" className="form-input" name="email" required />
            </div>
            <div className="form-row">
              <label className="form-label" htmlFor="">
                Your Message
              </label>
              <textarea name="message" className='text-area'  id="" cols="30" rows="10"></textarea>
            </div>
            <button type="submit" className='submit-btn' value={'Send'} disabled={disabled}>
              {disabled?"Sending...":"Send"}
              </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}

export default Register

const Wrapper = styled.div`
  background-color: #404243;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding-right: 3rem; */
  padding-bottom: 20px;
  h1 {
    color: white;
    margin: auto;
    text-align: center;
    padding: 1rem;
  }
  .main-container {
    padding: 0rem 2rem;
    display: grid;
    grid-template-columns: 1.5fr 2fr;
    place-items: center;
    gap: 2rem;
  }
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* margin: 0 auto; */
  }

  .form {
    min-width: 36vw;
    border-radius: 14px;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  
    padding: 1rem;
    padding-top: 2rem;
    background: #70737f;
  }
  .form-row {
    margin-bottom: 2rem;
    display: block;
    position: relative;
  }
  .form-row:nth-child(1) {
  }

  .form-label {
    position: absolute;
    padding: 2px 6px 4px 6px;
    color: white;
    font-family: "Varela Round", sans-serif;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    top: -25px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    left: 0px;
    background: #404243;
    font-weight: bold;
  }
  .form-input {
    width: 95%;
    height: 2.5rem;
    border-radius: 6px;
    border: 1px solid #565353;
    border-top-left-radius: 0px;
    background: #404243;
    padding: 0 10px;
    font-size: 18px;
    color: #b8bccb;
    letter-spacing: 1px;
    font-size: 16px;
  }
  .text-area {
    resize: none;
    border-radius: 6px;
    border: 1px solid #565353;
    border-top-left-radius: 0px;
    background: #404243;
    padding: 5px 10px;
    font-size: 18px;
    color: #b8bccb;
    letter-spacing: 1px;
    font-size: 16px;
    max-width: 95%;
    width: 95%;
  }
  .submit-btn {
    width: 100%;
    border-radius: 10px;
    border: none;
    background: #404243;
    border: 2px solid #d7bb88;
    color: #d7bb88;
    font-size: 1.2rem;
    letter-spacing: 2px;
    padding: 10px 10px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.5s ease-in-out;
  }
  .submit-btn:hover {
    color: #272829;
    background: wheat;
  }
  .img-container {
    img {
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 768px) {
    .img-container{
      display: none;

    }
    .main-container{
      grid-template-columns: 1fr;
      place-items: center;
      h1{
        font-size: 2rem;
        padding: 1rem;
      }
    }
    .form{
      min-width: 80vw;
    }
  }
  @media (max-width: 576px) {
    .form{
      min-width: 80vw;
    }
    .main-container{
      place-items: center;
    }
  }
`;