export default function Hero() {
  return (
    <section
      className="homepage-container pt-16 min-h-full mt-32 md:mt-48 xl:mt-64 mb-96 text-center"
      id="hero"
    >
      <div>
        <h1 className="p-2">
          <span className="font-semibold">Hi, my name is</span>
          <br />
          <span className="text-5xl md:text-7xl font-mono font-semibold text-amber-700">
            Erik Benedict
          </span>
          <br />
          <span className="text-4xl md:text-5xl font-medium">
            I&rsquo;m a full-stack web developer
          </span>
        </h1>
        <div>
          <a
            href="https://github.com/erikbenedict"
            target="_blank"
            className="p-2"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github text-3xl text-amber-700"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/erik-benedict-829835286/"
            target="_blank"
            className="p-2"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin text-3xl text-amber-700"></i>
          </a>
          <a
            href="https://docs.google.com/document/d/1SbyLV4tZle6iL6PTZYrTPR9ZFE2UdRCnC25xpEDLYi8/edit?usp=sharing"
            target="_blank"
            className="p-2"
            rel="noreferrer"
          >
            <i className="fa-regular fa-file text-3xl text-amber-700"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
