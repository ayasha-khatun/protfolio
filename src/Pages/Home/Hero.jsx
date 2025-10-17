import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-16 bg-gray-50">
      {/* Left: Text */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, <br /> I am Ayasha<span className="text-purple-600">Khatun</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-bold text-gray-600 mt-2">Frontend Developer | Crafting Seamless Digital Experiences with Code & Creativity.</h2>
        
        <a
          href="/resume.pdf"
          download
          className="btn w-50 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
  hover:scale-105 hover:shadow-lg hover:brightness-110
  rounded-2xl border-none text-white py-2 px-6 mt-6 transition-all duration-300 
  flex items-center gap-2"
        >
          Download Resume
        </a>
        <div className="flex justify-center md:justify-start gap-4 mt-6 text-xl">
          <a href="https://github.com/ayasha-khatun" target="_blank" className="hover:text-indigo-600">GitHub</a>
          <a href="https://www.linkedin.com/in/miss-ayasha-khatun-865381370" target="_blank" className="hover:text-indigo-600">LinkedIn</a>
        </div>
      </div>

      {/* Right: Profile Photo */}
      <div className="flex-1 flex justify-center">
        <img
          src="https://i.ibb.co.com/zT6gCL1B/Untitled-design-removebg-preview.png"
          alt="Profile"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg border-4 border-indigo-600"
        />
      </div>
    </section>
  );
};

export default Hero;

