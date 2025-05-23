import { Slide } from 'react-awesome-reveal';

export default function Footer() {
  return (
    <footer className="flex justify-center max-w-[75%] md-max-w-[65%] mx-auto mb-10">
      <Slide direction="right" triggerOnce>
        <a href="#" className="to-top">
          <i className="fa-solid fa-arrow-up-from-bracket text-2xl lg:text-3xl xl:text-5xl mr-6 transition ease-in-out hover:-translate-y-1 hover:scale-110"></i>
        </a>

        <a href="mailto:erik.r.benedict@gmail.com">
          <i className="fa-solid fa-envelope text-2xl lg:text-3xl xl:text-5xl mr-6 transition ease-in-out hover:-translate-y-1 hover:scale-110"></i>
        </a>

        {/* <a
          href="https://github.com/erikbenedict"
          target="_blank"
          className="icons"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github text-2xl lg:text-3xl xl:text-5xl mr-6 transition ease-in-out hover:-translate-y-1 hover:scale-110"></i>
        </a> */}

        <a
          href="https://www.linkedin.com/in/erik-benedict/"
          target="_blank"
          className="icons"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin text-2xl lg:text-3xl xl:text-5xl mr-6 transition ease-in-out hover:-translate-y-1 hover:scale-110"></i>
        </a>

        {/* <a
          href="https://docs.google.com/document/d/1SbyLV4tZle6iL6PTZYrTPR9ZFE2UdRCnC25xpEDLYi8/edit?usp=sharing"
          target="_blank"
          className="icons"
          rel="noreferrer"
        >
          <i className="fa-regular fa-file text-2xl lg:text-3xl xl:text-5xl transition ease-in-out hover:-translate-y-1 hover:scale-110"></i>
        </a> */}
      </Slide>
    </footer>
  );
}
