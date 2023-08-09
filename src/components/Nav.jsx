import Navbar from './utils/Navbar';

export default function Nav() {
  return (
    <Navbar
      links={[
        <a key={1} className="nav-link text-light" href="#about">
          About Me
        </a>,
        <a key={2} className="nav-link text-light" href="#skills">
          Skills
        </a>,
        <a key={3} className="nav-link text-light" href="#projects">
          Projects
        </a>,
        <a key={4} className="nav-link text-light" href="#contact">
          Contact
        </a>,
        <a
          key={5}
          className="nav-link text-light"
          href="https://docs.google.com/document/d/1SbyLV4tZle6iL6PTZYrTPR9ZFE2UdRCnC25xpEDLYi8/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>,
      ]}
    />
  );
}
