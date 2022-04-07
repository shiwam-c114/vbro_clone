import React, { useEffect } from "react";
// import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import  BelowSearch from "./components/BelowSearch";
// import GetInspiredfamily from "./components/GetInspiredfamily";
import Getfamily from "./components/try/getfamily";
import MultiCarousel from "./components/MultiCarousel";
import Services from "./components/Services";
import MultiCarousel2 from "./components/MultiCarousel2";
import MultiCarousel3 from "./components/MultiCarousel3";
import BottomImage from "./components/BottomImage";
import Checkout from "./components/checkout/Checkout";

import { Route } from 'react-router-dom'
import CheckOut2 from "./components/checkout/CheckOut2";
import CheckOut3 from "./components/checkout/CheckOut3";
import Static from "./components/checkout/Static";
import CheckOutmain from "./components/checkout/CheckOutmain";










export default function App() {
  useEffect(() => {
    // const sr = scrollreveal({
    //   origin: "top",
    //   distance: "80px",
    //   duration: 2000,
    //   reset: true,
    // });
    // sr.reveal(
    //   `
    //     nav,
    //     #hero,
    //     #services,
    //     #recommend,
    //     #testimonials,
    //     footer
    //     `,
    //   {
    //     opacity: 0,
    //     interval: 300,
    //   }
    // );
  }, []);
  return (
    <div>
     
      {/* <Navbar />
      <Hero />
      < BelowSearch/>
    
      <Getfamily/>
      <MultiCarousel/>
      <Services/>
      <MultiCarousel2/>
      <MultiCarousel3/>
      <BottomImage/> */}
     {/* <Checkout/> */}
    {/* <CheckOut2/> */}
    {/* <CheckOut3/> */}
    {/* <Static/> */}
      <CheckOutmain/>
    </div>
  );
}
