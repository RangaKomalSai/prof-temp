"use client"

import React, { useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Rules from './Rules/Rules';

import 'aos/dist/aos.css';

const Home = () => {

  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import('aos')).default;
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };

    initAOS();
  }, []);

  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Rules />
     
    </div>
  );
};

export default Home;
