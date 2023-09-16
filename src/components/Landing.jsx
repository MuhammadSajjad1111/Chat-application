
// import React, { useState } from 'react';
// import main from '../assets/images/main.png';
import Home from './Home';

// import logo from '../assets/images/logo.png';


// import { NavLink } from 'react-router-dom';

import Navbar from './Navbar';
import Services from './Services';
import AboutUs from './AboutUs';
import Testimonial from "./Testimonial";
import Footer from './Footer';


export default function Landing() {


  return (
    <div className=''>
      <Navbar />
      <div className='max-w-screen-xl w-full mx-auto p-4'>
        <Home />
        <AboutUs />
        <Services />
        <Testimonial />

      </div>
      <Footer />
    </div>
  )
}
