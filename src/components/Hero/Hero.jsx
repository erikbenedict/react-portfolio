export default function Hero() {
  return (
    <section className="homepage-container pt-16 flex flex-col" id="hero">
      <div className="flex flex-col ">
        <h1 className="p-2 container">
          <span className="h1-span-intro font-semibold pl-2">
            Hi, my name is
          </span>
          <br />
          <span className="h1-span-name text-6xl md-text-7xl font-mono font-semibold text-orange-600">
            Erik Benedict
          </span>
          <br />
          <span className="h1-span-description text-4xl md-text-5xl font-medium pl-1">
            I&rsquo;m a full-stack web developer.
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
