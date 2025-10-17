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
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-5 py-3 flex justify-between items-center">
        
        {/* Left Side: Photo + Name + Designation */}
        <div className="flex items-center gap-3">
          <div>
            <h1 className="text-2xl font-bold"><span className="text-purple-600">Ayasha</span><span className="text-pink-500">Khatun</span></h1>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center font-medium">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="hover:text-purple-600 transition"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="block px-4 py-2 border-b hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
