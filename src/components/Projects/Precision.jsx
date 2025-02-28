// import { Link } from 'react-router-dom';
import screenshot from '../../assets/images/precision.jpg';
import {
  ReactIcon,
  NextJSIcon,
  AzureIcon,
  AzureDevopsIcon,
  TailwindIcon,
  JsIcon,
} from '../Skills/Icons';

export default function Precision() {
  return (
    <div className="flex flex-col md:flex-row items-center max-w-[75%] md-max-w-[65%] mx-auto mb-8 md:mb-20 bg-zinc-400 md:bg-inherit border border-zinc-500 md:border-none rounded-xl shadow-2xl md:rounded-none md:shadow-none">
      <div className="md:w-1/2 mb-4 p-2">
        <h3 className="section-title text-2xl text-center md:text-4xl mb-5">
          Precision Garage Door Service – SEO-Optimized Landing Pages
        </h3>
        <div className="project-icons flex justify-center mb-2 md:mb-4">
          <ReactIcon iconClassName="project-icon mr-1" showText={false} />
          <NextJSIcon iconClassName="project-icon mr-1" showText={false} />
          <JsIcon iconClassName="project-icon mr-1" showText={false} />
          <TailwindIcon iconClassName="project-icon mr-1" showText={false} />
          <AzureIcon iconClassName="project-icon mr-1" showText={false} />
          <AzureDevopsIcon iconClassName="project-icon mr-1" showText={false} />
        </div>
        <div className="p-3 text-center lg:text-left md:bg-zinc-400 md:border md:border-zinc-500 md:rounded-xl md:shadow-2xl md:mb-4">
          <p>
            I developed a modern, SEO-optimized set of landing pages for
            Precision Garage Door Service, designed to boost online visibility
            and engagement. Built with Next.js, React, and Tailwind CSS, the
            site leverages server-side rendering for fast performance and SEO
            benefits. Dynamic content generation customizes pages based on
            Google Ads parameters, enhancing relevance and conversions. Deployed
            on Azure Static Web Apps, with Google Analytics & CallRail tracking,
            the solution has significantly improved user engagement and
            conversion rates.
          </p>
        </div>
        <div className="flex justify-center">
          <a
            href="https://calls.precisiongarage-door.com"
            target="blank"
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-window-restore text-3xl lg:text-4xl text-amber-700 mr-2 lg:mr-4 transition ease-in-out hover:-translate-y-1 hover:scale-110"></i>
          </a>
          {/* future link to project page */}
          {/* <Link to="/hypehub">
            <i className="fa-solid fa-circle-info text-3xl lg:text-4xl text-amber-700 transition ease-in-out hover:-translate-y-1 hover:scale-110"></i>
          </Link> */}
        </div>
      </div>
      <div className="hidden md:block md:w-1/2 p-3 screenshot-border-a">
        <a
          href="https://calls.precisiongarage-door.com"
          target="blank"
          rel="noopener noreferrer"
        >
          <img
            src={screenshot}
            alt="Precision screenshot"
            className="max-w-xs lg:max-w-sm xl:max-w-md mx-auto rounded-xl shadow-2xl transition ease-in-out hover:-translate-y-1 hover:scale-110"
          />
        </a>
      </div>
    </div>
  );
}
