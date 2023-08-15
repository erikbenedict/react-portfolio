import { Link } from 'react-router-dom';
import screenshot from '../../assets/images/mute.png';
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
    <div className="flex flex-col md:flex-row items-center max-w-[75%] md-max-w-[65%] mx-auto mb-20">
      <div className="md:w-1/2 mb-4 p-2">
        <h3 className="section-title text-2xl text-center md:text-4xl mb-5">
          M.U.T.E.
        </h3>
        <div className="project-icons flex justify-center mb-4">
          <HtmlIcon iconClassName="project-icon mr-1" showText={false} />
          <JsIcon iconClassName="project-icon mr-1" showText={false} />
          <ExpressIcon iconClassName="project-icon mr-1" showText={false} />
          <CssIcon iconClassName="project-icon mr-1" showText={false} />
          <WebpackIcon iconClassName="project-icon mr-1" showText={false} />
          <HerokuIcon iconClassName="project-icon mr-1" showText={false} />
        </div>
        <div className="p-3 rounded-xl">
          <p>
            {`M.U.T.E (Minorly Unique Text Editor) is a text editor that runs in the browser. It is a PWA (progressive web application) that features a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application will also function offline. You can take notes that standout with JavaScript syntax highlighting.`}
          </p>
        </div>
        <div className="flex justify-center">
          <a
            href="https://mute-8aface8efda8.herokuapp.com/"
            target="blank"
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-window-restore text-3xl text-amber-700 mr-2"></i>
          </a>
          <a
            href="https://github.com/erikbenedict/minorly-unique-text-editor"
            target="blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github text-3xl text-amber-700 mr-2"></i>
          </a>
          <Link to="/mute">
            <i className="fa-solid fa-circle-info text-3xl text-amber-700"></i>
          </Link>
        </div>
      </div>
      <div className="hidden md:block md:w-1/2 p-3">
        <img
          src={screenshot}
          alt="M.U.T.E. screenshot"
          className="max-w-xs lg:max-w-md mx-auto rounded-xl shadow-2xl"
        />
      </div>
    </div>
  );
}
