const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Left: Copyright */}
        <p className="text-sm text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} Your Name. All Rights Reserved.
        </p>

        {/* Right: Social Links */}
        <div className="flex gap-5 text-xl">
          <a
            href="https://github.com/ayasha-khatun"
            target="_blank"
            className="hover:text-indigo-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/miss-ayasha-khatun-865381370"
            target="_blank"
            className="hover:text-indigo-400 transition"
          >
            LinkedIn
          </a>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
