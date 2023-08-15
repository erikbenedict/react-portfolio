import { Link } from 'react-router-dom';
import screenshot from '../../assets/images/hypehub.png';
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
    <div className="flex flex-col md:flex-row items-center max-w-[75%] md-max-w-[65%] mx-auto mb-20">
      <div className="md:w-1/2 mb-4 p-2">
        <h3 className="section-title text-2xl text-center md:text-4xl mb-5">
          HypeHub
        </h3>
        <div className="project-icons flex justify-center mb-4">
          <HandlebarsIcon iconClassName="project-icon mr-1" showText={false} />
          <NodeIcon iconClassName="project-icon mr-1" showText={false} />
          <JsIcon iconClassName="project-icon mr-1" showText={false} />
          <ExpressIcon iconClassName="project-icon mr-1" showText={false} />
          <MysqlIcon iconClassName="project-icon mr-1" showText={false} />
          <SequelizeIcon iconClassName="project-icon mr-1" showText={false} />
          <BootstrapIcon iconClassName="project-icon mr-1" showText={false} />
          <CssIcon iconClassName="project-icon mr-1" showText={false} />
          <HerokuIcon iconClassName="project-icon mr-1" showText={false} />
        </div>
        <div className="p-3 rounded-xl">
          <p>
            HypeHub is an interactive application that allows users to document
            and showcase their achievements to reflect on growth, stay
            motivated, and have a home for all of these things to easily access
            and manage. Whether you&rsquo;re going into a job interview, asking
            for a promotion, growing a hobby, or just want to hype yourself up a
            little by reflecting previous accomplishments, HypeHub is the
            solution to setting yourself up for even more success!
          </p>
        </div>
        <div className="flex justify-center">
          <a
            href="https://achieved-it-a7cfbbbfd1a9.herokuapp.com/"
            target="blank"
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-window-restore text-3xl text-amber-700 mr-2"></i>
          </a>
          <a
            href="https://github.com/erikbenedict/hype-hub"
            target="blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github text-3xl text-amber-700 mr-2"></i>
          </a>
          <Link to="/hypehub">
            <i className="fa-solid fa-circle-info text-3xl text-amber-700"></i>
          </Link>
        </div>
      </div>
      <div className="hidden md:block md:w-1/2 p-3">
        <img
          src={screenshot}
          alt="HypeHub screenshot"
          className="max-w-xs lg:max-w-md mx-auto rounded-xl shadow-2xl"
        />
      </div>
    </div>
  );
}
