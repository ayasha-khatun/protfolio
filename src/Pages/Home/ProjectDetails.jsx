// src/pages/ProjectDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

const projectData = {
  "real-estate": {
    name: "Real Estate Platform",
    image: "https://i.ibb.co/Tx7XGn6f/p1.png",
    techStack: "React, Node.js, Express, MongoDB, JWT, Tailwind CSS",
    description:
      "A full-stack real estate platform allowing agents to list properties, manage offers, and complete secure transactions. It includes dashboards for both agents and users with authentication and role-based access.",
    liveLink: "https://propease-baa74.web.app/",
    github: "https://github.com/ayasha-client/real-estate-platform",
    challenges:
      "Implementing role-based dashboards, JWT authentication, and managing offer acceptance logic with MongoDB updates.",
    improvements:
      "Add payment gateway integration and advanced property search with map filtering.",
  },
  "marathon-ms": {
    name: "Marathon Management System",
    image: "https://i.ibb.co/RkLdCmXC/p2.png",
    techStack: "React, Node.js, Express, MongoDB, JWT, Tailwind CSS",
    description:
      "A platform to manage marathons — create, register, and monitor events. Features include authentication, registration tracking, and dashboards for users and admins.",
    liveLink: "https://marathon-management-syst-38d0d.web.app/",
    github: "https://github.com/ayasha-client/marathon-management-system",
    challenges:
      "Synchronizing live registration counts and implementing JWT-protected routes for secure data access.",
    improvements:
      "Add event analytics with charts and integrate online registration payment.",
  },
  "recipe-book": {
    name: "Recipe Book App",
    image: "https://i.ibb.co/DDkcBf3v/p3.png",
    techStack: "React, Firebase Auth, MongoDB, Express, Tailwind CSS",
    description:
      "A recipe management app where users can add, edit, like, and view their favorite recipes. Includes private routes and Firebase authentication.",
    liveLink: "https://recipe-book-app-58c35.web.app/",
    github: "https://github.com/ayasha-client/recipe-book-app",
    challenges:
      "Filtering recipes by user and implementing protected routes using Firebase Auth.",
    improvements:
      "Add user comments, ratings, and AI-based recipe suggestions.",
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) {
    return (
      <div className="text-center py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
        <h2 className="text-2xl font-bold text-red-500">Project not found</h2>
        <Link
          to="/projects"
          className="inline-block mt-4 text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <section className="py-16 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 transition-colors">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-64 sm:h-80 object-cover rounded-lg mb-6"
        />
        <h1 className="text-3xl sm:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
          {project.name}
        </h1>
        <p className="text-gray-800 dark:text-gray-200 mb-4">
          <strong>Tech Stack:</strong> {project.techStack}
        </p>
        <p className="text-gray-800 dark:text-gray-200 mb-4">
          <strong>Description:</strong> {project.description}
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-6">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 mb-3 sm:mb-0 bg-green-500 dark:bg-green-600 text-white rounded-md text-sm sm:text-base font-medium hover:bg-green-600 dark:hover:bg-green-500 transition-colors"
          >
            Live Project
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-md text-sm sm:text-base font-medium hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors"
          >
            GitHub (Client)
          </a>
        </div>

        <p className="text-gray-800 dark:text-gray-200 mb-4">
          <strong>Challenges:</strong> {project.challenges}
        </p>
        <p className="text-gray-800 dark:text-gray-200 mb-4">
          <strong>Improvements:</strong> {project.improvements}
        </p>

        <Link
          to="/projects"
          className="inline-block mt-8 text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          ← Back to Projects
        </Link>
      </div>
    </section>
  );
};

export default ProjectDetails;
