import { Link } from 'react-router-dom';
import SkillIcon from '../../Skills/SkillIcon';
import jsIcon from '../../assets/images/js.png';
import htmlIcon from '../../assets/images/html.png';
import cssIcon from '../../assets/images/css.png';
import tailwindIcon from '../../assets/images/tailwind.png';
import spotifyIcon from '../../assets/images/spotify.png';
import ticketmasterIcon from '../../assets/images/ticketmaster.png';

export default function FruitPreservesProject() {
  return (
    <div className="project-container">
      <h3 className="project-title">Fruit Preserves</h3>
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
          iconSrc={tailwindIcon}
          iconTitle="Tailwind"
          altText="tailwind icon"
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
          iconSrc={spotifyIcon}
          iconTitle="Spotify"
          altText="spotify icon"
          iconClassName="project-icon"
          showText={false}
        />
        <SkillIcon
          divClassName="project-icon-div"
          iconSrc={ticketmasterIcon}
          iconTitle="Ticketmaster"
          altText="ticketmaster icon"
          iconClassName="project-icon"
          showText={false}
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
