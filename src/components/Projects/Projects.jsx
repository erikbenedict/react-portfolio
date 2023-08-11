import { Link } from 'react-router-dom';
import SkillIcon from '../Skills/SkillIcon';
import reactIcon from '../assets/images/react.png';
import jsIcon from '../assets/images/js.png';
import htmlIcon from '../assets/images/html.png';
import cssIcon from '../assets/images/css.png';
import tailwindIcon from '../assets/images/tailwind.png';
import bootstrapIcon from '../assets/images/bootstrap.png';
import nodeIcon from '../assets/images/node.png';
import expressIcon from '../assets/images/express.png';
import mysqlIcon from '../assets/images/mysql.png';
import sequelizeIcon from '../assets/images/sequelize.png';
import mongodbIcon from '../assets/images/mongodb.png';
import mongooseIcon from '../assets/images/mongoose.png';
import gitIcon from '../assets/images/git.png';
import insomniaIcon from '../assets/images/insomnia.png';
import graphqlIcon from '../assets/images/graphql.png';
import jestIcon from '../assets/images/jest.png';
import herokuIcon from '../assets/images/heroku.png';
import netlifyIcon from '../assets/images/netlify.png';
import handlebarsIcon from '../assets/images/handlebars.png';
import HypeHubProject from './HypeHubProject';
import FruitPreservesProject from './FruitPreservesProject';

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <HypeHubProject />
      <FruitPreservesProject />
    </section>
  );
}
