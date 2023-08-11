import SkillIcon from './SkillIcon';
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
            <SkillIcon
              iconSrc={reactIcon}
              altText="react icon"
              iconName="React"
            />
            <SkillIcon
              iconSrc={jsIcon}
              altText="js icon"
              iconName="Javascript"
            />
            <SkillIcon
              iconSrc={htmlIcon}
              altText="html icon"
              iconName="HTML 5"
            />
            <SkillIcon iconSrc={cssIcon} altText="css icon" iconName="CSS 3" />
            <SkillIcon
              iconSrc={tailwindIcon}
              altText="tailwind icon"
              iconName="Tailwind CSS"
            />
            <SkillIcon
              iconSrc={bootstrapIcon}
              altText="bootstrap icon"
              iconName="Bootstrap"
            />
          </div>
        </div>
        <div className="mb-2 back-end">
          <div className="section-title">
            <h3>Back-End</h3>
          </div>
          <div className="skills-icons">
            <SkillIcon
              iconSrc={nodeIcon}
              altText="node icon"
              iconName="Node JS"
            />
            <SkillIcon
              iconSrc={expressIcon}
              altText="express icon"
              iconName="Express"
            />
            <SkillIcon
              iconSrc={mysqlIcon}
              altText="mysql icon"
              iconName="MySQL"
            />
            <SkillIcon
              iconSrc={sequelizeIcon}
              altText="sequelize icon"
              iconName="Sequelize"
            />
            <SkillIcon
              iconSrc={mongodbIcon}
              altText="mongodb icon"
              iconName="MongoDB"
            />
            <SkillIcon
              iconSrc={mongooseIcon}
              altText="mongoose icon"
              iconName="Mongoose"
            />
          </div>
        </div>
        <div className="mb-2 tools">
          <div className="section-title">
            <h3>Tools</h3>
          </div>
          <div className="skills-icons">
            <SkillIcon iconSrc={gitIcon} altText="git icon" iconName="Git" />
            <SkillIcon
              iconSrc={insomniaIcon}
              altText="insomnia icon"
              iconName="Insomnia"
            />
            <SkillIcon
              iconSrc={graphqlIcon}
              altText="graphql icon"
              iconName="GraphQL"
            />
            <SkillIcon iconSrc={jestIcon} altText="jest icon" iconName="Jest" />
            <SkillIcon
              iconSrc={herokuIcon}
              altText="heroku icon"
              iconName="Heroku"
            />
            <SkillIcon
              iconSrc={netlifyIcon}
              altText="netlify icon"
              iconName="Netlify"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
