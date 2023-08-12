import { Link } from 'react-router-dom';
import {
  JsIcon,
  HtmlIcon,
  CssIcon,
  WebpackIcon,
  ExpressIcon,
  HerokuIcon,
} from '../Skills/Icons';

export default function MuteProject() {
  return (
    <div className="project-container">
      <h3 className="project-title">M.U.T.E.</h3>
      <div className="project-icons">
        <HtmlIcon
          divClassName="project-icon-div"
          iconClassName="project-icon"
        />
        <JsIcon divClassName="project-icon-div" iconClassName="project-icon" />
        <ExpressIcon
          divClassName="project-icon-div"
          iconClassName="project-icon"
        />
        <CssIcon divClassName="project-icon-div" iconClassName="project-icon" />
        <WebpackIcon
          divClassName="project-icon-div"
          iconClassName="project-icon"
        />
        <HerokuIcon
          divClassName="project-icon-div"
          iconClassName="project-icon"
        />
      </div>
      <p className="project-summary">
        {`M.U.T.E. (Minorly Unique Text Editor) is a Progressive Web Application. It is a text editor that runs in the browser, functions offline, and allows note taking with JavaScript syntax highlighting`}
      </p>
      <a
        href="https://mute-8aface8efda8.herokuapp.com/"
        target="blank"
        rel="noopener noreferrer"
      >
        <button className="live-btn" type="button">
          See Live
        </button>
      </a>
      <a
        href="https://github.com/erikbenedict/minorly-unique-text-editor"
        target="blank"
        rel="noopener noreferrer"
      >
        <button className="source-btn" type="button">
          Source Code
        </button>
      </a>
      <Link to="/mute">
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
