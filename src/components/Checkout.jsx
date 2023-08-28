import React from 'react'
import { styled } from 'styled-components'
import card from "../images/card.jpg"
const Checkout = () => {
  return (
    <Wrapper  imgUrl={card} className="page">
      <div className="card">
        <div className="image-container">
          {/* <img src={card} alt="" className="img" /> */}
        </div>
        <div className="form">
          <div className="form-row">
            <label htmlFor="" className="form-label">
              Full Name
            </label>
            <input type="text" name="name" className="form-input" />
          </div>
          <div className="form-row">
            <label htmlFor="" className="form-label">
              Card Number
            </label>
            <input type="number" name="name" className="form-input" />
          </div>
          <div className="form-row">
            <label htmlFor="" className="form-label">
              Expiry-Date
            </label>
            <input type="month" name="name" className="form-input" />
          </div>
            <button type="submit" className="submit-btn">
              Checkout
            </button>
        </div>
      </div>
    </Wrapper>
  );
}

export default Checkout
const Wrapper = styled.div`
  /* background-image: url(${(props) => props.imgUrl}); */
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1px;
  font-family: "Varela Round", sans-serif;
  .card {
    border-radius: 12px;
    width: 350px;
    height: 450px;
    background: #404243;
    border-radius: 10px;
    /* background: #404243; */
    /* background: linear-gradient(45deg, #404243b5,  #d8d9da 80% ); */
    padding-bottom: 1rem;
  }
  .image-container {
    width: 100%;
    height: 150px;
    border-radius: 10px;
    border-bottom-left-radius:0 ;
    border-bottom-right-radius:0 ;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${(props) => props.imgUrl});
    background-size: contain;
  }
  .img {
    /* width: 80%;
    height: 95%; */
  }
  .form {
    max-width: 91%;
    height: calc(100% - 150px);
    border-radius: 14px;
    border-top-right-radius: 0;
    border-top-left-radius: 0;

    margin: 0.5rem 0rem;
    margin-top: 0;
    /* border: 3px solid #404243; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;
    padding-top: 1rem;
    /* background: linear-gradient(45deg, #404243, #9399ad, #404243); */

    width: 100%;
  }
  .form-row {
    margin-bottom: 2rem;
    width: 100%;
    position: relative;
  }
  .form-label {
    position: absolute;
    padding: 2px 6px 4px 6px;
    /* width: 95%; */
    color: white;
    font-family: "Varela Round", sans-serif;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    top: -20px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    left: 0px;
    background: #65676e;
    font-weight: bold;
  }
  .form-input {
    width: 95%;
    height: 2.5rem;
    border-radius: 6px;
    border: 1px solid #565353;
    background: #65676e;
    padding: 0 10px;
    font-size: 18px;
    color: #b8bccb;
    letter-spacing: 1px;
    font-size: 16px;
  }
  .submit-btn {
    width: 100%;
    /* height: 2rem; */
    border-radius: 10px;
    border: none;
    background: #535558;
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
`;
// background: linear-gradient(120deg, #9399ad 50%, #404243 50%);
// #404243
// color: #fff6e0;
// background: #d8d9da;
// color: #565353;
//  background: #424446;
    // color: #d7bb88;