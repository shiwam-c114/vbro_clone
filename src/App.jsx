import React, { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import CheckOut2 from "./components/checkout/CheckOut2";
import CheckOut3 from "./components/checkout/CheckOut3";

import CheckOutmain from "./components/checkout/CheckOutmain";
import Home from "./components/Home";















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
     <Routes>
     <Route path="/" element={<Home />} />
      <Route path="/FirstStep" element={<CheckOutmain />} />
      <Route path="/Secondndstep" element={<CheckOut2 />} />
      <Route path="/ThirdStep" element={<CheckOut3 />} />
    </Routes>
       
    </div>
  );
}
