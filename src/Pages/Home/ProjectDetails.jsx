import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// Same projects array as in Projects.jsx
const projects = [
  {
    id: "vocab-app",
    name: "Real Estate Platform",
    image: "https://i.ibb.co.com/Tx7XGn6f/p1.png",
    stack: ["React", "Tailwind", "Node.js", "MongoDB"],
    description: "A web app to learn vocabulary.",
    liveLink: "https://propease-baa74.web.app/",
    repoLink: "https://github.com/ayasha-khatun/propease_repo",
    challenges: "Managing state and speech synthesis.",
    improvements: "Add user accounts and progress sync.",
  },
  {
    id: "marathon-ms",
    name: "Marathon Management System",
    image: "https://i.ibb.co.com/RkLdCmXC/p2.png",
    stack: ["MERN", "JWT", "Express"],
    description: "Full-stack marathon platform.",
    liveLink: "https://marathon-management-syst-38d0d.web.app/",
    repoLink: "https://github.com/ayasha-khatun/marathon_repo",
    challenges: "JWT auth and registrations.",
    improvements: "Add admin dashboard and payments.",
  },
  {
    id: "bidding-app",
    name: "Recipe Book",
    image: "https://i.ibb.co.com/DDkcBf3v/p3.png",
    stack: ["React", "Context API", "Tailwind"],
    description: "Auction-style UI.",
    liveLink: "https://recipe-book-app-58c35.web.app/",
    repoLink: "https://github.com/ayasha-khatun/recipe_book",
    challenges: "Responsive cards and local state.",
    improvements: "Add real-time bidding.",
  },
  
];

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  if (!project) return (
    <div className="p-6 text-center">
      <h2 className="text-xl font-semibold mb-4">Project Not Found</h2>
      <button
        onClick={() => navigate("/")}
        className="px-4 py-2 bg-indigo-600 text-white rounded-md"
      >Go Back Home</button>
    </div>
  );

  return (
    <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <button onClick={() => navigate(-1)} className="text-sm underline mb-4">← Back</button>
      <div className="border rounded-lg overflow-hidden shadow-lg">
        <img src={project.image} alt={project.name} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h2 className="text-2xl font-semibold">{project.name}</h2>
          <p className="text-gray-700 mt-4">{project.description}</p>
          <p className="mt-2 text-sm text-gray-600">Stack: {project.stack.join(", ")}</p>
          <div className="mt-4 space-y-2">
            <p><strong>Live Demo:</strong> <a href={project.liveLink} target="_blank" className="underline text-indigo-600">Link</a></p>
            <p><strong>Repo:</strong> <a href={project.repoLink} target="_blank" className="underline text-indigo-600">GitHub</a></p>
            <p><strong>Challenges:</strong> {project.challenges}</p>
            <p><strong>Improvements:</strong> {project.improvements}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
