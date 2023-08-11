import { Link } from 'react-router-dom';
import SkillIcon from '../../Skills/SkillIcon';
import cssIcon from '../../assets/images/css.png';
import bootstrapIcon from '../../assets/images/bootstrap.png';
import jsIcon from '../assets/images/js.png';
import nodeIcon from '../../assets/images/node.png';
import expressIcon from '../../assets/images/express.png';
import mysqlIcon from '../../assets/images/mysql.png';
import sequelizeIcon from '../../assets/images/sequelize.png';
import handlebarsIcon from '../../assets/images/handlebars.png';
import herokuIcon from '../assets/images/heroku.png';

export default function HypeHub() {
  return (
    <div className="project-container">
      <h3 className="project-title">HypeHub</h3>
      <div className="project-icons">
        <SkillIcon
          divClassName="project-icon-div"
          iconSrc={handlebarsIcon}
          iconTitle="Handlebars"
          altText="handlebars icon"
          iconClassName="project-icon"
          showText={false}
        />
        <SkillIcon
          divClassName="project-icon-div"
          iconSrc={nodeIcon}
          iconTitle="Node"
          altText="node icon"
          iconClassName="project-icon"
          showText={false}
        />
        <SkillIcon
          divClassName="project-icon-div"
          iconSrc={jsIcon}
          iconTitle="JavaScript"
          altText="JavaScript icon"
          iconClassName="project-icon"
          showText={false}
        />
        <SkillIcon
          divClassName="project-icon-div"
          iconSrc={expressIcon}
          iconTitle="Express"
          altText="express icon"
          iconClassName="project-icon"
          showText={false}
        />
        <SkillIcon
          divClassName="project-icon-div"
          iconSrc={mysqlIcon}
          iconTitle="MySQL"
          altText="mysql icon"
          iconClassName="project-icon"
          showText={false}
        />
        <SkillIcon
          divClassName="project-icon-div"
          iconSrc={sequelizeIcon}
          iconTitle="Sequelize"
          altText="sequelize icon"
          iconClassName="project-icon"
          showText={false}
        />
        <SkillIcon
          divClassName="project-icon-div"
          iconSrc={bootstrapIcon}
          iconTitle="Bootstrap"
          altText="bootstrap icon"
          iconClassName="project-icon"
          showText={false}
        />
        <SkillIcon
          divClassName="project-icon-div"
          iconSrc={cssIcon}
          iconTitle="CSS 3"
          altText="css icon"
          iconClassName="project-icon"
          showText={false}
        />
        <SkillIcon
          divClassName="project-icon-div"
          iconSrc={herokuIcon}
          iconTitle="Heroku"
          altText="heroku icon"
          iconClassName="project-icon"
          showText={false}
        />
      </div>
      <p className="project-summary">
        An interactive application that allows users to document their
        achievements to easily access and manage.
      </p>
      <a
        href="https://achieved-it-a7cfbbbfd1a9.herokuapp.com/"
        target="blank"
        rel="noopener noreferrer"
      >
        <button className="live-btn" type="button">
          See Live
        </button>
      </a>
      <a
        href="https://github.com/erikbenedict/hype-hub"
        target="blank"
        rel="noopener noreferrer"
      >
        <button className="source-btn" type="button">
          Source Code
        </button>
      </a>
      <Link to="/hypehub">
        <button className="source-btn" type="button">
          More Details
        </button>
      </Link>
      <div className="project-screen-shot">
        <img src="" alt="" />
      </div>
    </div>
  );
}
