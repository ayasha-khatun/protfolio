import React from 'react';
import Hero from './Hero';
import About from './About';
import Skill from './Skills';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => (
  <div className='w-full'>
    <Hero />
    <About />
    <Education />
    <Skill />
    <Projects />
    <Contact />
  </div>
);

export default Home;
