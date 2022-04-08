import React, { useState } from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const initState = {
  where: "",
  checkin: "",
  checkout: "",
  guests: 0
}

export default function Hero() {
  // function to manage state of booking
  const [state, setState] = React.useState(initState)
  function handleChange(e){
    const {name, value} = e.target
    console.log(name, value);
    setState( { ...state, [name]: value} )
  }

  const [cities, setCities] = useState([])
  const [place, setPlace] = useState("")
  const [showRes, setShowRes] = useState(true)




  async function lookup(e) {
    setShowRes(true)
    setPlace(e.target.value)
    const url = `https://test-fake-server-0.herokuapp.com/locations?q=`
    let res = await fetch(url + e.target.value);
    let data = await res.json()
    console.log(e.target.value, data, "this is the data and the input val");
    let arr = []
    for (let i = 0; i < 10; i++) {
      if (data[i]) {
        arr.push(data[i])
      }
    }
    setCities([...arr])
    console.log(cities, "cites");
  }

  function selectedCity(e) {
    setShowRes(!showRes)
    setPlace(e.target.innerHTML)
    setState({...state, where: e.target.innerHTML })
  }

  function saveData() {
    localStorage.setItem("bookingData", JSON.stringify(state));
  }

  let SearchRes = styled.div`
  background-color: white;
  position: absolute;
  left: 200px;
  top: 285px;
  width: 280px;
  `



  return (
    <Section id="hero">
      <div className="background">
        <img src="https://odis.homeaway.com/odis/homepage/695564d7-86a5-4b77-9a88-82147910f864.hw8.jpg" alt="" />
      </div>
      <div className="content">
        <div className="title">
          <h1>Find your place for together</h1>
        </div>
        <div className="search">
          <div className="container">
            <label htmlFor="">Where you want to go</label>
            <input type="text" onChange={lookup} value={place} placeholder="Search Your location" />
          </div>
          <div className="container">
            <label htmlFor="">Check-in</label>
            <input type="date" name="checkin" value={state.checkin} onChange={handleChange} />
          </div>
          <div className="container">
            <label htmlFor="">Check-out</label>
            <input type="date" name="checkout" value={state.checkout} onChange={handleChange} />
          </div>
          
         <Link to={"Listing"}><button onClick={saveData} > <i class="material-icons">search</i>Search</button></Link>
        </div>
        {
          showRes?
        <SearchRes> {cities.map((city)=>
        <p key= {city.id} onClick={selectedCity} >{city.city}</p>
        )} </SearchRes>: null
        }
      </div>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 100%;
  .background {
    height: 100%;
    width:100%;
    img {
      width: 100%;
      filter: brightness(60%);
    }
  }
  .content {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    // text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .title {
      color: white;
      h1 {
        font-size: 2rem;
        letter-spacing: 0.1rem;
        margin-left:-40%;
      }
      p {
        text-align: center;
        padding: 0 30vw;
        margin-top: 0.5rem;
        font-size: 1.2rem;
      }
    }
    .search {
      display: flex;
    
   
      background-color: #ffffffce;
      padding: 0.5rem;
      border-radius: 0.5rem;
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 1.5rem;
        label {
          font-size: 1.1rem;
          color: #03045e;
        }
        input {
          background-color: transparent;
          border: none;
          text-align: center;
          color: black;
          &[type="date"] {
            padding-left: 3rem;
          }
          &::placeholder {
            color: black;
          }
          &:focus {
            outline: none;
          }
        }
      }
      button {
        padding: 1rem;
        cursor: pointer;
        border-radius: 30px;
        border: none;
        color: white;
        background-color: #4361ee;
        font-size: 1.5rem;
       
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #023e8a;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 980px) {
    height: 25rem;
    .background {
      background-color: palegreen;
      img {
        height: 100%;
        width:100%;
      }
    }
    .content {
      .title {
        h1 {
          font-size: 1.0rem;
          margin-left:8%;
        }
        p {
          font-size: 0.8rem;
          padding: 1vw;
        }
      }
      .search {
        flex-direction: column;
        padding: 0.8rem;
        gap: 0.8rem;
        /* padding: 0; */
        .container {
          padding: 0 0.8rem;
          input[type="date"] {
            padding-left: 1rem;
          }
        }
        button {
          padding: 1rem;
          font-size: 1rem;
          border-radius: 30px;
        }
        /* display: none; */
      }
    }
  }
`;