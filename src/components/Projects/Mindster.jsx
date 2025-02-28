// import { Link } from 'react-router-dom';
import screenshot from '../../assets/images/mindster.png';
import {
  ReactIcon,
  JsIcon,
  ViteIcon,
  TypeScriptIcon,
  AzureDevopsIcon,
  AzureIcon,
  TailwindIcon,
  StrapiIcon,
} from '../Skills/Icons';

export default function Mindster() {
  return (
    <div className="flex flex-col md:flex-row items-center max-w-[75%] md-max-w-[65%] mx-auto mb-8 md:mb-20 bg-zinc-400 md:bg-inherit border border-zinc-500 md:border-none rounded-xl shadow-2xl md:rounded-none md:shadow-none">
      <div className="md:w-1/2 mb-4 p-2">
        <h3 className="section-title text-2xl text-center md:text-4xl mb-5">
          Mindster – Personal Coaching App
        </h3>
        <div className="project-icons flex justify-center mb-2 md:mb-4">
          <ReactIcon iconClassName="project-icon mr-1" showText={false} />
          <ViteIcon iconClassName="project-icon mr-1" showText={false} />
          <JsIcon iconClassName="project-icon mr-1" showText={false} />
          <TypeScriptIcon iconClassName="project-icon mr-1" showText={false} />
          <TailwindIcon iconClassName="project-icon mr-1" showText={false} />
          <AzureIcon iconClassName="project-icon mr-1" showText={false} />
          <AzureDevopsIcon iconClassName="project-icon mr-1" showText={false} />
          <StrapiIcon iconClassName="project-icon mr-1" showText={false} />
        </div>
        <div className="p-3 text-center lg:text-left md:bg-zinc-400 md:border md:border-zinc-500 md:rounded-xl md:shadow-2xl md:mb-4">
          <p>
            Mindster is an innovative personal coaching application designed to
            enhance personal development through psychological principles and
            cutting-edge technology. Built with React and TypeScript, the
            platform delivers a responsive and engaging user experience. Azure
            Static Web Apps provide scalable hosting, while PostgreSQL ensures
            secure data management. Content is dynamically handled with Strapi
            CMS, and Azure Logic Apps automate workflows, streamlining user
            interactions.
          </p>
        </div>
        <div className="flex justify-center">
          <a
            href="https://www.mindster.health"
            target="blank"
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-window-restore text-3xl lg:text-4xl text-amber-700 mr-2 lg:mr-4 transition ease-in-out hover:-translate-y-1 hover:scale-110"></i>
          </a>
          {/* future link to project page */}
          {/* <Link to="/mute">
            <i className="fa-solid fa-circle-info text-3xl lg:text-4xl text-amber-700 transition ease-in-out hover:-translate-y-1 hover:scale-110"></i>
          </Link> */}
        </div>
      </div>
      <div className="hidden md:block md:w-1/2 p-3 screenshot-border-a">
        <a
          href="https://www.mindster.health"
          target="blank"
          rel="noopener noreferrer"
        >
          <img
            src={screenshot}
            alt="Mindster screenshot"
            className="max-w-xs lg:max-w-md mx-auto rounded-xl shadow-2xl transition ease-in-out hover:-translate-y-1 hover:scale-110"
          />
        </a>
      </div>
    </div>
  );
}
