import React from "react";
import styled from "styled-components";

const BottomImage = () => {
  return (
  
     
        <Div className="bottomImage">
          <img
            src="https://i.ibb.co/Rynj3Dr/1bb3a26d-9eff-45c8-815e-3890dfdd514d-hp-lyp-large.jpg"
            alt="/"
          />
          <div className="text-over-image"><p>List your property on Vrbo and open your door to<br></br>rental income</p>
             <button>List Your Property</button>
          </div>
        </Div>
      
   
  );
};

export default BottomImage;

const Div = styled.div`

img{
  background:linear-gradient(rgb(0,0,0,0.7),rgb(0,0,0,0.7));
  width:1200px;
  height:500px;
  
}
.text-over-image{
  position:relative;
  margin-top:-30%;
  text-align:center;

}


p{
  text-align:center;
  color:white;
  font-size:30px;
  font-weight:600;
}

button {
  padding: 1rem 1rem;
  cursor: pointer;
  border-radius: 3rem;
  border: none;
  color: #fff;
  background-color: #000;
  border:1px solid #023e8a;
  font-size: 0.9rem;
  letter-spacing: 0.1rem;
  margin-top:2%;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: black;
  }

`
