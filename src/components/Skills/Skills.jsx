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
  HerokuIcon,
  WebpackIcon,
  InsomniaIcon,
  NetlifyIcon,
  ApolloIcon,
} from './Icons';

export default function Skills() {
  return (
    <section id="skills" className="text-center mb-80">
      <h2 className="section-title text-3xl md:text-4xl text-center mb-8">
        Skills
      </h2>
      <div className="skills-container flex flex-wrap">
        <div className="mb-6 w-full md:w-1/3">
          <div className="section-title text-xl mb-6 underline underline-offset-4">
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
          <div className="section-title text-xl mb-6 underline underline-offset-4">
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
          <div className="section-title text-xl mb-6 underline underline-offset-4">
            <h3>Tools</h3>
          </div>
          <div className="skills-icons grid grid-cols-2 md:flex md:flex-col md:items-center mb-2">
            <GitIcon iconClassName="skill-icon" divClassName="skill-div" />
            <InsomniaIcon iconClassName="skill-icon" divClassName="skill-div" />
            <ApolloIcon iconClassName="skill-icon" divClassName="skill-div" />
            <JestIcon iconClassName="skill-icon" divClassName="skill-div" />
            <HerokuIcon iconClassName="skill-icon" divClassName="skill-div" />
            <NetlifyIcon iconClassName="skill-icon" divClassName="skill-div" />
          </div>
        </div>
      </div>
    </section>
  );
}
