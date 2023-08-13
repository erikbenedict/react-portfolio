export default function Hero() {
  return (
    <section className="homepage-container pt-16" id="hero">
      <div className="content-div home-content">
        <div>
          <h1>
            Hi, I&rsquo;m <span className="h1-span">Erik Benedict</span>.
          </h1>
          <h1>I&rsquo;m a front end web developer.</h1>
          <div className="icon-div">
            <a
              href="https://github.com/erikbenedict"
              target="_blank"
              className="icons"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/erik-benedict-829835286/"
              target="_blank"
              className="icons"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://docs.google.com/document/d/1SbyLV4tZle6iL6PTZYrTPR9ZFE2UdRCnC25xpEDLYi8/edit?usp=sharing"
              target="_blank"
              className="icons"
              rel="noreferrer"
            >
              <i className="fa-regular fa-file"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
