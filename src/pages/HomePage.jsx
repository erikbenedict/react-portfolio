import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <section className="homepage-container hidden2" id="hero">
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
      <section id="about">
        <h2 className="section-title">About Me</h2>
        <div>
          <p className="mb-2">
            Hello! My name is Erik Benedict and I enjoy creating things that
            live on the internet. My passion definitely lyes with front-end
            creations, but I do have foundations in the back-end as well.
          </p>
          <p className="mb-2">
            My journey into web development started in 2021, tackling as many
            free online courses I could get my hands on. I fell in love and it
            became an obsession. It wasn&rsquo;t until 2023 that I started
            pursuing the idea of a career as a web developer, and decide to
            attend UNC Chapel Hill&rsquo;s full-stack coding bootcamp.
          </p>
          <p>
            As a previous self employed individual contractor, I went from
            fixing up homes to building homepages. Finding the same level of
            creativeness and sense of accomplishment in web development, I am
            continuously looking to expand my knowledge in front-end and
            full-stack programming to build bigger and better solutions for
            real-world problems, and to connect with like-minded developers and
            grow together.
          </p>
        </div>
      </section>
    </>
  );
}
