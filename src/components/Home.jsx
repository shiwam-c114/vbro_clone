import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import BelowSearch from './BelowSearch';
import Getfamily from './try/getfamily';
import MultiCarousel from './MultiCarousel';
import Services from "./Services"
import MultiCarousel2 from './MultiCarousel2';
import MultiCarousel3 from './MultiCarousel3';
import BottomImage from './BottomImage';
// import Footer from '../../Footer';

const Home = () => {
  return (
    <div>
       <Navbar/>
       <Hero/>
       <BelowSearch/>
       <Getfamily/>
       <MultiCarousel/>
       <Services/>
       <MultiCarousel2/>
       <MultiCarousel3/>
       <BottomImage/>
       {/* <Footer/> */}

    </div>
  )
}

export default Home
