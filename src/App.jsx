import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
// import Recommend from "./components/Recommend";
// import ScrollToTop from "./components/ScrollToTop";
// import Services from "./components/Services";
// import Testimonials from "./components/Testimonials";
// import scrollreveal from "scrollreveal";
import  BelowSearch from "./components/BelowSearch";
// import GetInspiredfamily from "./components/GetInspiredfamily";
// import Getfamily from "./components/try/getfamily";
// import MultiCarousel from "./components/MultiCarousel";
// import Services from "./components/Services";
// import MultiCarousel2 from "./components/MultiCarousel2";
// import MultiCarousel3 from "./components/MultiCarousel3";
// import BottomImage from "./components/BottomImage";
// import SearchResultPage from "./components/SearchResultPage"
// import Footer from "./components/Footer";












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
      {/* <ScrollToTop /> */}
      <Navbar />
      <Hero />
      < BelowSearch/>
      {/* <SearchResultPage /> */}
      {/* <GetInspiredfamily/> */}
      {/* <Getfamily/> */}
      {/* <MultiCarousel/> */}
      {/* <Services/> */}
      {/* <MultiCarousel2/> */}
      {/* <MultiCarousel3/> */}
      {/* <BottomImage/> */}
      <Footer />
      
    
      
    </div>
  );
}
