import { Link } from 'react-router-dom';
import {
  JsIcon,
  CssIcon,
  BootstrapIcon,
  NodeIcon,
  ExpressIcon,
  MysqlIcon,
  SequelizeIcon,
  HerokuIcon,
  HandlebarsIcon,
} from '../Skills/Icons';

export default function HypeHub() {
  return (
    <div className="project-container">
      <h3 className="project-title">HypeHub</h3>
      <div className="project-icons">
        <HandlebarsIcon
          divClassName="project-icon-div"
          iconClassName="project-icon"
        />
        <NodeIcon
          divClassName="project-icon-div"
          iconClassName="project-icon"
        />
        <JsIcon divClassName="project-icon-div" iconClassName="project-icon" />
        <ExpressIcon
          divClassName="project-icon-div"
          iconClassName="project-icon"
        />
        <MysqlIcon
          divClassName="project-icon-div"
          iconClassName="project-icon"
        />
        <SequelizeIcon
          divClassName="project-icon-div"
          iconClassName="project-icon"
        />
        <BootstrapIcon
          divClassName="project-icon-div"
          iconClassName="project-icon"
        />
        <CssIcon divClassName="project-icon-div" iconClassName="project-icon" />
        <HerokuIcon
          divClassName="project-icon-div"
          iconClassName="project-icon"
        />
      </div>
      <p className="project-summary">
        An interactive application that allows users to document their
        achievements to easily access and manage.
      </p>
      <a
        href="https://achieved-it-a7cfbbbfd1a9.herokuapp.com/"
        target="blank"
        rel="noopener noreferrer"
      >
        <button className="live-btn" type="button">
          See Live
        </button>
      </a>
      <a
        href="https://github.com/erikbenedict/hype-hub"
        target="blank"
        rel="noopener noreferrer"
      >
        <button className="source-btn" type="button">
          Source Code
        </button>
      </a>
      <Link to="/hypehub">
        <button className="source-btn" type="button">
          More Details
        </button>
      </Link>
      <div className="project-screen-shot">
        <img src="" alt="" />
      </div>
    </div>
  );
}
