import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MenuIcon, XIcon } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="flex items-center justify-between bg-[#0f0f0f] border border-gray-700 rounded-full z-50 px-6 py-3 w-[90%] max-w-6xl mx-auto shadow-sm relative">
      {/* Left Section: Logo */}
      <div className="flex items-center space-x-3">
        <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-md shadow-md">
          <span className="text-white text-2xl font-extrabold">P</span>
        </div>
        <h1 className="text-white text-lg font-semibold tracking-wide">
          Portfolio
        </h1>
      </div>

      {/* Center Section: Links (Desktop) */}
      <ul className="hidden md:flex space-x-8 text-white font-normal tracking-wider">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a
              href={`#${item.toLowerCase()}`}
              className="cursor-pointer hover:text-purple-400 transition-colors"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Right Section: Button (Desktop) */}
      {/* <button className="hidden md:block bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-4 py-1.5 rounded-full transition-all">
        Hired Me
      </button> */}

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <XIcon className="w-6 h-6 text-white" />
          ) : (
            <MenuIcon className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full font-semibold bg-[#0f0f0f]  border-t border-gray-700 rounded-3xl flex flex-col items-center space-y-4 py-4 md:hidden"
          >
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer font-semibold text-white hover:text-purple-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </li>
            ))}
            {/* <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-4 py-1.5 rounded-full transition-all">
              Hired Me
            </button> */}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
