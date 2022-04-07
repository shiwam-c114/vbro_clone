import React from "react";
import styled from "styled-components";
function CheckOut2() {
  return (
    <Sec>
      <div className="py-2">
        <div className="logo1">
          <img
            src="https://csvcus.homeaway.com/rsrcs/cdn-logos/5.8.0/sitename/vrbo/web/logo.svg"
            alt="/"
          />
        </div>
        <div className="text2">
          <h2>Review rules & policies</h2>
        </div>
      </div>

      <div className="container">
        <h3>House Rules</h3>
        <p>Check in after 4:00 PM.</p>
        <p>Check out before 11:00 AM</p>
        <p>Maximum overnight guests: 6 (sleeps up to 6 adults)</p>
        <p>Minimum age to rent: 25</p>
        <div className="container2">
          <p>
            <i class="material-icons">shopping_cart_checkout</i>Children
            allowed: ages 0-17
          </p>
          <p>
            <i class="material-icons">pets</i>No pets allowed
          </p>

          <p>
            <i class="material-icons">hide_source</i>No events allowed
          </p>

          <p>
            <i class="material-icons">smoke_free</i>No smoking allowed
          </p>
        </div>
      </div>

      <div className="policies">
        <h3>Policies</h3>

        <div className="policies2">
          <p>
            <i class="material-icons">paid</i>
            <span>Host's Cancellation Policy:</span>
            <br></br>Your booking will not qualify for a refund based on your
            trip dates.
            <br />
            <br />
            Please make sure you are happy with the cancellation policy for this
            booking, which will also apply if you have to cancel due to any
            Covid-19 related issues.
          </p>
          <p>
            <i class="material-icons">payment</i>
            <span>Damage and Incidentals:</span>
            <br></br>If you incur incidental fees or cause damage to the rental
            property, your credit card may be charged.
            <br />
            <br />
            Please make sure you are happy with the cancellation policy for this
            booking, which will also apply if you have to cancel due to any
            Covid-19 related issues.
          </p>
          <br></br>
          <p>
            <span>Don't forget:</span>Add Trip Protection after completing your
            booking request.
          </p>
        </div>
      </div>
         <br/>
      <div className="last-part-button">
        <p>
          By clicking 'Agree & continue' you are agreeing to the above rental
          policies and terms
        </p>
        <div className="agree-button">
          <button>Agree & continue</button>
        </div>
      </div>
    </Sec>
  );
}

export default CheckOut2;

const Sec = styled.div`
  background-color: #f5f4f3;
.text2{
  padding-left:5%;
  padding-top:3%;
}
  .container {
    background-color: white;
    margin-top: 3%;
    width: 50%;
    margin-left: 2%;
  }

  .container h3,
  p {
    padding-top: 2%;
    padding-left: 5%;
  }

  .policies {
    background-color: white;
    margin-top: 3%;
    width: 50%;
    margin-left: 2%;
  }

  .policies h3{
      padding-left:3%;
      padding-top:2%;
  }

  .policies span {
    font-weight: 600;
  }


  .last-part-button{
    width:50%

  
}

.last-part-button p{
    font-size:15px;
    margin-left:5%;
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
    margin-left:50%;
    margin-top:5%;
    &:hover {
      background-color: #1C4695;
      border-color:#023e8a;
}
`;
