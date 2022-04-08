import React, { useEffect, useState } from "react";

import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";


function Checkout() {
  
  return (
    <Div>
      <div className="py-2">
        <Link to={"/"}>

        <div className="logo1">
          <img
            src="https://csvcus.homeaway.com/rsrcs/cdn-logos/5.8.0/sitename/vrbo/web/logo.svg"
            alt="/"
            />
        </div>
            </Link>
        <div className="text2">
          <h1>Begin your booking</h1>
        </div>
      </div>
      <div className="py_3">
        <div className="container">
          <h3>Book with confidence. Guaranteed.</h3>
          <p>You’re covered when you book and pay on Vrbo.</p>
          <div className="conatiner2">
            <p>
              <i class="material-icons">timer</i>Act fast! Price and
              availability may change.
            </p>
            <p>
              {" "}
              <i class="material-icons">money_off_csred</i>Non-refundable for
              your trip dates
            </p>
          </div>
        </div>
      </div>

      <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group mb-3">
                <h4>Enter Contact Information</h4>
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
              <br />
              <input
                   style={{ height: "40px", margin: "15px" }}
                    type="text"
                     placeholder="E-mail"
                    name="firstname"
                    className="form-control"
              />
              <input
                    style={{ height: "40px",margin: "15px" }}
                     type="text"
                      placeholder="Mobile Number"
                     name="Number"
                      className="form-control"
               />
            </div>
          </div>
        </div>
      </div>
      <div className="tell-host">
          <div className="tell">
              <h4>Tell the host about your trip</h4>
            </div>
        <p>
          Let them know who you are traveling with and what brings you to the
          area.
        </p>
        <div className="small-image">
          <div className="image-box">
            <img
              src="https://i.ibb.co/gDhTCPd/rahul-disha-1-modified.png"
              width="80px"
              alt="/"
            />
          </div>
          <div className="small-image-text">
            <p>spaeks:english</p>
            <p>Rahul and Priya </p>
          </div>
        </div>
        <input
          style={{ height: "100px", width: "70%", margin: "10px" }}
          type="text"
          placeholder="Your message....(optional)"
        />
      </div>
      <div className="last-part-button">
        <p>
          By clicking 'Agree & continue' you are agreeing to our Terms and
          Conditions, Privacy Policy, and to receive booking-related texts.
          Standard messaging rates may apply.
        </p>
        <div className="agree-button">
          <Link to={`/Secondndstep`}><button >Agree & continue</button></Link>
        </div>
      </div>
    </Div>
  );
}

export default Checkout;

const Div = styled.div`
background-color:#F5F4F3;

.py_3{
    margin-left:1%;
    background-color:white;
    width:90%;
    height:200px;
   
 }

 .container{
     margin:3%;
 }
 .container p{
    margin-top:2%;
 }

 .col-md-6{
     margin-left:2%;
     padding-top:2%;
 }

 .form-group mb-3 h4{
   
    margin-left:2%;
    padding-left:2%;
 }

 .card-body{
    margin-left:1%;
    background-color:white;
    width:90%;
    height:200px;
    margin-top:2%;
   
 }

 .tell-host{
    margin-left:1%;
    background-color:white;
    width:90%;
    height:300px;
    margin-top:2%;
 }

.tell h4,p{
    padding-top:2%;
    padding-left:2%;
}


 

.small-image{
   display:flex;
   margin-left:3%;
   margin-top:2%;
}

.small-image-text{
    margin-left:3%;
    margin-top:2%;
    font-size:12px;
}

.last-part-button{
    width:90%
  
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
   margin-left:45%;
    margin-top:5%;
    &:hover {
      background-color: #1C4695;
      border-color:#023e8a;
}



`;
