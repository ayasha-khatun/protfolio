import React from 'react';
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: "vocab-app",
    name: "Real Estate Platform",
    image: "https://i.ibb.co.com/Tx7XGn6f/p1.png",
  },
  {
    id: "marathon-ms",
    name: "Marathon Management System",
    image: "https://i.ibb.co.com/RkLdCmXC/p2.png",
  },
  {
    id: "bidding-app",
    name: "Recipe Book",
    image: "https://i.ibb.co.com/DDkcBf3v/p3.png",
  },
  
];

const Projects = () => {
  const navigate = useNavigate();
  return (
    <section id="projects" className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.id} className="font-raleway border-2 border-violet-500 shadow-lg shadow-slate-400 rounded-lg overflow-hidden">
              <div className="h-40 overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4 flex flex-col items-center">
                <h3 className="font-semibold text-lg mb-4">{p.name}</h3>
                <button 
                  onClick={() => navigate(`/projects/${p.id}`)} 
                  className="px-3 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition"
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
