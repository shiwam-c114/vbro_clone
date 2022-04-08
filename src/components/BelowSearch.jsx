import React from 'react';
import styled from "styled-components";

export default function BelowSearch(){
  return (
    
    <Container>
        
           <div className='sm1'>
               <p>
               Vacation homes for you and whoever you call family.
               </p>
               <button>Discover your escape</button>
           </div>
           <div className='sm2'>
               <img src='https://odis.homeaway.com/odis/destination/b07d3f2e-ed62-4b1c-aea2-07248c1e8f85.hw1.jpg' alt='img1'/> 
           </div>
         
    </Container>
   
  )
};

const Container = styled.div `

margin-left:10%;
display:flex;
position:relative;
margin-top:-5%;

.sm1{
    background-color:#15326F;
    color:white;
    font-size:25px;
    font-weight:400;
 
}

.sm1 p{
    margin-top:5%;
    margin-left:2%;
    margin-right:2%;
}

img{
    width:400px;
}
button{
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 1rem;
    border: #023e8a;
    color: #023e8a;
    background-color: #fff;
    border:1px solid #023e8a;
    font-size: 0.9rem;
    letter-spacing: 0.1rem;
    transition: 0.3s ease-in-out;
    margin-left:5%;
    margin-top:5%;
    &:hover {
      background-color: white;
      border-color:#023e8a;
    }
  
    @media screen and (min-width: 480px) and (max-width: 980px) {
       
        

    }
      
     
`


