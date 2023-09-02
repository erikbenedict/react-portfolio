// import { Link } from 'react-router-dom';
import screenshot from '../../assets/images/squad-sync.png';
import {
  ReactIcon,
  ExpressIcon,
  NodeIcon,
  MongodbIcon,
  GraphqlIcon,
  ApolloIcon,
  NetlifyIcon,
  MongooseIcon,
  JsIcon,
  HtmlIcon,
  CssIcon,
  TailwindIcon,
} from '../Skills/Icons';

export default function SquadSyncProject() {
  return (
    <div className="flex flex-col md:flex-row items-center max-w-[75%] md-max-w-[65%] mx-auto mb-8 md:mb-20 bg-zinc-400 md:bg-inherit border border-zinc-500 md:border-none rounded-xl shadow-2xl md:rounded-none md:shadow-none">
      <div className="hidden md:block md:w-1/2 p-3 md:pl-0 lg:pl-3 screenshot-border-b">
        <a
          href="https://squad-sync-5e36d690cf8e.herokuapp.com/"
          target="blank"
          rel="noopener noreferrer"
        >
          <img
            src={screenshot}
            alt="SquadSync screenshot"
            className="max-w-xs lg:max-w-sm xl:max-w-md mx-auto rounded-xl shadow-2xl transition ease-in-out hover:-translate-y-1 hover:scale-110"
          />
        </a>
      </div>
      <div className="md:w-1/2 mb-4 p-2 md:ml-12 xl:ml-0">
        <h3 className="section-title text-2xl text-center md:text-4xl mb-5">
          SquadSync
        </h3>
        <div className="project-icons flex justify-center mb-2 md:mb-4">
          <MongodbIcon iconClassName="project-icon mr-1" showText={false} />
          <ExpressIcon iconClassName="project-icon mr-1" showText={false} />
          <ReactIcon iconClassName="project-icon mr-1" showText={false} />
          <NodeIcon iconClassName="project-icon mr-1" showText={false} />
          <GraphqlIcon iconClassName="project-icon mr-1" showText={false} />
          <ApolloIcon iconClassName="project-icon mr-1" showText={false} />
          <MongooseIcon iconClassName="project-icon mr-1" showText={false} />
          <HtmlIcon iconClassName="project-icon mr-1" showText={false} />
          <JsIcon iconClassName="project-icon mr-1" showText={false} />
          <TailwindIcon iconClassName="project-icon mr-1" showText={false} />
          <CssIcon iconClassName="project-icon mr-1" showText={false} />
          <NetlifyIcon iconClassName="project-icon mr-1" showText={false} />
        </div>
        <div className="p-3 text-center lg:text-left md:bg-zinc-400 md:border md:border-zinc-500 md:rounded-xl md:shadow-2xl md:mb-4">
          <p>
            SquadSync introduces an innovative application designed to
            effortlessly manage your tasks and lists. Drawing inspiration from
            the concept of a &quot;HoneyDo&quot; list, users can establish their
            accounts to meticulously organize their diverse lists. One of the
            standout features of SquadSync is its collaborative nature. Users
            can readily add multiple participants to contribute to their
            individual lists, transcending the boundaries of solo task
            management.
          </p>
        </div>
        <div className="flex justify-center">
          <a
            href="https://squad-sync-5e36d690cf8e.herokuapp.com/"
            target="blank"
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-window-restore text-3xl lg:text-4xl text-amber-700 mr-2 lg:mr-4 transition ease-in-out hover:-translate-y-1 hover:scale-110"></i>
          </a>
          <a
            href="https://github.com/erikbenedict/squad-sync"
            target="blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github text-3xl lg:text-4xl text-amber-700 mr-2 lg:mr-4 transition ease-in-out hover:-translate-y-1 hover:scale-110"></i>
          </a>
          {/* future link to project page */}
          {/* <Link to="/squadsync">
            <i className="fa-solid fa-circle-info text-3xl lg:text-4xl text-amber-700 transition ease-in-out hover:-translate-y-1 hover:scale-110"></i>
          </Link> */}
        </div>
      </div>
    </div>
  );
}
