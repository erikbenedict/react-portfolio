// import { Link } from 'react-router-dom';
import screenshot from '../../assets/images/agp.jpg';
import {
  ReactIcon,
  NextJSIcon,
  AzureIcon,
  AzureDevopsIcon,
  TailwindIcon,
  JsIcon,
} from '../Skills/Icons';

export default function AdvantageGraphics() {
  return (
    <div className="flex flex-col md:flex-row items-center max-w-[75%] md-max-w-[65%] mx-auto mb-8 md:mb-20 bg-zinc-400 md:bg-inherit border border-zinc-500 md:border-none rounded-xl shadow-2xl md:rounded-none md:shadow-none">
      <div className="hidden md:block md:w-1/2 p-3 md:pl-0 lg:pl-3 screenshot-border-b">
        <a
          href="https://www.advantagegraphicsplus.com"
          target="blank"
          rel="noopener noreferrer"
        >
          <img
            src={screenshot}
            alt="Advantage Graphics screenshot"
            className="max-w-xs lg:max-w-sm xl:max-w-md mx-auto rounded-xl shadow-2xl transition ease-in-out hover:-translate-y-1 hover:scale-110"
          />
        </a>
      </div>
      <div className="md:w-1/2 mb-4 p-2 md:ml-12 xl:ml-0">
        <h3 className="section-title text-2xl text-center md:text-4xl mb-5">
          Advantage Graphics Plus – Modern Website Redesign
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
            I developed Advantage Graphics Plus&apos; website to enhance user
            engagement, portfolio showcasing, and functionality. Built with
            Next.js, React, and TypeScript, the site offers a fast, interactive
            experience with a sleek, responsive Tailwind CSS design. Azure
            Static Web Apps provide scalable hosting, while Azure Logic Apps
            streamline contact form submissions. The result? Higher traffic,
            increased user engagement, and a stronger brand presence in the
            digital space.
          </p>
        </div>
        <div className="flex justify-center">
          <a
            href="https://www.advantagegraphicsplus.com"
            target="blank"
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-window-restore text-3xl lg:text-4xl text-amber-700 mr-2 lg:mr-4 transition ease-in-out hover:-translate-y-1 hover:scale-110"></i>
          </a>
          {/* future link to project page */}
          {/* <Link to="/fruitpreserves">
            <i className="fa-solid fa-circle-info text-3xl lg:text-4xl text-amber-700 transition ease-in-out hover:-translate-y-1 hover:scale-110"></i>
          </Link> */}
        </div>
      </div>
    </div>
  );
}
