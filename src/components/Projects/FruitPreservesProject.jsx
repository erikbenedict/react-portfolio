import { Link } from 'react-router-dom';
import screenshot from '../../assets/images/fruit-preserves.png';
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
    <div className="flex flex-col md:flex-row items-center max-w-[75%] md-max-w-[65%] mx-auto mb-20">
      <div className="hidden md:block md:w-1/2 p-3">
        <img
          src={screenshot}
          alt="Fruit Preserves screenshot"
          className="max-w-xs lg:max-w-md mx-auto rounded-xl shadow-2xl"
        />
      </div>
      <div className="md:w-1/2 mb-4 p-2">
        <h3 className="section-title text-2xl text-center md:text-4xl mb-5">
          Fruit Preserves
        </h3>
        <div className="project-icons flex justify-center mb-4">
          <HtmlIcon iconClassName="project-icon mr-1" showText={false} />
          <JsIcon iconClassName="project-icon mr-1" showText={false} />
          <TailwindIcon iconClassName="project-icon mr-1" showText={false} />
          <CssIcon iconClassName="project-icon mr-1" showText={false} />
          <SpotifyIcon iconClassName="project-icon mr-1" showText={false} />
          <TicketmasterIcon
            iconClassName="project-icon mr-1"
            showText={false}
          />
        </div>
        <div className="p-3 rounded-xl">
          <p>
            The compact nature of this app combined with Spotify&rsquo;s
            existing recommendation function provides a quick, easy, and fun way
            to find new music without being overwhelmed by options. You can
            search using a keyword representing an artist, song, or genre that
            you already like. Then you can listen to the songs that are
            recommended. Find a track you like? Add it to your &rsquo;Fresh
            Picks&rsquo; playlist! From there you can find out if there&rsquo;s
            an upcoming performance from the artist of the songs you saved, that
            you might otherwise have missed!
          </p>
        </div>
        <div className="flex justify-center">
          <a
            href="https://erikbenedict.github.io/fruit-preserves/"
            target="blank"
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-window-restore text-3xl text-amber-700 mr-2"></i>
          </a>
          <a
            href="https://github.com/erikbenedict/fruit-preserves"
            target="blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github text-3xl text-amber-700 mr-2"></i>
          </a>
          <Link to="/fruitpreserves">
            <i className="fa-solid fa-circle-info text-3xl text-amber-700"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
