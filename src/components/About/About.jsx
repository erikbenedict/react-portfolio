import headshot from '../../assets/images/headshot.png';
import { Slide } from 'react-awesome-reveal';

export default function About() {
  return (
    <section
      id="about"
      className="p-2 mb-24 md:mb-64 max-w-[75%] md-max-w-[65%] mx-auto"
    >
      <Slide direction="right" triggerOnce>
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
              Hey, I&apos;m Erik! A passionate Full-Stack Developer who loves
              building seamless, intuitive, and high-performing web
              applications.
            </p>
            <p className="mb-6">
              I thrive on solving real-world challenges with clean, efficient
              code and captivating UI&apos;s. With expertise across frontend,
              backend, and cloud technologies, I bring ideas to life—whether
              it&apos;s a sleek user experience or a powerful, scalable system.
              Always learning, always innovating—let&apos;s build something
              great together!
            </p>
            <div className="flex justify-center">
              <a href="#contact">
                <button className="bg-amber-600 text-white font-bold text-md md:text-xl py-2 px-4 rounded-lg shadow-2xl inline-flex items-center transition ease-in-out hover:-translate-y-1 hover:scale-110">
                  <div className="mr-1">
                    <i className="fa-regular fa-address-card"></i>
                  </div>

                  <span>Contact Me!</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </Slide>
    </section>
  );
}
