import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-5 md:px-16 bg-gray-50 dark:bg-gray-900 transition-colors"
    >
      {/* Left: Text */}
      <div className="flex-1 max-w-3xl text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight">
          Hi, <br />
          I am <span className="text-purple-600 dark:text-purple-400">Ayasha Khatun</span>
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300 mt-4">
          Frontend Developer | Crafting seamless digital experiences with code & creativity.
        </h2>

        {/* Download Resume Button */}
        <a
          href="https://drive.google.com/file/d/1rh4sgMJYNTJ_dXN79UbiTSGtrr0SZz4i/view?usp=drive_link"
          download
          className="inline-block mt-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
            text-white font-semibold py-3 px-7 rounded-2xl shadow-lg hover:scale-105
            hover:brightness-110 transition-transform duration-300"
        >
          Download Resume
        </a>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start gap-6 mt-6 text-2xl">
          <a
            href="https://github.com/ayasha-khatun"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-200 hover:text-indigo-500 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/miss-ayasha-khatun-865381370"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-200 hover:text-indigo-500 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Right: Profile Photo */}
      <div className="flex-1 flex justify-center">
        <img
          src="https://i.ibb.co/zT6gCL1B/Untitled-design-removebg-preview.png"
          alt="Profile"
          className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl border-4 border-indigo-600 dark:border-purple-500"
        />
      </div>
    </section>
  );
};

export default Hero;
