import Hamburger from './Hamburger';
import SideDrawer from './SideDrawer';
import { useState } from 'react';
import logo from '../../assets/images/logo.png';

export default function Nav() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <header
      id="navbar"
      className="flex flex-re justify-between items-center fixed top-0 w-full z-20 py-3.5 px-4 lg:py-2.5 lg:px-[75px] bg-white"
    >
      <a
        href="#"
        aria-label="Link to home page"
        className="nav-offset logo-nav"
      >
        <img
          src={logo}
          alt="Personal Logo"
          className="transition ease-in-out hover:-translate-y-1 hover:scale-110"
        />
      </a>
      <div className="flex gap-6 items-center">
        <nav className="hidden gap-20 text-black lg:flex">
          <a
            href="#about"
            aria-label="About Section"
            className="hover:text-white font-semibold text-xl"
          >
            About
          </a>
          <a
            href="#skills"
            aria-label="Skills Section"
            className="hover:text-white font-semibold text-xl"
          >
            Skills
          </a>
          <a
            href="#projects"
            aria-label="Projects Section"
            className="hover:text-white font-semibold text-xl"
          >
            Projects
          </a>
          <a
            href="#contact"
            aria-label="Contact Section"
            className="hover:text-white font-semibold text-xl"
          >
            Contact
          </a>
        </nav>
        <nav className="flex flex-col justify-center lg:hidden">
          <Hamburger toggle={toggleDrawer} />

          <SideDrawer isOpen={isDrawerOpen} closeDrawer={closeDrawer} />
        </nav>
      </div>
    </header>
  );
}
