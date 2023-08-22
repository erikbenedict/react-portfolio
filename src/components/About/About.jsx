import headshot from '../../assets/images/headshot.png';
import { Slide } from 'react-awesome-reveal';

export default function About() {
  return (
    <Slide direction="right">
      <section
        id="about"
        className="p-2 mb-24 md:mb-64 max-w-[75%] md-max-w-[65%] mx-auto"
      >
        <h2 className="section-title text-4xl md:text-6xl text-center mb-8 md:mb-10 xl:mb-20">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row items-center">
          <div
            className="xl:w-1/2 p-3 headshot-border
          "
          >
            <img
              src={headshot}
              alt="headshot"
              className="max-w-xxs md:max-w-sm mx-auto rounded-xl shadow-2xl"
            />
          </div>
          <div className="xl:w-1/2 mb-4 md:mb-0 p-2">
            <p className="mb-2">
              Greetings! I&rsquo;m Erik, a passionate Full-Stack Developer with
              a love for crafting captivating UI&rsquo;s.
            </p>
            <p className="mb-6">
              Driven by an unquenchable thirst for knowledge, I am dedicated to
              engineer more ambitious and innovative solutions for real-world
              challenges, all while fostering meaningful connections with fellow
              developers who share my passion.
            </p>
            <div className="flex justify-center">
              <a href="#contact">
                <button className="bg-amber-700 text-zinc-200 font-bold text-xl py-2 px-4 rounded-lg shadow-2xl inline-flex items-center transition ease-in-out hover:-translate-y-1 hover:scale-110">
                  <i className="fa-regular fa-address-card pr-1"></i>
                  <span>Contact Me!</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Slide>
  );
}
