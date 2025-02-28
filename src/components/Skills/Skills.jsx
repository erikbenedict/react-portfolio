import { Slide } from 'react-awesome-reveal';

import {
  ReactIcon,
  JsIcon,
  TailwindIcon,
  TypeScriptIcon,
  NextJSIcon,
  AzureIcon,
  NodeIcon,
  ExpressIcon,
  SQLIcon,
  MongodbIcon,
  AzureDevopsIcon,
  GitIcon,
  JestIcon,
  PostmanIcon,
  DockerIcon,
} from './Icons';

export default function Skills() {
  return (
    <section
      id="skills"
      className="text-center mb-24 md:mb-64  max-w-[75%] md-max-w-[65%] mx-auto"
    >
      <Slide direction="right" triggerOnce>
        <h2 className="section-title text-4xl md:text-5xl xl:text-6xl mb-10">
          Skills
        </h2>
        <div className="skills-container flex flex-wrap">
          <div className="mb-6 w-full md:w-1/3">
            <div className="section-title text-2xl mb-6 underline underline-offset-4">
              <h3>Front-End</h3>
            </div>
            <div className="skills-icons grid grid-cols-2 md:flex md:flex-col md:items-center">
              <ReactIcon iconClassName="skill-icon" divClassName="skill-div" />
              <NextJSIcon iconClassName="skill-icon" divClassName="skill-div" />
              <JsIcon iconClassName="skill-icon" divClassName="skill-div" />
              <TypeScriptIcon
                iconClassName="skill-icon"
                divClassName="skill-div"
              />
              <TailwindIcon
                iconClassName="skill-icon"
                divClassName="skill-div"
              />
            </div>
          </div>
          <div className="mb-6 w-full md:w-1/3">
            <div className="section-title text-2xl mb-6 underline underline-offset-4">
              <h3>Back-End</h3>
            </div>
            <div className="skills-icons grid grid-cols-2 md:flex md:flex-col md:items-center">
              <AzureIcon iconClassName="skill-icon" divClassName="skill-div" />
              <SQLIcon iconClassName="skill-icon" divClassName="skill-div" />
              <NodeIcon iconClassName="skill-icon" divClassName="skill-div" />
              <ExpressIcon
                iconClassName="skill-icon"
                divClassName="skill-div"
              />
              <MongodbIcon
                iconClassName="skill-icon"
                divClassName="skill-div"
              />
            </div>
          </div>
          <div className="mb-6 w-full md:w-1/3">
            <div className="section-title text-2xl mb-6 underline underline-offset-4">
              <h3>Tools</h3>
            </div>
            <div className="skills-icons grid grid-cols-2 md:flex md:flex-col md:items-center mb-2">
              <AzureDevopsIcon
                iconClassName="skill-icon"
                divClassName="skill-div"
              />
              <DockerIcon iconClassName="skill-icon" divClassName="skill-div" />
              <GitIcon iconClassName="skill-icon" divClassName="skill-div" />
              <PostmanIcon
                iconClassName="skill-icon"
                divClassName="skill-div"
              />
              <JestIcon iconClassName="skill-icon" divClassName="skill-div" />
            </div>
          </div>
        </div>
      </Slide>
    </section>
  );
}
