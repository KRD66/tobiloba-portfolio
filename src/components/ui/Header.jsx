import { useState } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import Logo from '../../assets/images/temtoplogo.png';
import { useDarkMode } from '../../context/DarkModeContext';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
  ];

  return (
    <header
      className={`w-full max-w-[1440px] h-[100px] mx-auto border-b sticky top-0 z-20 ${
        isDarkMode ? 'bg-[#000] border-[#cccc]' : 'bg-[#020A51] border-[#C7CCF9]'
      }`}
    >
      <div className="h-full flex items-center justify-between px-2 sm:px-8">
        {/* Left: Logo as ScrollLink */}
        <div className="flex items-center pl-0 sm:pl-4">
          <ScrollLink
            to="home"
            smooth={true}
            duration={600}
            offset={-100}
            className="cursor-pointer"
          >
            <img
              src={Logo}
              alt="Temtop Logo"
              className="w-40 h-12 object-contain rounded-lg"
            />
          </ScrollLink>
        </div>

        {/* Desktop Nav - Centered using absolute + transform */}
        <nav className="hidden md:flex items-center h-[60px] space-x-10 absolute left-1/2 transform -translate-x-1/2">
          {navItems.map(({ name, to }) => (
            <div key={name} className="relative group cursor-pointer">
              <ScrollLink
                to={to}
                smooth={true}
                duration={600}
                offset={-100}
                className={`flex items-center justify-center w-[90px] h-[40px] text-xl font-bold font-comfortaa ${
                  isDarkMode
                    ? 'text-[#E6E8FD] group-hover:text-white'
                    : 'text-[#E6E8FD] group-hover:text-white'
                }`}
              >
                {name}
              </ScrollLink>
              <div
                className={`absolute bottom-0 left-0 w-0 h-[2px] ${
                  isDarkMode ? 'bg-[#E6E8FD]' : 'bg-[#E6E8FD]'
                } opacity-0 group-hover:opacity-100 transition-all duration-200 ${
                  name === 'Home'
                    ? 'group-hover:w-1/2'
                    : name === 'About'
                    ? 'group-hover:w-[75%]'
                    : 'group-hover:w-[85%]'
                }`}
              ></div>
            </div>
          ))}

          {/* Contact Us Button */}
          <ScrollLink
            to="contact"
            smooth={true}
            duration={600}
            offset={-100}
            className="flex items-center justify-center h-[40px] px-[20px] py-[12px] rounded-md gap-[5px] font-comfortaa font-bold text-lg bg-[#E6E8FD] text-[#020A51] hover:bg-[#E6E8FD]/90 transition-colors cursor-pointer"
          >
            Contact Us
          </ScrollLink>
        </nav>

        {/* Right: Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-md ${
              isDarkMode ? 'bg-gray-700 text-[#E6E8FD]' : 'bg-gray-200 text-gray-700'
            } hover:bg-red-500 hover:text-white transition-colors`}
          >
            {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>

          <button
            className="p-2 text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop Dark Mode Toggle - Right side */}
        <button
          onClick={toggleDarkMode}
          className={`hidden md:flex p-2 rounded-md absolute right-8 ${
            isDarkMode ? 'bg-gray-700 text-[#E6E8FD]' : 'bg-gray-200 text-gray-700'
          } hover:bg-red-500 hover:text-white transition-colors`}
        >
          {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden ${
            isDarkMode
              ? 'bg-[#000] border-t border-[#E6E8FD]'
              : 'bg-[#020A51] border-t border-[#C7CCF9]'
          } px-6 py-4`}
        >
          {navItems.map(({ name, to }) => (
            <div key={name} className="relative group mb-4 cursor-pointer">
              <ScrollLink
                to={to}
                smooth={true}
                duration={600}
                offset={-100}
                className={`block w-full h-[40px] flex items-center text-xl font-bold font-comfortaa ${
                  isDarkMode
                    ? 'text-[#E6E8FD] group-hover:text-white'
                    : 'text-[#E6E8FD] group-hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {name}
              </ScrollLink>
              <div
                className={`absolute bottom-0 left-0 w-0 h-[2px] ${
                  isDarkMode ? 'bg-[#E6E8FD]' : 'bg-[#E6E8FD]'
                } opacity-0 group-hover:opacity-100 transition-all duration-200 ${
                  name === 'Home'
                    ? 'group-hover:w-1/2'
                    : name === 'About'
                    ? 'group-hover:w-[75%]'
                    : 'group-hover:w-[85%]'
                }`}
              ></div>
            </div>
          ))}

          {/* Mobile Contact Us */}
          <ScrollLink
            to="contact"
            smooth={true}
            duration={600}
            offset={-100}
            onClick={() => setIsOpen(false)}
            className="w-full h-[40px] px-[20px] py-[12px] rounded-md gap-[5px] font-comfortaa font-bold text-lg bg-[#E6E8FD] text-[#020A51] hover:bg-[#E6E8FD]/90 transition-colors flex items-center justify-center cursor-pointer"
          >
            Contact Us
          </ScrollLink>
        </div>
      )}
    </header>
  );
}
