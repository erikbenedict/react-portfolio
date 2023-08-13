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
    <section id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        <div className="mb-2 font-end">
          <div className="section-title">
            <h3>Front-End</h3>
          </div>
          <div className="skills-icons">
            <ReactIcon iconClassName="skill-icon" />
            <JsIcon iconClassName="skill-icon" />
            <HtmlIcon iconClassName="skill-icon" />
            <CssIcon iconClassName="skill-icon" />
            <TailwindIcon iconClassName="skill-icon" />
            <BootstrapIcon iconClassName="skill-icon" />
          </div>
        </div>
        <div className="mb-2 back-end">
          <div className="section-title">
            <h3>Back-End</h3>
          </div>
          <div className="skills-icons">
            <NodeIcon iconClassName="skill-icon" />
            <ExpressIcon iconClassName="skill-icon" />
            <MongodbIcon iconClassName="skill-icon" />
            <GraphqlIcon iconClassName="skill-icon" />
            <MysqlIcon iconClassName="skill-icon" />
            <WebpackIcon iconClassName="skill-icon" />
          </div>
        </div>
        <div className="mb-2 tools">
          <div className="section-title">
            <h3>Tools</h3>
          </div>
          <div className="skills-icons">
            <GitIcon iconClassName="skill-icon" />
            <InsomniaIcon iconClassName="skill-icon" />
            <ApolloIcon iconClassName="skill-icon" />
            <JestIcon iconClassName="skill-icon" />
            <HerokuIcon iconClassName="skill-icon" />
            <NetlifyIcon iconClassName="skill-icon" />
          </div>
        </div>
      </div>
    </section>
  );
}
