import React from "react";
import { FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { 
  SiHtml5, SiCss3, SiJavascript, SiTailwindcss, 
  SiMongodb, SiFirebase, SiFigma, 
  SiGooglechrome, SiNetlify, SiVercel, SiExpress 
} from "react-icons/si"; // <-- Added SiExpress here

const Skills = () => {
  const frontendSkills = [
    { name: "HTML", icon: <SiHtml5 className="text-orange-500 text-3xl" /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-600 text-3xl" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-3xl" /> },
    { name: "React", icon: <FaReact className="text-blue-400 text-3xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-3xl" /> },
  ];

  const backendSkills = [
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-3xl" /> },
    { name: "Express", icon: <SiExpress className="text-gray-700 text-3xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-3xl" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-400 text-3xl" /> },
  ];

  const toolsSkills = [
    { name: "GitHub", icon: <FaGithub className="text-gray-200 text-3xl" /> },
    { name: "Figma", icon: <SiFigma className="text-pink-500 text-3xl" /> },
    { name: "Chrome DevTools", icon: <SiGooglechrome className="text-red-500 text-3xl" /> },
    { name: "Netlify", icon: <SiNetlify className="text-blue-400 text-3xl" /> },
    { name: "Vercel", icon: <SiVercel className="text-black text-3xl" /> },
  ];

  return (
    <section id="skills" className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-gray-800">Skills</h2>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Frontend */}
          <div className="bg-white p-6 font-raleway border-2 border-violet-500 shadow-lg shadow-slate-400 rounded-lg overflow-hidden">
            <h3 className="font-semibold mb-4 text-purple-600">Frontend</h3>
            <div className="flex flex-wrap gap-4">
              {frontendSkills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center gap-2">
                  {skill.icon}
                  <span className="text-gray-700">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="bg-white p-6 font-raleway border-2 border-violet-500 shadow-lg shadow-slate-400 rounded-lg overflow-hidden">
            <h3 className="font-semibold mb-4 text-purple-600">Backend</h3>
            <div className="flex flex-wrap gap-4">
              {backendSkills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center gap-2">
                  {skill.icon}
                  <span className="text-gray-700">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-white p-6 font-raleway border-2 border-violet-500 shadow-lg shadow-slate-400 rounded-lg overflow-hidden">
            <h3 className="font-semibold mb-4 text-purple-600">Tools</h3>
            <div className="flex flex-wrap gap-4">
              {toolsSkills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center gap-2">
                  {skill.icon}
                  <span className="text-gray-700">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
