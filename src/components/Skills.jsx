import SkillIcon from './utils/SkillIcon';
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

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        <div className="mb-2 font-end">
          <div className="section-title">
            <h3>Front-End</h3>
          </div>
          <div className="skills-icons">
            <SkillIcon iconSrc={reactIcon} altText="react icon" title="React" />
            <SkillIcon iconSrc={jsIcon} altText="js icon" title="Javascript" />
            <SkillIcon iconSrc={htmlIcon} altText="html icon" title="HTML 5" />
            <SkillIcon iconSrc={cssIcon} altText="css icon" title="CSS 3" />
            <SkillIcon
              iconSrc={tailwindIcon}
              altText="tailwind icon"
              title="Tailwind CSS"
            />
            <SkillIcon
              iconSrc={bootstrapIcon}
              altText="bootstrap icon"
              title="Bootstrap"
            />
          </div>
        </div>
        <div className="mb-2 back-end">
          <div className="section-title">
            <h3>Back-End</h3>
          </div>
          <div className="skills-icons">
            <SkillIcon iconSrc={nodeIcon} altText="node icon" title="Node JS" />
            <SkillIcon
              iconSrc={expressIcon}
              altText="express icon"
              title="Express"
            />
            <SkillIcon iconSrc={mysqlIcon} altText="mysql icon" title="MySQL" />
            <SkillIcon
              iconSrc={sequelizeIcon}
              altText="sequelize icon"
              title="Sequelize"
            />
            <SkillIcon
              iconSrc={mongodbIcon}
              altText="mongodb icon"
              title="MongoDB"
            />
            <SkillIcon
              iconSrc={mongooseIcon}
              altText="mongoose icon"
              title="Mongoose"
            />
          </div>
        </div>
        <div className="mb-2 tools">
          <div className="section-title">
            <h3>Tools</h3>
          </div>
          <div className="skills-icons">
            <SkillIcon iconSrc={gitIcon} altText="git icon" title="Git" />
            <SkillIcon
              iconSrc={insomniaIcon}
              altText="insomnia icon"
              title="Insomnia"
            />
            <SkillIcon
              iconSrc={graphqlIcon}
              altText="graphql icon"
              title="GraphQL"
            />
            <SkillIcon iconSrc={jestIcon} altText="jest icon" title="Jest" />
            <SkillIcon
              iconSrc={herokuIcon}
              altText="heroku icon"
              title="Heroku"
            />
            <SkillIcon
              iconSrc={netlifyIcon}
              altText="netlify icon"
              title="Netlify"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
