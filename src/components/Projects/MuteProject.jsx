import { Link } from 'react-router-dom';
import SkillIcon from '../../Skills/SkillIcon';
import jsIcon from '../../assets/images/js.png';
import htmlIcon from '../../assets/images/html.png';
import cssIcon from '../../assets/images/css.png';
import webpackIcon from '../../assets/images/webpack.png';
import expressIcon from '../../assets/images/express.png';

export default function MuteProject() {
  return (
    <div className="project-container">
      <h3 className="project-title">M.U.T.E.</h3>
      <div className="project-icons">
        <SkillIcon
          divClassName="project-icon-div"
          iconSrc={htmlIcon}
          iconTitle="HTML 5"
          altText="html icon"
          iconClassName="project-icon"
          showText={false}
        />
        <SkillIcon
          divClassName="project-icon-div"
          iconSrc={jsIcon}
          iconTitle="JavaScript"
          altText="JavaScript icon"
          iconClassName="project-icon"
          showText={false}
        />
        <SkillIcon
          divClassName="project-icon-div"
          iconSrc={expressIcon}
          iconTitle="Express"
          altText="express icon"
          iconClassName="project-icon"
          showText={false}
        />
        <SkillIcon
          divClassName="project-icon-div"
          iconSrc={cssIcon}
          iconTitle="CSS 3"
          altText="css icon"
          iconClassName="project-icon"
          showText={false}
        />
        <SkillIcon
          divClassName="project-icon-div"
          iconSrc={webpackIcon}
          iconTitle="Webpack"
          altText="webpack icon"
          iconClassName="project-icon"
          showText={false}
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
