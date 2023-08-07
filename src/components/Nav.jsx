import Navbar from './UI/Navbar';

export default function Nav() {
  return (
    <Navbar
      links={[
        <a key={1} className="nav-link text-light" href="#about">
          About Me
        </a>,
        <a key={2} className="nav-link text-light" href="#projects">
          Projects
        </a>,
        <a key={3} className="nav-link text-light" href="#contact">
          Contact
        </a>,
        <a key={4} className="nav-link text-light" href="#resume">
          Resume
        </a>,
      ]}
    />
  );
}
