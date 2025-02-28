import VirginBay from './VirginBay';
import Mindster from './Mindster';
import Precision from './Precision';
import AdvantageGraphics from './AdvantageGraphics';
import { Slide } from 'react-awesome-reveal';

export default function Projects() {
  return (
    <section id="projects" className="mb-24 md:mb-60 ">
      <Slide direction="right" triggerOnce>
        <h2 className="section-title text-4xl md:text-5xl xl:text-6xl text-center mb-10 md:mb-20 ">
          Projects
        </h2>
        <Slide direction="right" cascade damping={0.15} triggerOnce>
          <Mindster />
          <VirginBay />
          <Precision />
          <AdvantageGraphics />
        </Slide>
      </Slide>
    </section>
  );
}
