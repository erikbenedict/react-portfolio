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
            <ReactIcon />
            <JsIcon />
            <HtmlIcon />
            <CssIcon />
            <TailwindIcon />
            <BootstrapIcon />
          </div>
        </div>
        <div className="mb-2 back-end">
          <div className="section-title">
            <h3>Back-End</h3>
          </div>
          <div className="skills-icons">
            <NodeIcon />
            <ExpressIcon />
            <MongodbIcon />
            <GraphqlIcon />
            <MysqlIcon />
            <WebpackIcon />
          </div>
        </div>
        <div className="mb-2 tools">
          <div className="section-title">
            <h3>Tools</h3>
          </div>
          <div className="skills-icons">
            <GitIcon />
            <InsomniaIcon />
            <ApolloIcon />
            <JestIcon />
            <HerokuIcon />
            <NetlifyIcon />
          </div>
        </div>
      </div>
    </section>
  );
}
