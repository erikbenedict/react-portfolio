import { useState } from 'react';
import logo from '../../assets/images/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className="w-full text-gray-700 bg-slate-300 dark-mode:text-gray-200 dark-mode:bg-gray-800 fixed top-0"
      id="navbar"
    >
      <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="p-4 flex flex-row items-center justify-between">
          <a href="#" className="nav-offset logo-nav hover:opacity-80">
            <img src={logo} alt="logo image" />
          </a>
          <button
            className="md:hidden rounded-lg focus:outline-none focus:shadow-outline nav-offset"
            onClick={toggleMenu}
          >
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              <path
                fillRule="evenodd"
                d={
                  isOpen
                    ? 'M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    : 'M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
                }
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <nav
          className={`flex-col flex-grow pb-4 md:pb-0 ${
            isOpen ? 'flex' : 'hidden'
          } md:flex md:justify-end md:flex-row`}
        >
          <a
            className="px-4 py-2 mt-2 text-sm md:text-lg font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline nav-offset"
            href="#about"
          >
            About
          </a>
          <a
            className="px-4 py-2 mt-2 text-sm md:text-lg font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline nav-offset"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="px-4 py-2 mt-2 text-sm md:text-lg font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline nav-offset"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="px-4 py-2 mt-2 text-sm md:text-lg font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline nav-offset"
            href="#contact"
          >
            Contact
          </a>
          <a
            className="px-4 py-2 mt-2 text-sm md:text-lg font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            href="https://docs.google.com/document/d/1SbyLV4tZle6iL6PTZYrTPR9ZFE2UdRCnC25xpEDLYi8/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </nav>
      </div>
    </div>
  );
}
