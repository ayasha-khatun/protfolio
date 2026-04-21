import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900/90 backdrop-blur-md shadow-md z-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide">
            <span className="text-purple-400">Ayasha</span>
            <span className="text-pink-400"> Khatun</span>
          </h1>
          <span className="hidden md:block text-sm sm:text-base lg:text-lg text-gray-400">
            Frontend Developer
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center font-medium text-sm sm:text-base md:text-lg xl:text-xl">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="relative text-gray-200 hover:text-purple-400 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-purple-400 hover:after:w-full after:transition-all"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl text-white focus:outline-none"
          aria-label="Toggle Menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-900 shadow-md overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.link}
            className="block px-6 py-3 border-b border-gray-700 text-gray-200 hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
