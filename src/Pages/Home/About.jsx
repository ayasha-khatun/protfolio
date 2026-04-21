import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-5 md:px-16 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100">
          <span className="text-pink-500 dark:text-pink-400">About</span>
          <span className="text-purple-600 dark:text-purple-400"> Me</span>
        </h2>

        {/* Description */}
        <div className="mt-6 space-y-4 text-gray-700 dark:text-gray-300 text-lg sm:text-xl leading-relaxed">
          <p>
            Hello! I'm <span className="font-semibold text-purple-600 dark:text-purple-400">Ayasha Khatun</span>, a passionate Web Developer with hands-on experience in building dynamic and responsive web applications. I specialize in <span className="font-medium text-indigo-500 dark:text-indigo-400">HTML, CSS, JavaScript, React, Tailwind CSS, Node.js, Express.js, Firebase, MongoDB</span>, and other modern web development technologies.
          </p>
          <p>
            I love solving problems through code and constantly learn, experiment, and improve my skills to stay up to date with the latest industry trends. My main focus is to build intuitive, user-friendly, and visually appealing digital experiences.
          </p>
          <p>
            In my free time, I enjoy exploring new technologies, reading, and contributing to open-source projects to grow as a developer and give back to the community.
          </p>
          <p className="font-semibold text-indigo-600 dark:text-indigo-400">
            ✨ I’m always excited to collaborate on innovative ideas. Let’s build something great together! 🚀
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
