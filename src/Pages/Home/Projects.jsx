// src/pages/Projects.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: "real-estate",
    name: "Real Estate Platform",
    image: "https://i.ibb.co/Tx7XGn6f/p1.png",
  },
  {
    id: "marathon-ms",
    name: "Marathon Management System",
    image: "https://i.ibb.co/RkLdCmXC/p2.png",
  },
  {
    id: "recipe-book",
    name: "Recipe Book App",
    image: "https://i.ibb.co/DDkcBf3v/p3.png",
  },
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-indigo-600 dark:text-indigo-400 font-raleway">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div
              key={p.id}
              className="border border-indigo-300 dark:border-indigo-700 rounded-2xl shadow-md dark:shadow-gray-800 hover:shadow-xl hover:scale-[1.03] transition-transform duration-300 bg-white dark:bg-gray-800 overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col items-center">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  {p.name}
                </h3>
                <button
                  onClick={() => navigate(`/projects/${p.id}`)}
                  className="px-4 py-2 bg-indigo-500 dark:bg-indigo-600 text-white text-sm sm:text-base rounded-md hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-colors"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
