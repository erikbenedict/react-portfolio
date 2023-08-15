import HypeHubProject from './HypeHubProject';
import FruitPreservesProject from './FruitPreservesProject';
import MuteProject from './MuteProject';

export default function Projects() {
  return (
    <section id="projects" className="mb-80">
      <h2 className="section-title text-3xl md:text-6xl text-center mb-20 max-w-[75%] md-max-w-[65%] mx-auto">
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
