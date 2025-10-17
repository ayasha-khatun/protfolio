import React from "react";

const educationData = [
  {
    period: "2020-Present",
    title: "DIPLOMA IN ENGINEERING",
    details: ["DIPLOMA(3.85 out of CGPA-4)", "Dhaka Mohila Polytechnic Institute"],
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        height="2em"
        width="2em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M256 368a16 16 0 0 1-7.94-2.11L108 285.84a8 8 0 0 0-12 6.94V368a16 16 0 0 0 8.23 14l144 80a16 16 0 0 0 15.54 0l144-80a16 16 0 0 0 8.23-14v-75.22a8 8 0 0 0-12-6.94l-140.06 80.05A16 16 0 0 1 256 368z"></path>
        <path d="M495.92 190.5v-.11a16 16 0 0 0-8-12.28l-224-128a16 16 0 0 0-15.88 0l-224 128a16 16 0 0 0 0 27.78l224 128a16 16 0 0 0 15.88 0L461 221.28a2 2 0 0 1 3 1.74v144.53c0 8.61 6.62 16 15.23 16.43A16 16 0 0 0 496 368V192a14.76 14.76 0 0 0-.08-1.5z"></path>
      </svg>
    ),
  },
  {
    period: "2019-2020",
    title: "SECONDARY SCHOOL CERTIFICATE",
    details: ["SSC (5.00 out of GPA-5)", "PATHRA HIGH SCHOOL"],
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        height="2em"
        width="2em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M256 368a16 16 0 0 1-7.94-2.11L108 285.84a8 8 0 0 0-12 6.94V368a16 16 0 0 0 8.23 14l144 80a16 16 0 0 0 15.54 0l144-80a16 16 0 0 0 8.23-14v-75.22a8 8 0 0 0-12-6.94l-140.06 80.05A16 16 0 0 1 256 368z"></path>
        <path d="M495.92 190.5v-.11a16 16 0 0 0-8-12.28l-224-128a16 16 0 0 0-15.88 0l-224 128a16 16 0 0 0 0 27.78l224 128a16 16 0 0 0 15.88 0L461 221.28a2 2 0 0 1 3 1.74v144.53c0 8.61 6.62 16 15.23 16.43A16 16 0 0 0 496 368V192a14.76 14.76 0 0 0-.08-1.5z"></path>
      </svg>
    ),
  },
  {
    period: "28/12/2024 - 28/07/2025",
    title: "FRESHER MERN STACK DEVELOPER",
    details: ["Learning Frontend Developing 6 months", "Programming Hero"],
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        height="2em"
        width="2em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M256 368a16 16 0 0 1-7.94-2.11L108 285.84a8 8 0 0 0-12 6.94V368a16 16 0 0 0 8.23 14l144 80a16 16 0 0 0 15.54 0l144-80a16 16 0 0 0 8.23-14v-75.22a8 8 0 0 0-12-6.94l-140.06 80.05A16 16 0 0 1 256 368z"></path>
        <path d="M495.92 190.5v-.11a16 16 0 0 0-8-12.28l-224-128a16 16 0 0 0-15.88 0l-224 128a16 16 0 0 0 0 27.78l224 128a16 16 0 0 0 15.88 0L461 221.28a2 2 0 0 1 3 1.74v144.53c0 8.61 6.62 16 15.23 16.43A16 16 0 0 0 496 368V192a14.76 14.76 0 0 0-.08-1.5z"></path>
      </svg>
    ),
  },
];

const Education = () => {
  return (
    <section className="mt-12 pb-12 bg-gray-50">
      <h1 className="text-4xl font-bold p-12"><span className=" text-purple-600">Education</span> & <span className="text-pink-500">Experience</span></h1>
      <div className="flex flex-wrap justify-center gap-8">
        {educationData.map((edu, index) => (
        <div
          key={index}
          className="max-w-md w-full font-raleway border-2 border-violet-500 shadow-lg shadow-slate-400 text-white rounded-lg overflow-hidden"
        >
          <p className= "text-green-800  mx-auto text-center mt-2">{edu.period}</p>
          <div className="px-4 py-2 flex items-center gap-5 justify-between">
            <div className="text-4xl text-green-800 mx-auto">{edu.icon}</div>
            <div>
              <h1 className="text-xl font-bold text-black font-raleway mt-5 mb-5">{edu.title}</h1>
              {edu.details.map((detail, i) => (
                <h2 key={i} className="mb-5 text-gray-600">{detail}</h2>
              ))}
            </div>
          </div>
        </div>
      ))}
      </div>
    </section>
  );
};

export default Education;
