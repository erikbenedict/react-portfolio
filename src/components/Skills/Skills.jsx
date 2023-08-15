import {
  ReactIcon,
  JsIcon,
  HtmlIcon,
  CssIcon,
  TailwindIcon,
  BootstrapIcon,
  NodeIcon,
  ExpressIcon,
  MysqlIcon,
  MongodbIcon,
  GitIcon,
  GraphqlIcon,
  JestIcon,
  WebpackIcon,
  InsomniaIcon,
  VscodeIcon,
  ChromeIcon,
  GithubIcon,
} from './Icons';

export default function Skills() {
  return (
    <section
      id="skills"
      className="text-center mb-80 max-w-[75%] md-max-w-[65%] mx-auto"
    >
      <h2 className="section-title text-3xl md:text-6xl mb-8">Skills</h2>
      <div className="skills-container flex flex-wrap">
        <div className="mb-6 w-full md:w-1/3">
          <div className="section-title text-2xl mb-6 underline underline-offset-4">
            <h3>Front-End</h3>
          </div>
          <div className="skills-icons grid grid-cols-2 md:flex md:flex-col md:items-center">
            <ReactIcon iconClassName="skill-icon" divClassName="skill-div" />
            <JsIcon iconClassName="skill-icon" divClassName="skill-div" />
            <HtmlIcon iconClassName="skill-icon" divClassName="skill-div" />
            <CssIcon iconClassName="skill-icon" divClassName="skill-div" />
            <TailwindIcon iconClassName="skill-icon" divClassName="skill-div" />
            <BootstrapIcon
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
            <NodeIcon iconClassName="skill-icon" divClassName="skill-div" />
            <ExpressIcon iconClassName="skill-icon" divClassName="skill-div" />
            <MongodbIcon iconClassName="skill-icon" divClassName="skill-div" />
            <GraphqlIcon iconClassName="skill-icon" divClassName="skill-div" />
            <MysqlIcon iconClassName="skill-icon" divClassName="skill-div" />
            <WebpackIcon iconClassName="skill-icon" divClassName="skill-div" />
          </div>
        </div>
        <div className="mb-6 w-full md:w-1/3">
          <div className="section-title text-2xl mb-6 underline underline-offset-4">
            <h3>Tools</h3>
          </div>
          <div className="skills-icons grid grid-cols-2 md:flex md:flex-col md:items-center mb-2">
            <GitIcon iconClassName="skill-icon" divClassName="skill-div" />
            <GithubIcon iconClassName="skill-icon" divClassName="skill-div" />
            <VscodeIcon iconClassName="skill-icon" divClassName="skill-div" />
            <ChromeIcon iconClassName="skill-icon" divClassName="skill-div" />
            <InsomniaIcon iconClassName="skill-icon" divClassName="skill-div" />
            <JestIcon iconClassName="skill-icon" divClassName="skill-div" />
          </div>
        </div>
      </div>
    </section>
  );
}
