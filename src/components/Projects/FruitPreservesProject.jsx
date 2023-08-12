import { Link } from 'react-router-dom';
import {
  JsIcon,
  HtmlIcon,
  CssIcon,
  TailwindIcon,
  SpotifyIcon,
  TicketmasterIcon,
} from '../Skills/Icons';

export default function FruitPreservesProject() {
  return (
    <div className="project-container">
      <h3 className="project-title">Fruit Preserves</h3>
      <div className="project-icons">
        <HtmlIcon
          divClassName="project-icon-div"
          iconClassName="project-icon"
        />
        <JsIcon divClassName="project-icon-div" iconClassName="project-icon" />
        <TailwindIcon
          divClassName="project-icon-div"
          iconClassName="project-icon"
        />
        <CssIcon divClassName="project-icon-div" iconClassName="project-icon" />
        <SpotifyIcon
          divClassName="project-icon-div"
          iconClassName="project-icon"
        />
        <TicketmasterIcon
          divClassName="project-icon-div"
          iconClassName="project-icon"
        />
      </div>
      <p className="project-summary">
        A compact application that provides a quick, easy, and fun way to find
        new music without being overwhelmed by options.
      </p>
      <a
        href="https://erikbenedict.github.io/fruit-preserves/"
        target="blank"
        rel="noopener noreferrer"
      >
        <button className="live-btn" type="button">
          See Live
        </button>
      </a>
      <a
        href="https://github.com/erikbenedict/fruit-preserves"
        target="blank"
        rel="noopener noreferrer"
      >
        <button className="source-btn" type="button">
          Source Code
        </button>
      </a>
      <Link to="/fruitpreserves">
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
