import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Whyus from '../components/Whyus';
import Testimonial from '../components/Testimonial';
import Sewasekarang from '../components/Sewasekarang';
import Faq from '../components/Faq';
import Footer from '../components/Footer';

function Home() {
  
  return (
    <>
      <Navbar/>
      <Hero />
      <Services />
      <Whyus />
      <Testimonial />
      <Sewasekarang />
      <Faq />
      <Footer />
    </>
  );
};

export default Home
