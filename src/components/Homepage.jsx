import React from 'react';
import Navbar from './Navbar';
import AboutUs from './AboutUs';
import Team from './Team';
import Companies from './Companies';
import Testimonials from './Testimonial';
import Footer from './Footer';

function Homepage() {
  return (
    <div>
      <div className='bg-gradient-to-b from-dark to-black h-[10vh]'>
        <Navbar />
      </div>
      <AboutUs />
      <Team />
      <Companies />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Homepage;
