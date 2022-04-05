import React, { useState } from 'react'
import styledComponents from 'styled-components'
import './Signup.css'

export default function Signup() {
  const initState = {
    "email":"",
    "fname":"",
    "lname":"",
    "password":"",
  }
  const [signup, setSignup] = useState(initState)

  function handleChange(e) {
    const {name, value} = e.target
    setSignup({...signup,[name]:value})
    console.log(signup);
  }


  const A = styledComponents.a`
  text-decoration: none;
  color: #4371c5;
  `

  const P = styledComponents.p`
  color: red;
  visibility: hidden;

  `
  function validateEmail(e) {
    const {value} = e.target;
     if (!(value.includes("@") && value.includes("."))) {
      P = styledComponents.p`
      color: red;
      visibility: visible
      `
     }
  }

  return (
    < div className='Signup'>
      <div>Signup</div>
      <h1>Create an account</h1>
      <form>
        <input onChange={handleChange}  type="text" name="email" placeholder='Email address' />
        <br />
        <P>enter a valid email address</P>
        <input onChange={handleChange} type="text" name="fname" placeholder='First name' />
        <br />
        <input onChange={handleChange} type="text" name="lname" placeholder='Last name' />
        <br />
        <input onChange={handleChange} type="text" name="password" placeholder='Password' />
        <br />
        <input type="checkbox" id='persist'/>
        <label htmlFor="persist">Keep me signed in</label>
        <p>By creating an account, I agree to the Vrbo <A href="https://www.vrbo.com/legal/terms-and-conditions">Terms and Conditions</A>  and <A href="https://www.vrbo.com/legal/privacy-policy">Privacy Statement</A> .</p>
        <input type="submit" name="" id="" /> 
      </form>
      
    </div >

  )
}
