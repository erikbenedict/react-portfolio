import CloseIcon from '../../assets/images/close-icon.svg';
import logo from '../../assets/images/logo.png';

export default function SideDrawer(props) {
  return (
    <div
      className={`fixed grid top-0 left-0 z-50 w-full h-96 py-6 px-4 gap-10 bg-white text-black transform transition-transform duration-500 ease-in-out ${
        props.isOpen ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex h-12 justify-between">
        <a href="#" aria-label="Home" className="nav-offset logo-nav">
          <img
            src={logo}
            alt="Personal Logo"
            className="transition ease-in-out hover:-translate-y-1 hover:scale-110"
          />
        </a>
        <button aria-label="Close Menu" onClick={props.closeDrawer}>
          <img
            src={CloseIcon}
            alt="Close Icon"
            className="transition ease-in-out hover:-translate-y-1 hover:scale-110"
          />
        </button>
      </div>
      <div className="flex flex-col gap-10 items-center font-[700] text-xl">
        <a
          href="#about"
          aria-label="About Section"
          className="hover:opacity-80"
        >
          About
        </a>
        <a
          href="#skills"
          aria-label="Skills Section"
          className="hover:opacity-80"
        >
          Skills
        </a>
        <a
          href="#projects"
          aria-label="Projects Section"
          className="hover:opacity-80"
        >
          Projects
        </a>
        <a
          href="#contact"
          aria-label="Contact Section"
          className="hover:opacity-80"
        >
          Contact
        </a>
      </div>
    </div>
  );
}
