import React, { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import CheckOut2 from "./components/checkout/CheckOut2";
import CheckOut3 from "./components/checkout/CheckOut3";

import CheckOutmain from "./components/checkout/CheckOutmain";
import Featured from "./components/featured/Featured";
import Home from "./components/Home";
import Listing from "./components/Listing";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
















export default function App() {
  return (
    <div>

     <Routes>
     <Route path="/" element={<Home />} />
      <Route path="/FirstStep" element={<CheckOutmain />} />
      <Route path="/Secondndstep" element={<CheckOut2 />} />
      <Route path="/ThirdStep" element={<CheckOut3 />} />
      <Route path="/ThirdPage" element={<Featured />} />
      <Route path = "/Listing" element={<Listing/>}/>
      <Route path = "/Featured" element={<Featured/>}/>
      <Route path = "/Login" element={<Login/>}/>
      <Route path = "/Signup" element={<Signup/>}/>
    </Routes>
       
    </div>
  );
}
