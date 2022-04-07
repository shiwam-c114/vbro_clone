import React from "react";
import styled from "styled-components";
function CheckOut3() {
  return (
    <Div>
      
        <div className="py-2">
          <div className="logo1">
            <img
              src="https://csvcus.homeaway.com/rsrcs/cdn-logos/5.8.0/sitename/vrbo/web/logo.svg"
              alt="/"
            />
          </div>
          <div className="text2">
            <h2>Choose your payment method</h2>
          </div>
        </div>
        <div className="bigContainer">
        <div className="container">
          <h3>How would you like to pay?</h3>
          <h6>
            Safe, secure transactions. Your personal information is protected.
          </h6>

          <div className="App">
            <div className="topping">
              <input
                type="checkbox"
                id="topping"
                name="topping"
                value="Pay Over Time"
              />
              <p>Pay Over Time</p>
              <div className="topimg">
                <img
                  src="https://i.ibb.co/vskkm8y/Affirm-Logo-removebg-preview.png"
                  alt="/"
                />
              </div>
            </div>
            <hr />

            <div className="topping">
              <input
                type="checkbox"
                id="topping"
                name="topping"
                value="Pay Over Time"
              />
              <p>PayPal</p>
              <div className="topimg2">
                <img
                  src="https://i.ibb.co/L8CdX6r/download-removebg-preview.pngg"
                  alt="/"
                />
              </div>
            </div>
            <hr />

            <div className="topping2">
              <input
                type="checkbox"
                id="topping"
                name="topping"
                value="Pay Over Time"
              />
              <p>Credit Card</p>
              <div className="topimg3">
                <img
                  src="https://i.ibb.co/qJnwyfW/download-removebg-preview-1.png"
                  alt="/"
                />
                <div className="enter_details">
                  <div className="card-info">
                    <input
                      style={{ height: "40px", margin: "15px" }}
                      type="text"
                      placeholder="First Name"
                      name="firstname"
                      className="form-control"
                    />
                    <input
                      style={{ height: "40px", margin: "15px" }}
                      type="text"
                      placeholder="Last Name"
                      name="lastname"
                      className="form-control"
                    />
                    <input
                      style={{ height: "40px", width: "60%", margin: "15px" }}
                      type="Number"
                      placeholder="Card Number"
                      name="cardNumber"
                      className="form-control"
                    />
                    <br></br>
                    <input
                      style={{ height: "40px", margin: "15px" }}
                      type="Number"
                      placeholder="Expiration MM/YY"
                      name="Expiry"
                      className="form-control"
                    />
                    <input
                      style={{ height: "40px", margin: "15px" }}
                      type="Number"
                      placeholder="Security Code"
                      name="security"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr />

            <div className="billing-address">
              <h4>Billing Address</h4>
              <div className="finalbilling">
                <input
                  style={{ height: "40px", margin: "15px" }}
                  type="text"
                  placeholder="Street"
                  name="Address"
                  className="form-control"
                />

                <input
                  style={{ height: "40px", margin: "15px" }}
                  type="text"
                  placeholder="Country"
                  name="Country"
                  className="form-control"
                />
                <br />
                <input
                  style={{ height: "40px", width: "25%", margin: "2px" , marginLeft:"2%"}}
                  type="text"
                  placeholder="City"
                  name="City"
                  className="form-control"
                />
                <input
                  style={{ height: "40px", width: "25%", margin: "2px" }}
                  type="Number"
                  placeholder="Zip Code"
                  name="Zip Code"
                  className="form-control"
                />
                <input
                  style={{ height: "40px", width: "25%", margin: "2px" }}
                  type="text"
                  placeholder="State"
                  name="State"
                  className="form-control"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom">
          <p><i class="material-icons">money_off_csred</i>Non-refundable for
              your trip dates</p>
              <br />
              <p>When you book this property, your reservation will be confirmed instantly.</p>
      </div>
      <div className="booknow">
          <button>Book Now</button>
        </div>
    </Div>
  );
}

export default CheckOut3;

const Div = styled.div`
background-color: #f5f4f3;
 
.text2{
    margin-top:5%;
    margin-left:2%;
}
  .bigContainer{
      background-color:white;
      width:50%;
      height:50px;
      margin-left:2%;
      margin-top:2%;
  }
  .container h3{
      margin-bottom:2%;
      padding-left:2%;
  }
  .container h6 {
    margin-bottom: 1%;
    padding-left:2%;
  }
  .topping {
    display: flex;
    margin-top: 2%;
  }
  .topimg img {
    width: 80px;
    margin-top: -20%;
    margin-left: 250%;
  }
  .topping p {
    margin-top: -1%;
    margin-left: 1%;
  }

  hr {
    width: 90%;
  }

  .topimg2 img {
    width: 70px;
    margin-top: -20%;
    margin-left: 16rem;
  }

  .topimg3 img {
    width: 80px;
    margin-top: -20%;
    margin-left: 50%;
  }

  .topping2 p {
    margin-left: 3%;
    margin-top: -3.5%;
  }

 .billing-address h4{
     padding-left:2%;
 }

 .bottom{
     background-color:white;
     width:50%;
     margin-top:2%;
     margin-left:2%;
 }

 .bottom p{
     font-size:13px;
     margin-left:3%;
 }

 button{
    padding: 0.6rem 5rem;
    cursor: pointer;
    border-radius: 1rem;
    border: none;
    color: #fff;
    background-color: #1C4695;
    border:1px solid #023e8a;
    font-size: 0.9rem;
    letter-spacing: 0.1rem;
    transition: 0.3s ease-in-out;
    margin-left:32%;
    margin-top:5%;
    &:hover {
      background-color: #1C4695;
      border-color:#023e8a;
 }
`;
