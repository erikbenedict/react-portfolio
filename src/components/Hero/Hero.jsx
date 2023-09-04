import { Fade } from 'react-awesome-reveal';

export default function Hero() {
  return (
    <section
      className="homepage-container min-h-full pt-40 md:pt-48 xl:pt-80 mb-96 text-center"
      id="hero"
    >
      <div>
        <Fade delay={300} duration={4500} triggerOnce>
          <h1 className="p-2">
            <span className="text-xl font-semibold">Hi, my name is</span>
            <br />
            <span className="text-5xl md:text-8xl font-mono font-semibold text-amber-700">
              Erik Benedict
            </span>
            <br />
            <span className="text-4xl md:text-5xl font-medium">
              <span className="text-amber-700">{`[`}</span> Full-stack web
              developer <span className="text-amber-700">{`]`}</span>
            </span>
          </h1>
          <div>
            <a
              href="https://github.com/erikbenedict"
              target="_blank"
              className="p-2"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github text-3xl text-amber-700 transition ease-in-out hover:-translate-y-1 hover:scale-110"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/erik-benedict/"
              target="_blank"
              className="p-2"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin text-3xl text-amber-700 transition ease-in-out hover:-translate-y-1 hover:scale-110"></i>
            </a>
            <a
              href="https://docs.google.com/document/d/1SbyLV4tZle6iL6PTZYrTPR9ZFE2UdRCnC25xpEDLYi8/edit?usp=sharing"
              target="_blank"
              className="p-2"
              rel="noreferrer"
            >
              <i className="fa-regular fa-file text-3xl text-amber-700 transition ease-in-out hover:-translate-y-1 hover:scale-110"></i>
            </a>
          </div>
        </Fade>
      </div>
    </section>
  );
}
