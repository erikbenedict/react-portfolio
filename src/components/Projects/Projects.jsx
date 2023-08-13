import HypeHubProject from './HypeHubProject';
import FruitPreservesProject from './FruitPreservesProject';
import MuteProject from './MuteProject';

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      {/* <Project3 /> */}
      {/* <BookSearch /> */}
      <HypeHubProject />
      <FruitPreservesProject />
      <MuteProject />
    </section>
  );
}
