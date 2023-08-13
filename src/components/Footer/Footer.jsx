export default function Footer() {
  return (
    <footer className="footer">
      <a href="#hero" className="to-top">
        <i className="fa-solid fa-arrow-up-from-bracket"></i>
      </a>

      <ul className="footer-ul">
        <li>
          <a href="mailto:erik.r.benedict@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/erikbenedict"
            target="_blank"
            className="icons"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/erik-benedict-829835286/"
            target="_blank"
            className="icons"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/@BeepTheProgrammer/videos"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
        </li>
        <li>
          <a
            href="https://docs.google.com/document/d/1SbyLV4tZle6iL6PTZYrTPR9ZFE2UdRCnC25xpEDLYi8/edit?usp=sharing"
            target="_blank"
            className="icons"
            rel="noreferrer"
          >
            <i className="fa-regular fa-file"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}
