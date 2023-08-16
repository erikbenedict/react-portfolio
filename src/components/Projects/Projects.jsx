import HypeHubProject from './HypeHubProject';
import FruitPreservesProject from './FruitPreservesProject';
import MuteProject from './MuteProject';

export default function Projects() {
  return (
    <section id="projects" className="mb-24 md:mb-60 ">
      <h2 className="section-title text-3xl md:text-6xl text-center mb-10 md:mb-20 ">
        Projects
      </h2>
      {/* <Project3 /> */}
      {/* <BookSearch /> */}
      <HypeHubProject />
      <FruitPreservesProject />
      <MuteProject />
    </section>
  );
}
