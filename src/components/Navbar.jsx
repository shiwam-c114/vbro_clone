import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);
  const [uName, setUName] = useState("")
  useEffect( async () => {
    let user = sessionStorage.getItem("user")
    user = await JSON.parse(user)
    console.log(user);
    setUName(user.fname)
  }, [])
 
  function logout() {
    sessionStorage.removeItem("user");

    setUName("")
    console.log("inside logout")
  }

 

  return (

    <>
      <Nav>
        <div className="brand">
          <Link to={"/"}>

          <div className="container">
            <img src="https://csvcus.homeaway.com/rsrcs/cdn-logos/5.8.0/sitename/vrbo/web/logo.svg" alt="" />
          </div>
          </Link>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavbarState(true)} />
            )}
          </div>
        </div>

        <ul>
          <li>
            <i class="material-icons">favorite_border</i>
            <a href="#">Trip Board</a>
          </li>
          <li>

            <i class="material-icons">person_outline</i>
            {sessionStorage.getItem("user") 
              ? 
            <div class="dropdown">
              <span>{uName}</span>
              <div class="dropdown-content">
              <p onClick={logout}>logout</p>
              </div>
            </div>
            :
            <Link to="/Login">Log in </Link>}
            
    
          </li>
          <li>
             <i class="material-icons">person_add_alt</i>
            <Link to={"/SignUp"}>Sign Up</Link>
             
          </li>
          <li>
             <i class="material-icons">help_outline</i>
            <a href="#">Help</a>
          </li>

        </ul>
        <button>List Your Property</button>
      </Nav>
      <ResponsiveNav state={navbarState}>
        <ul>
          <li>
            <a href="#" onClick={() => setNavbarState(false)}>
               Trip Board
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setNavbarState(false)}>
               Log in
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setNavbarState(false)}>
               Sign Up
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setNavbarState(false)}>
                Help
            </a>
          </li>
        </ul>
      </ResponsiveNav>
    </>
  );
}

const Nav = styled.nav`
<<<<<<< HEAD
=======
.dropdown {
  position: relative;
  display: inline-block;
  color:#023e8a;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
>>>>>>> 53085e7a9bf4c4816e680aa4c66df74154e2225e

  display: flex;
  justify-content: space-between;
  align-items: center;
  .brand {
    .container {
      
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.4rem;
      font-size: 1.2rem;
      font-weight: 900;
      text-transform: uppercase;
    }
    .toggle {
      display: none;
    }
  }
  ul {
    margin-left:40%;
    display: flex;
    gap: 1rem;
    list-style-type: none;
    li {
      a {
        text-decoration: none;
        color: #0077b6;
        font-size: 0.8 rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #023e8a;
        }
      }
      &:first-of-type {
        a {
          color: #023e8a;
          font-weight: 400;
        }
      }
    }
  }

  .material-icons{
      color:#023e8a;
  }
  button {
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 1rem;
    border: none;
    color: #023e8a;
    background-color: #fff;
    border:1px solid #023e8a;
    font-size: 0.9rem;
    letter-spacing: 0.1rem;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: white;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .toggle {
        display: block;
      }
    }
    ul {
      display: none;
    }
    button {
      display: none;
    }

    .material-icons{
        color:#023e8a;
    }
  }

`;

const ResponsiveNav = styled.div`
  display: flex;
  position: absolute;
  z-index: 5;
  top: ${({ state }) => (state ? "50px" : "-400px")};
  background-color: white;
  height: 30vh;
  width: 100%;
  align-items: center;

  transition: 0.3s ease-in-out;
  ul {
    list-style-type: none;
    width: 100%;
    li {
      width: 100%;
      margin: 1rem 0;
      margin-left: 2rem;
      a {
        text-decoration: none;
        color: #0077b6;
        font-size: 1rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #023e8a;
        }
      }
      &:first-of-type {
        a {
          color: #023e8a;
          font-weight: 500;
        }
      }
    }
  }
`;